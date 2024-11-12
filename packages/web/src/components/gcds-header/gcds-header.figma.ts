import figma, { html } from '@figma/code-connect/html';

figma.connect(
  'https://www.figma.com/design/wz5N1rEYUBO6Gvk25oXmpB/Code-connect-Trial?node-id=15-5526&m=dev',
  {
    example: () => html`
      <!-- Web component code (HTML, Angular, Vue) -->
      <gcds-header></gcds-header>

      <!-- React code -->
      <GcdsHeader></GcdsHeader>
    `,
  },
);
