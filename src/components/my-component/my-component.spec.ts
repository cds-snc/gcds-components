import { newSpecPage } from '@stencil/core/testing';
import { MyComponent } from './my-component';

describe('gc-ds-button', () => {
  it('renders', async () => {
    const { root } = await newSpecPage({
      components: [MyComponent],
      html: '<gc-ds-button></gc-ds-button>',
    });
    expect(root).toEqualHtml(`
      <gc-ds-button>
        <mock:shadow-root>
          <button>
            Fallback Button Label
          </button>
        </mock:shadow-root>
      </mgc-ds-button>
    `);
  });

  it('renders with values', async () => {
    const { root } = await newSpecPage({
      components: [MyComponent],
      html: `<gc-ds-button label="Example Button"></gc-ds-button>`,
    });
    expect(root).toEqualHtml(`
      <gc-ds-button label="Example Button">
        <mock:shadow-root>
          <button>
            Example Button
          </button>
        </mock:shadow-root>
      </gc-ds-button>
    `);
  });
});
