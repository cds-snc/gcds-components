import { newSpecPage } from '@stencil/core/testing';
import { GcdsRadio } from '../gcds-radio';

describe('gcds-radio', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [GcdsRadio],
      html: `<gcds-radio
          label="radio"
          name="radio"
          radio-id="radio"
        ></gcds-radio>`,
    });
    expect(page.root).toEqualHtml(`
      <gcds-radio radio-id="radio" label="radio" name="radio">
        <div class="gcds-radio">
           <input id="radio" name="radio" type="radio">
           <gcds-label label="radio" label-for="radio" lang="en"></gcds-label>
         </div>
      </gcds-radio>
    `);
  });
  it('renders checked w/ value', async () => {
    const page = await newSpecPage({
      components: [GcdsRadio],
      html: `<gcds-radio
          label="radio"
          name="radio"
          radio-id="radio"
          value="terms"
          checked
        ></gcds-radio>`,
    });
    expect(page.root).toEqualHtml(`
      <gcds-radio radio-id="radio" checked="" label="radio" name="radio" value="terms">
        <div class="gcds-radio">
           <input checked="" id="radio" name="radio" type="radio" value="terms">
           <gcds-label label="radio" label-for="radio" lang="en"></gcds-label>
         </div>
      </gcds-radio>
    `);
  });
  it('renders w/ hint', async () => {
    const page = await newSpecPage({
      components: [GcdsRadio],
      html: `<gcds-radio
          label="radio"
          name="radio"
          radio-id="radio"
          hint="this is a hint"
        ></gcds-radio>`,
    });
    expect(page.root).toEqualHtml(`
      <gcds-radio radio-id="radio" hint="this is a hint" label="radio" name="radio">
        <div class="gcds-radio">
           <input aria-describedby="hint-radio " id="radio" name="radio" type="radio">
           <gcds-label label="radio" label-for="radio" lang="en"></gcds-label>
           <gcds-hint hint="this is a hint" hint-id="radio"></gcds-hint>
         </div>
      </gcds-radio>
    `);
  });
  it('renders disabled', async () => {
    const page = await newSpecPage({
      components: [GcdsRadio],
      html: `<gcds-radio
          label="radio"
          name="radio"
          radio-id="radio"
          disabled
        ></gcds-radio>`,
    });
    expect(page.root).toEqualHtml(`
      <gcds-radio radio-id="radio" disabled="" label="radio" name="radio">
        <div class="gcds-disabled gcds-radio">
           <input disabled="" id="radio" name="radio" type="radio">
           <gcds-label label="radio" label-for="radio" lang="en"></gcds-label>
         </div>
      </gcds-radio>
    `);
  });
});
