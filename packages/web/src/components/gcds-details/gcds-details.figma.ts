import figma, { html } from '@figma/code-connect/html';

figma.connect(
  'https://www.figma.com/design/wz5N1rEYUBO6Gvk25oXmpB/Code-connect-Trial?node-id=24-1803&m=dev',
  {
    props: {
      detailsContent: figma.string('Details Content'),
      summaryContent: figma.string('Summary Content'),
      open: figma.boolean('Open?'),
    },
    example: props => html`
      <!-- Web component code (HTML, Angular, Vue) -->
      <gcds-details
        details-title=${props.detailsContent}
        open=${props.open}
      >
        TEST: ${props.summaryContent}
      </gcds-details>

      <!-- React code -->
      <GcdsDetails
        detailsTitle=${props.detailsContent}
        open=${props.open}
      >
        TEST: ${props.summaryContent}
      </GcdsDetails>
    `,
  },
);
