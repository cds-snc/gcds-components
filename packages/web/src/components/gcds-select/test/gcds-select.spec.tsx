import { newSpecPage } from '@stencil/core/testing';
import { GcdsSelect } from '../gcds-select';

describe('gcds-select', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [GcdsSelect],
      html: `<gcds-select label="select" select-id="select"></gcds-select>`,
    });
    expect(page.root).toEqualHtml(`
      <gcds-select select-id="select" label="select">
        <div class="gcds-select-wrapper">
          <gcds-label label="select" label-for="select" lang="en"></gcds-label>
          <select id="select" name="select" aria-invalid="false">
          </select>
        </div>
      </gcds-select>
    `);
  });

  /**
    * Disabled test
    */
  it('renders disabled', async () => {
    const page = await newSpecPage({
      components: [GcdsSelect],
      html: `<gcds-select label="select" select-id="select" disabled></gcds-select>`,
    });
    expect(page.root).toEqualHtml(`
      <gcds-select select-id="select" label="select" disabled error-message="">
        <div class="gcds-select-wrapper gcds-disabled">
          <gcds-label label="select" label-for="select" lang="en"></gcds-label>
          <select id="select" name="select" aria-invalid="false" disabled>
          </select>
        </div>
      </gcds-select>
    `);
  });

  /**
    * Error message test
    */
  it('renders error message', async () => {
    const page = await newSpecPage({
      components: [GcdsSelect],
      html: `<gcds-select label="select" select-id="select" error-message="This is an error message."></gcds-select>`,
    });
    expect(page.root).toEqualHtml(`
      <gcds-select select-id="select" label="select" error-message="This is an error message.">
        <div class="gcds-select-wrapper gcds-error">
          <gcds-label label="select" label-for="select" lang="en"></gcds-label>
          <gcds-error-message message="This is an error message." messageId="select"></gcds-error-message>
          <select id="select" name="select" aria-invalid="true" aria-describedby="error-message-select ">
          </select>
        </div>
      </gcds-select>
    `);
  });

  /**
    * Select hint test
    */
  it('renders hint', async () => {
    const page = await newSpecPage({
      components: [GcdsSelect],
      html: `<gcds-select label="select" select-id="select" hint="This is a hint."></gcds-select>`,
    });
    expect(page.root).toEqualHtml(`
      <gcds-select select-id="select" label="select" hint="This is a hint.">
        <div class="gcds-select-wrapper">
          <gcds-label label="select" label-for="select" lang="en"></gcds-label>
          <gcds-hint hint="This is a hint." hint-id="select"></gcds-hint>
          <select id="select" name="select" aria-invalid="false" aria-describedby="hint-select ">
          </select>
        </div>
      </gcds-select>
    `);
  });

  /**
    * Select ID test
    */
  it('renders select id', async () => {
    const page = await newSpecPage({
      components: [GcdsSelect],
      html: `<gcds-select label="select" select-id="select"></gcds-select>`,
    });
    expect(page.root).toEqualHtml(`
      <gcds-select select-id="select" label="select">
        <div class="gcds-select-wrapper">
          <gcds-label label="select" label-for="select" lang="en"></gcds-label>
          <select id="select" name="select" aria-invalid="false">
          </select>
        </div>
      </gcds-select>
    `);
  });

  /**
    * Select label test
    */
  it('renders select label', async () => {
    const page = await newSpecPage({
      components: [GcdsSelect],
      html: `<gcds-select label="select" select-id="select"></gcds-select>`,
    });
    expect(page.root).toEqualHtml(`
      <gcds-select select-id="select" label="select">
        <div class="gcds-select-wrapper">
          <gcds-label label="select" label-for="select" lang="en"></gcds-label>
          <select id="select" name="select" aria-invalid="false">
          </select>
        </div>
      </gcds-select>
    `);
  });

  /**
    * Select required test
    */
  it('renders required', async () => {
    const page = await newSpecPage({
      components: [GcdsSelect],
      html: `<gcds-select label="select" select-id="select" required></gcds-select>`,
    });
    expect(page.root).toEqualHtml(`
      <gcds-select select-id="select" label="select" required>
        <div class="gcds-select-wrapper">
          <gcds-label label="select" label-for="select" lang="en" required=""></gcds-label>
          <select id="select" name="select" aria-invalid="false" required="">
          </select>
        </div>
      </gcds-select>
    `);
  });

  /**
    * Select with options test
    */
  it('renders select with options', async () => {
    const page = await newSpecPage({
      components: [GcdsSelect],
      html: `
        <gcds-select label="select" select-id="select">
          <option>This is option 1</option>
          <option>This is option 2</option>
          <option>This is option 3</option>
        </gcds-select>
      `,
    });
    expect(page.root).toEqualHtml(`
      <gcds-select select-id="select" label="select">
        <div class="gcds-select-wrapper">
          <gcds-label label="select" label-for="select" lang="en"></gcds-label>
          <select id="select" name="select" aria-invalid="false">
            <option>This is option 1</option>
            <option>This is option 2</option>
            <option>This is option 3</option>
          </select>
        </div>
      </gcds-select>
    `);
  });

  /**
    * Select with options and default value test
    */
  it('renders select with options and default value', async () => {
    const page = await newSpecPage({
      components: [GcdsSelect],
      html: `
        <gcds-select label="select" select-id="select" default-value="Please select one">
          <option>This is option 1</option>
          <option>This is option 2</option>
          <option>This is option 3</option>
        </gcds-select>
      `,
    });
    expect(page.root).toEqualHtml(`
      <gcds-select select-id="select" label="select" default-value="Please select one">
        <div class="gcds-select-wrapper">
          <gcds-label label="select" label-for="select" lang="en"></gcds-label>
          <select id="select" name="select" aria-invalid="false">
            <option value="" selected disabled="">Please select one</option>
            <option>This is option 1</option>
            <option>This is option 2</option>
            <option>This is option 3</option>
          </select>
        </div>
      </gcds-select>
    `);
  });
});
