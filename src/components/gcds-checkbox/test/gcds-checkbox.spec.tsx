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
        <div class="gcds-checkbox-wrapper">
           <input id="checkbox" name="checkbox" type="checkbox">
           <gcds-label label="checkbox" label-for="checkbox" lang="en"></gcds-label>
         </div>
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
        <div class="gcds-checkbox-wrapper">
           <input checked="" id="checkbox" name="checkbox" type="checkbox" value="terms">
           <gcds-label label="checkbox" label-for="checkbox" lang="en"></gcds-label>
         </div>
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
          hint="this is a hint"
        ></gcds-checkbox>`,
    });
    expect(page.root).toEqualHtml(`
      <gcds-checkbox checkbox-id="checkbox" hint="this is a hint" label="checkbox" name="checkbox">
        <div class="gcds-checkbox-wrapper">
           <input aria-describedby="hint-checkbox  " id="checkbox" name="checkbox" type="checkbox">
           <gcds-label label="checkbox" label-for="checkbox" lang="en"></gcds-label>
           <gcds-hint hint="this is a hint" hint-id="checkbox"></gcds-hint>
         </div>
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
        <div class="gcds-checkbox-wrapper gcds-error">
           <input aria-describedby=" error-message-checkbox " aria-invalid="true" id="checkbox" name="checkbox" type="checkbox">
           <gcds-label label="checkbox" label-for="checkbox" lang="en"></gcds-label>
           <gcds-error-message message="This needs to be checked" message-id="checkbox"></gcds-error-message>
         </div>
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
        <div class="gcds-checkbox-wrapper gcds-disabled">
           <input disabled="" id="checkbox" name="checkbox" type="checkbox">
           <gcds-label label="checkbox" label-for="checkbox" lang="en"></gcds-label>
         </div>
      </gcds-checkbox>
    `);
  });
});
