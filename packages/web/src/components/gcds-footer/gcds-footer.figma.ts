import figma, { html } from '@figma/code-connect/html';

figma.connect(
  'https://www.figma.com/design/wz5N1rEYUBO6Gvk25oXmpB/Code-connect-Trial?node-id=13-9854&m=dev',
  {
    example: () => html`
      <!-- Web component code (HTML, Angular, Vue) -->
      <gcds-footer></gcds-footer>

      <!-- React code -->
      <GcdsFooter></GcdsFooter>
    `,
  },
);
