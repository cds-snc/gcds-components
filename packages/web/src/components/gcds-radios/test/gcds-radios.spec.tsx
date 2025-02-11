import { newSpecPage } from '@stencil/core/testing';
import { GcdsRadios } from '../gcds-radios';

describe('gcds-radios', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [GcdsRadios],
      html: `<gcds-radios
          name="radio"
          options='[{ "label": "Label", "id": "radio", "value": "radio"}]'
        >
        </gcds-radios>`,
    });
    expect(page.root).toEqualHtml(`
      <gcds-radios name="radio" options='[{ "label": "Label", "id": "radio", "value": "radio"}]'>
        <mock:shadow-root>
          <div class="gcds-radio">
            <input id="radio" name="radio" type="radio" value="radio">
            <gcds-label label="Label" label-for="radio" lang="en"></gcds-label>
          </div>
        </mock:shadow-root>
      </gcds-radios>
    `);
  });
  it('renders checked', async () => {
    const page = await newSpecPage({
      components: [GcdsRadios],
      html: `<gcds-radios
          name="radio"
          options='[{ "label": "Label", "id": "radio", "value": "radio", "checked": true}]'
        >
        </gcds-radios>`,
    });
    expect(page.root).toEqualHtml(`
      <gcds-radios name="radio" options='[{ "label": "Label", "id": "radio", "value": "radio", "checked": true}]'>
        <mock:shadow-root>
          <div class="gcds-radio">
            <input checked="" id="radio" name="radio" type="radio" value="radio">
            <gcds-label label="Label" label-for="radio" lang="en"></gcds-label>
          </div>
        </mock:shadow-root>
      </gcds-radios>
    `);
  });
  it('renders w/ hint', async () => {
    const page = await newSpecPage({
      components: [GcdsRadios],
      html: `<gcds-radios
          name="radio"
          options='[{ "label": "Label", "id": "radio", "value": "radio", "hint": "This is a hint."}]'
        >
        </gcds-radios>`,
    });
    expect(page.root).toEqualHtml(`
      <gcds-radios name="radio" options='[{ "label": "Label", "id": "radio", "value": "radio", "hint": "This is a hint."}]'>
        <mock:shadow-root>
          <div class="gcds-radio">
            <input aria-describedby="hint-radio " id="radio" name="radio" type="radio" value="radio">
            <gcds-label label="Label" label-for="radio" lang="en"></gcds-label>
            <gcds-hint hint-id="radio">This is a hint.</gcds-hint>
          </div>
        </mock:shadow-root>
      </gcds-radios>
    `);
  });
  it('renders disabled', async () => {
    const page = await newSpecPage({
      components: [GcdsRadios],
      html: `<gcds-radios
          name="radio"
          options='[{ "label": "Label", "id": "radio", "value": "radio", "disabled": true }]'
        >
        </gcds-radios>`,
    });
    expect(page.root).toEqualHtml(`
      <gcds-radios name="radio" options='[{ "label": "Label", "id": "radio", "value": "radio", "disabled": true }]'>
        <mock:shadow-root>
          <div class="gcds-radio--disabled gcds-radio">
            <input disabled="" id="radio" name="radio" type="radio" value="radio">
            <gcds-label label="Label" label-for="radio" lang="en"></gcds-label>
          </div>
        </mock:shadow-root>
      </gcds-radios>
    `);
  });
  it('renders multiple radio buttons', async () => {
    const page = await newSpecPage({
      components: [GcdsRadios],
      html: `<gcds-radios
          name="radio"
          options='[{ "label": "Label 1", "id": "radio1", "value": "radio1"}, { "label": "Label 2", "id": "radio2", "value": "radio2"}, { "label": "Label 3", "id": "radio3", "value": "radio3"}]'
        >
        </gcds-radios>`,
    });
    expect(page.root).toEqualHtml(`
      <gcds-radios name="radio" options='[{ "label": "Label 1", "id": "radio1", "value": "radio1"}, { "label": "Label 2", "id": "radio2", "value": "radio2"}, { "label": "Label 3", "id": "radio3", "value": "radio3"}]'>
        <mock:shadow-root>
          <div class="gcds-radio">
            <input id="radio1" name="radio" type="radio" value="radio1">
            <gcds-label label="Label 1" label-for="radio1" lang="en"></gcds-label>
          </div>
          <div class="gcds-radio">
            <input id="radio2" name="radio" type="radio" value="radio2">
            <gcds-label label="Label 2" label-for="radio2" lang="en"></gcds-label>
          </div>
          <div class="gcds-radio">
            <input id="radio3" name="radio" type="radio" value="radio3">
            <gcds-label label="Label 3" label-for="radio3" lang="en"></gcds-label>
          </div>
        </mock:shadow-root>
      </gcds-radios>
    `);
  });
});
