import { newSpecPage } from '@stencil/core/testing';
import { GcdsSelect } from '../gcds-select';

describe('gcds-select', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [GcdsSelect],
      html: `<gcds-select label="select" select-id="select" name="select-name"></gcds-select>`,
    });
    expect(page.root).toEqualHtml(`
      <gcds-select select-id="select" label="select" name="select-name">
        <mock:shadow-root>
          <div class="gcds-select-wrapper">
            <gcds-label label="select" label-for="select" lang="en"></gcds-label>
            <select id="select" name="select-name" part="select" aria-invalid="false">
            </select>
          </div>
        </mock:shadow-root>
      </gcds-select>
    `);
  });

  /**
   * Disabled test
   */
  it('renders disabled', async () => {
    const page = await newSpecPage({
      components: [GcdsSelect],
      html: `<gcds-select label="select" select-id="select" name="select-name" disabled></gcds-select>`,
    });
    expect(page.root).toEqualHtml(`
      <gcds-select select-id="select" label="select" name="select-name" disabled error-message="">
        <mock:shadow-root>
          <div class="gcds-select-wrapper gcds-disabled">
            <gcds-label label="select" label-for="select" lang="en"></gcds-label>
            <select id="select" name="select-name" part="select" aria-invalid="false" disabled>
            </select>
          </div>
        </mock:shadow-root>
      </gcds-select>
    `);
  });

  /**
   * Error message test
   */
  it('renders error message', async () => {
    const page = await newSpecPage({
      components: [GcdsSelect],
      html: `<gcds-select label="select" select-id="select" name="select-name" error-message="This is an error message."></gcds-select>`,
    });
    expect(page.root).toEqualHtml(`
      <gcds-select select-id="select" label="select" name="select-name" error-message="This is an error message.">
        <mock:shadow-root>
          <div class="gcds-select-wrapper gcds-error">
            <gcds-label label="select" label-for="select" lang="en"></gcds-label>
            <gcds-error-message messageId="select">
              This is an error message.
            </gcds-error-message>
            <select id="select" name="select-name" part="select" aria-invalid="true" aria-describedby="error-message-select ">
            </select>
          </div>
        </mock:shadow-root>
      </gcds-select>
    `);
  });

  /**
   * Select hint test
   */
  it('renders hint', async () => {
    const page = await newSpecPage({
      components: [GcdsSelect],
      html: `<gcds-select label="select" select-id="select" name="select-name" hint="This is a hint."></gcds-select>`,
    });
    expect(page.root).toEqualHtml(`
      <gcds-select select-id="select" label="select" name="select-name" hint="This is a hint.">
        <mock:shadow-root>
          <div class="gcds-select-wrapper">
            <gcds-label label="select" label-for="select" lang="en"></gcds-label>
            <gcds-hint hint-id="select">This is a hint.</gcds-hint>
            <select id="select" name="select-name" part="select" aria-invalid="false" aria-describedby="hint-select ">
            </select>
          </div>
        </mock:shadow-root>
      </gcds-select>
    `);
  });

  /**
   * Select ID test
   */
  it('renders select id', async () => {
    const page = await newSpecPage({
      components: [GcdsSelect],
      html: `<gcds-select label="select" select-id="select" name="select-name"></gcds-select>`,
    });
    expect(page.root).toEqualHtml(`
      <gcds-select select-id="select" name="select-name" label="select">
        <mock:shadow-root>
          <div class="gcds-select-wrapper">
            <gcds-label label="select" label-for="select" lang="en"></gcds-label>
            <select id="select" name="select-name" part="select" aria-invalid="false">
            </select>
          </div>
        </mock:shadow-root>
      </gcds-select>
    `);
  });

  /**
   * Select label test
   */
  it('renders select label', async () => {
    const page = await newSpecPage({
      components: [GcdsSelect],
      html: `<gcds-select label="select" select-id="select" name="select-name"></gcds-select>`,
    });
    expect(page.root).toEqualHtml(`
      <gcds-select select-id="select" label="select" name="select-name">
        <mock:shadow-root>
          <div class="gcds-select-wrapper">
            <gcds-label label="select" label-for="select" lang="en"></gcds-label>
            <select id="select" name="select-name" part="select" aria-invalid="false">
            </select>
          </div>
        </mock:shadow-root>
      </gcds-select>
    `);
  });

  /**
   * Select required test
   */
  it('renders required', async () => {
    const page = await newSpecPage({
      components: [GcdsSelect],
      html: `<gcds-select label="select" select-id="select" name="select-name" required></gcds-select>`,
    });
    expect(page.root).toEqualHtml(`
      <gcds-select select-id="select" label="select" name="select-name" required>
        <mock:shadow-root>
          <div class="gcds-select-wrapper">
            <gcds-label label="select" label-for="select" lang="en" required=""></gcds-label>
            <select id="select" name="select-name" part="select" aria-invalid="false" required="">
            </select>
          </div>
        </mock:shadow-root>
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
        <gcds-select label="select" select-id="select" name="select-name">
          <option value="1">This is option 1</option>
          <option value="2">This is option 2</option>
          <option value="3">This is option 3</option>
        </gcds-select>
      `,
    });
    expect(page.root).toEqualHtml(`
      <gcds-select select-id="select" label="select" name="select-name">
        <mock:shadow-root>
          <div class="gcds-select-wrapper">
            <gcds-label label="select" label-for="select" lang="en"></gcds-label>
            <select id="select" name="select-name" part="select" aria-invalid="false">
              <option value="1">This is option 1</option>
              <option value="2">This is option 2</option>
              <option value="3">This is option 3</option>
            </select>
          </div>
        </mock:shadow-root>
        <option value="1">This is option 1</option>
        <option value="2">This is option 2</option>
        <option value="3">This is option 3</option>
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
        <gcds-select label="select" select-id="select" name="select" default-value="Please select one">
        <option value="1">This is option 1</option>
        <option value="2">This is option 2</option>
        <option value="3">This is option 3</option>
        </gcds-select>
      `,
    });
    expect(page.root).toEqualHtml(`
      <gcds-select select-id="select" name="select" label="select" default-value="Please select one">
        <mock:shadow-root>
          <div class="gcds-select-wrapper">
            <gcds-label label="select" label-for="select" lang="en"></gcds-label>
            <select id="select" name="select" part="select" aria-invalid="false">
              <option value="" selected disabled="">Please select one</option>
              <option value="1">This is option 1</option>
              <option value="2">This is option 2</option>
              <option value="3">This is option 3</option>
            </select>
          </div>
        </mock:shadow-root>
        <option value="1">This is option 1</option>
        <option value="2">This is option 2</option>
        <option value="3">This is option 3</option>
      </gcds-select>
    `);
  });
});
