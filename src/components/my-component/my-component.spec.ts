import { newSpecPage } from '@stencil/core/testing';
import { MyComponent } from './my-component';

describe('my-component', () => {
  it('renders', async () => {
    const { root } = await newSpecPage({
      components: [MyComponent],
      html: '<my-component></my-component>',
    });
    expect(root).toEqualHtml(`
      <my-component>
        <mock:shadow-root>
          buttonLabel
        </mock:shadow-root>
      </my-component>
    `);
  });

  it('renders with values', async () => {
    const { root } = await newSpecPage({
      components: [MyComponent],
      html: `<my-component buttonLabel="Example Button"></my-component>`,
    });
    expect(root).toEqualHtml(`
      <my-component buttonLabel="Example Button">
        <mock:shadow-root>
          Example Button
        </mock:shadow-root>
      </my-component>
    `);
  });
});
