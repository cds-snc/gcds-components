import figma, { html } from '@figma/code-connect/html';

figma.connect(
  'https://www.figma.com/design/wz5N1rEYUBO6Gvk25oXmpB/Code-connect-Trial?node-id=1-2281&m=dev',
  {
    props: {
      buttonLabel: figma.string('Button Label'),
      buttonRole: figma.enum('buttonRole', {
        Secondary: 'secondary',
        Primary: 'primary',
        Danger: 'danger',
      }),
    },
    example: props => html`
      <!-- Web component code (HTML, Angular, Vue) -->
      <gcds-button button-role=${props.buttonRole}>
        ${props.buttonLabel}
      </gcds-button>

      <!-- React code -->
      <GcdsButton buttonRole=${props.buttonRole}>
        ${props.buttonLabel}
      </GcdsButton>
    `,
  },
);
