import { newSpecPage } from '@stencil/core/testing';
import { GcdsButton } from './gcds-button';

describe('gcds-button', () => {
  it('renders', async () => {
    const { root } = await newSpecPage({
      components: [GcdsButton],
      html: '<gcds-button></gcds-button>',
    });
    expect(root).toEqualHtml(`
      <gcds-button>
        <mock:shadow-root>
          <button>
            Fallback Button Label
          </button>
        </mock:shadow-root>
      </gcds-button>
    `);
  });

  it('renders with values', async () => {
    const { root } = await newSpecPage({
      components: [GcdsButton],
      html: `<gcds-button label="Example Button"></gcds-button>`,
    });
    expect(root).toEqualHtml(`
      <gcds-button label="Example Button">
        <mock:shadow-root>
          <button>
            Example Button
          </button>
        </mock:shadow-root>
      </gcds-button>
    `);
  });
});
