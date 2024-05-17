import { newSpecPage } from '@stencil/core/testing';
import { GcdsCheckbox } from '../gcds-checkbox';

describe('gcds-checkbox', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [GcdsCheckbox],
      html: `<gcds-checkbox
          label="checkbox"
          name="checkbox"
          checkbox-id="checkbox"
        ></gcds-checkbox>`,
    });
    expect(page.root).toEqualHtml(`
      <gcds-checkbox checkbox-id="checkbox" label="checkbox" name="checkbox">
        <mock:shadow-root>
          <div class="gcds-checkbox">
            <input id="checkbox" name="checkbox" type="checkbox">
            <gcds-label label="checkbox" label-for="checkbox" lang="en"></gcds-label>
          </div>
        </mock:shadow-root>
      </gcds-checkbox>
    `);
  });
  it('renders checked w/ value', async () => {
    const page = await newSpecPage({
      components: [GcdsCheckbox],
      html: `<gcds-checkbox
          label="checkbox"
          name="checkbox"
          checkbox-id="checkbox"
          value="terms"
          checked
        ></gcds-checkbox>`,
    });
    expect(page.root).toEqualHtml(`
      <gcds-checkbox checkbox-id="checkbox" checked="" label="checkbox" name="checkbox" value="terms">
        <mock:shadow-root>
          <div class="gcds-checkbox">
            <input checked="" id="checkbox" name="checkbox" type="checkbox" value="terms">
            <gcds-label label="checkbox" label-for="checkbox" lang="en"></gcds-label>
          </div>
        </mock:shadow-root>
      </gcds-checkbox>
    `);
  });
  it('renders w/ hint', async () => {
    const page = await newSpecPage({
      components: [GcdsCheckbox],
      html: `<gcds-checkbox
          label="checkbox"
          name="checkbox"
          checkbox-id="checkbox"
          hint="This is a hint."
        ></gcds-checkbox>`,
    });
    expect(page.root).toEqualHtml(`
      <gcds-checkbox checkbox-id="checkbox" hint="This is a hint." label="checkbox" name="checkbox">
        <mock:shadow-root>
          <div class="gcds-checkbox">
            <input aria-describedby="hint-checkbox " id="checkbox" name="checkbox" type="checkbox">
            <gcds-label label="checkbox" label-for="checkbox" lang="en"></gcds-label>
            <gcds-hint hint-id="checkbox">This is a hint.</gcds-hint>
          </div>
        </mock:shadow-root>
      </gcds-checkbox>
    `);
  });
  it('renders w/ error message', async () => {
    const page = await newSpecPage({
      components: [GcdsCheckbox],
      html: `<gcds-checkbox
          label="checkbox"
          name="checkbox"
          checkbox-id="checkbox"
          error-message="This needs to be checked"
        ></gcds-checkbox>`,
    });
    expect(page.root).toEqualHtml(`
      <gcds-checkbox checkbox-id="checkbox" error-message="This needs to be checked" label="checkbox" name="checkbox">
        <mock:shadow-root>
          <div class="gcds-checkbox gcds-checkbox--error">
            <input aria-describedby="error-message-checkbox " aria-invalid="true" id="checkbox" name="checkbox" type="checkbox">
            <gcds-label label="checkbox" label-for="checkbox" lang="en"></gcds-label>
            <gcds-error-message messageId="checkbox">
              This needs to be checked
            </gcds-error-message>
          </div>
        </mock:shadow-root>
      </gcds-checkbox>
    `);
  });
  it('renders disabled', async () => {
    const page = await newSpecPage({
      components: [GcdsCheckbox],
      html: `<gcds-checkbox
          label="checkbox"
          name="checkbox"
          checkbox-id="checkbox"
          disabled
        ></gcds-checkbox>`,
    });
    expect(page.root).toEqualHtml(`
      <gcds-checkbox checkbox-id="checkbox" disabled="" error-message="" label="checkbox" name="checkbox">
        <mock:shadow-root>
          <div class="gcds-checkbox gcds-checkbox--disabled">
            <input disabled="" id="checkbox" name="checkbox" type="checkbox">
            <gcds-label label="checkbox" label-for="checkbox" lang="en"></gcds-label>
          </div>
        </mock:shadow-root>
      </gcds-checkbox>
    `);
  });
});
