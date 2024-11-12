import figma, { html } from '@figma/code-connect/html';

figma.connect(
  'https://www.figma.com/design/wz5N1rEYUBO6Gvk25oXmpB/Code-connect-Trial?node-id=25-1294&m=dev',
  {
    props: {
      date: figma.string('Date'),
    },
    example: (props) => html`
      <!-- Web component code (HTML, Angular, Vue) -->
      <gcds-date-modified>
        ${props.date}
      </gcds-date-modified>

      <!-- React code -->
      <GcdsDateModified>
        ${props.date}
      </GcdsDateModified>
    `,
  },
);
