import figma, { html } from '@figma/code-connect/html';

figma.connect(
  'https://www.figma.com/design/wz5N1rEYUBO6Gvk25oXmpB/Code-connect-Trial?node-id=15-10928&m=dev',
  {
    props: {
      text: figma.string('Text'),
      tag: figma.enum('Tag', {
        h1: 'h1',
        h2: 'h2',
        h3: 'h3',
        h4: 'h4',
        h5: 'h5',
        h6: 'h6',
      }),
    },
    example: props => html`
      <!-- Web component code (HTML, Angular, Vue) -->
      <gcds-heading tag=${props.tag}>
        ${props.text}
      </gcds-heading>

      <!-- React code -->
      <GcdsHeading tag=${props.tag}>
        ${props.text}
      </GcdsHeading>
    `,
  },
);
