import figma, { html } from '@figma/code-connect/html';

figma.connect(
  'https://www.figma.com/design/wz5N1rEYUBO6Gvk25oXmpB/Code-connect-Trial?node-id=17-1348&m=dev',
  {
    props: {
      text: figma.string('Text'),
      size: figma.enum('Size', {
        Body: 'body',
        Caption: 'caption',
      }),
    },
    example: props => html`
      <!-- Web component code (HTML, Angular, Vue) -->
      <gcds-text size=${props.size}>
        ${props.text}
      </gcds-text>

      <!-- React code -->
      <GcdsText size=${props.size}>
        ${props.text}
      </GcdsText>
    `,
  },
);
