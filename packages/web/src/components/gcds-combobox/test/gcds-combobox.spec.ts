import { MockElement } from '@stencil/core/mock-doc';
import { newSpecPage } from '@stencil/core/testing';
import { GcdsCombobox } from '../gcds-combobox';

beforeAll(() => {
  jest.spyOn(MockElement.prototype, 'attachInternals').mockImplementation(
    () =>
      ({
        setFormValue: jest.fn(),
        setValidity: jest.fn(),
        validity: { valid: true },
        checkValidity: jest.fn(() => true),
        validationMessage: '',
      }) as any,
  );
});

const createCombobox = (options?: string | Array<Record<string, unknown>>) => {
  const combobox = Object.create(GcdsCombobox.prototype) as any;
  combobox.options = options;
  Object.defineProperty(combobox, 'el', {
    value: { querySelector: jest.fn() },
    configurable: true,
  });
  combobox.optionsList = [];
  combobox.filteredOptions = [];
  combobox.selectedOptions = [];
  return combobox;
};

describe('gcds-combobox options', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  afterAll(() => {
    jest.restoreAllMocks();
  });

  it('loads options from a JSON array string', async () => {
    const combobox = createCombobox('[{"Apple":"apple"},{"Banana":"banana"}]');

    await combobox.loadOptions();

    expect(combobox.optionsList).toEqual([
      { label: 'Apple', value: 'apple' },
      { label: 'Banana', value: 'banana' },
    ]);
  });

  it('loads options from an array property', async () => {
    const combobox = createCombobox([{ Pear: 'pear' }, { Plum: 'plum' }]);

    await combobox.loadOptions();

    expect(combobox.optionsList).toEqual([
      { label: 'Pear', value: 'pear' },
      { label: 'Plum', value: 'plum' },
    ]);
  });

  it('loads options from a URL', async () => {
    const fetchMock = jest.spyOn(global, 'fetch').mockResolvedValue({
      ok: true,
      json: async () => [{ kiwi: 'Kiwi' }],
    } as Response);
    const combobox = createCombobox('/options.json');

    await combobox.loadOptions();

    expect(fetchMock).toHaveBeenCalledWith('/options.json');
    expect(combobox.optionsList).toEqual([{ label: 'kiwi', value: 'Kiwi' }]);
  });

  it('loads options from a select in the options slot', async () => {
    const select = {
      options: [
        { value: 'apple', textContent: 'Apple' },
        { value: 'pear', textContent: 'Pear' },
      ],
    };
    const combobox = createCombobox();
    combobox.el.querySelector.mockReturnValue(select);

    await combobox.loadOptions();

    expect(combobox.el.querySelector).toHaveBeenCalledWith('[slot="options"]');
    expect(combobox.optionsList).toEqual([
      { label: 'apple', value: 'Apple' },
      { label: 'pear', value: 'Pear' },
    ]);
  });

  it('filters out options with missing or empty values', async () => {
    const combobox = createCombobox([
      { Valid: 'valid' },
      { Missing: null },
      { Empty: '' },
    ]);

    await combobox.loadOptions();

    expect(combobox.optionsList).toEqual([{ label: 'Valid', value: 'valid' }]);
  });

  it('replaces options through setOptions using the same label-to-value format', async () => {
    const combobox = createCombobox();
    combobox.gcdsChange = { emit: jest.fn() };
    combobox.internals = {
      setFormValue: jest.fn(),
      setValidity: jest.fn(),
    };

    await combobox.setOptions([{ Grape: 'grape' }, { Melon: 'melon' }]);

    expect(combobox.optionsList).toEqual([
      { label: 'Grape', value: 'grape' },
      { label: 'Melon', value: 'melon' },
    ]);
  });

  it('keeps the option list empty when no option source is provided', async () => {
    const combobox = createCombobox();

    await combobox.loadOptions();

    expect(combobox.optionsList).toEqual([]);
    expect(combobox.filteredOptions).toEqual([]);
  });

  it('renders the label, input ID, hidden label, hint, required state, and form', async () => {
    const page = await newSpecPage({
      components: [GcdsCombobox],
      html: `<gcds-combobox input-id="topics-id" label="Topics" name="topics" hide-label hint="Choose topics" required form="topics-form"></gcds-combobox>`,
    });

    const label = page.root.shadowRoot.querySelector('gcds-label');
    const hint = page.root.shadowRoot.querySelector('gcds-hint');
    const input = page.root.shadowRoot.querySelector('input');

    expect(label.getAttribute('label')).toBe('Topics');
    expect(label.hasAttribute('hide-label')).toBe(true);
    expect(label.hasAttribute('required')).toBe(true);
    expect(input.id).toBe('topics-id');
    expect(input.getAttribute('aria-labelledby')).toBe('label-for-topics-id');
    expect(input.getAttribute('aria-required')).toBe('true');
    expect(input.getAttribute('aria-describedby')).toContain('hint-topics-id');
    expect(input.getAttribute('form')).toBe('topics-form');
    expect(hint.textContent.trim()).toBe('Choose topics');
  });

  it('uses name for form submission', async () => {
    const page = await newSpecPage({
      components: [GcdsCombobox],
      html: `<gcds-combobox input-id="topics-id" label="Topics" name="topic-values" options='[{"Apple":"apple"},{"Pear":"pear"}]'></gcds-combobox>`,
    });
    const component = page.rootInstance as any;
    component.selectedOptions = [{ label: 'Apple', value: 'apple' }];
    component.updateFormValue();

    const formValue = component.internals.setFormValue.mock.calls.at(-1)[0];
    expect(formValue.getAll('topic-values')).toEqual(['apple']);
  });

  it('disables the input when disabled, including when required', async () => {
    const page = await newSpecPage({
      components: [GcdsCombobox],
      html: `<gcds-combobox input-id="topics-id" label="Topics" name="topics" required disabled></gcds-combobox>`,
    });

    expect(page.root.hasAttribute('disabled')).toBe(true);
    expect(page.root.shadowRoot.querySelector('input').disabled).toBe(true);
    expect(
      page.root.shadowRoot.querySelector('.gcds-combobox').classList.contains('gcds-disabled'),
    ).toBe(true);
  });

  it('enables the select-all option when enable-select-all is set', async () => {
    const page = await newSpecPage({
      components: [GcdsCombobox],
      html: `<gcds-combobox input-id="topics-id" label="Topics" name="topics" enable-select-all options='[{"Apple":"apple"}]'></gcds-combobox>`,
    });

    expect(
      Array.from(page.root.shadowRoot.querySelectorAll('[role="option"]')).map(
        option => option.textContent.trim(),
      ),
    ).toEqual(['Select all options', 'apple']);
  });

  it('renders a selected option as a removable tag', async () => {
    const page = await newSpecPage({
      components: [GcdsCombobox],
      html: `<gcds-combobox input-id="topics-id" label="Topics" name="topics" options='[{"Apple":"apple"},{"Pear":"pear"}]'></gcds-combobox>`,
    });
    page.root.selectedOptions = [{ label: 'Apple', value: 'apple' }];
    await page.waitForChanges();

    expect(
      page.root.shadowRoot.querySelector('.gcds-combobox__tag').textContent.trim(),
    ).toBe('apple');
  });

  it('renders an error message and marks the input invalid', async () => {
    const page = await newSpecPage({
      components: [GcdsCombobox],
      html: `<gcds-combobox input-id="topics-id" label="Topics" name="topics" error-message="Choose a valid topic"></gcds-combobox>`,
    });

    expect(
      page.root.shadowRoot.querySelector('gcds-error-message').textContent.trim(),
    ).toBe('Choose a valid topic');
    expect(page.root.shadowRoot.querySelector('input').getAttribute('aria-invalid')).toBe('true');
  });

  it('accepts value, validator, validate-on, and validity properties', async () => {
    const page = await newSpecPage({
      components: [GcdsCombobox],
      html: `<gcds-combobox input-id="topics-id" label="Topics" name="topics" value="apple" validate-on="other"></gcds-combobox>`,
    });
    page.root.validator = ['requiredSelectField'];
    await page.waitForChanges();

    expect(page.root.value).toBe('apple');
    expect(page.root.validateOn).toBe('other');
    expect(typeof page.rootInstance._validator.validate).toBe('function');
    expect(page.root.validity.valid).toBe(true);
  });

  it('applies autofocus by focusing the input after load', async () => {
    const page = await newSpecPage({
      components: [GcdsCombobox],
      html: `<gcds-combobox input-id="topics-id" label="Topics" name="topics" autofocus></gcds-combobox>`,
    });
    const focus = jest.fn();
    page.rootInstance.inputElement.focus = focus;
    const requestAnimationFrame = global.requestAnimationFrame;
    global.requestAnimationFrame = callback => {
      callback(0);
      return 0;
    };

    page.rootInstance.componentDidLoad();

    expect(focus).toHaveBeenCalled();
    global.requestAnimationFrame = requestAnimationFrame;
  });
});
