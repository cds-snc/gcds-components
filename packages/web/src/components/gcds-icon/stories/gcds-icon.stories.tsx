export default {
  title: 'Components/Icon',

  argTypes: {
    // Props
    iconStyle: {
      name: 'icon-style',
      control: { type: 'select' },
      options: ['regular', 'solid'],
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'solid' },
      },
    },
    label: {
      control: 'text',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '-' },
      },
    },
    marginLeft: {
      name: 'margin-left',
      control: { type: 'select' },
      options: [
        '0',
        '25',
        '50',
        '75',
        '100',
        '125',
        '150',
        '175',
        '200',
        '225',
        '250',
        '300',
        '350',
        '400',
        '450',
        '500',
        '550',
        '600',
        '650',
        '700',
        '750',
        '800',
        '850',
        '900',
        '950',
        '1000',
        '1050',
        '1100',
        '1150',
        '1200',
        '1250',
      ],
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '-' },
      },
    },
    marginRight: {
      name: 'margin-right',
      control: { type: 'select' },
      options: [
        '0',
        '25',
        '50',
        '75',
        '100',
        '125',
        '150',
        '175',
        '200',
        '225',
        '250',
        '300',
        '350',
        '400',
        '450',
        '500',
        '550',
        '600',
        '650',
        '700',
        '750',
        '800',
        '850',
        '900',
        '950',
        '1000',
        '1050',
        '1100',
        '1150',
        '1200',
        '1250',
      ],
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '-' },
      },
    },
    name: {
      control: 'text',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '-' },
      },
      type: {
        required: true,
      },
    },
    fixedWidth: {
      name: 'fixed-width',
      control: { type: 'select' },
      options: [false, true],
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: false },
      },
    },
    size: {
      control: { type: 'select' },
      options: [
        'inherit',
        'text-small',
        'text',
        'h6',
        'h5',
        'h4',
        'h3',
        'h2',
        'h1',
      ],
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'text' },
      },
    },
  },
};

const Template = args =>
  `
<!-- Web component code (HTML, Angular, Vue) -->
<gcds-icon ${args.label ? `label="${args.label}"` : null} name="${args.name}" ${
    args.iconStyle != 'solid' ? `icon-style="${args.iconStyle}"` : null
  } ${args.marginLeft ? `margin-left="${args.marginLeft}"` : null} ${
    args.marginRight ? `margin-right="${args.marginRight}"` : null
  } ${args.size != 'text' ? `size="${args.size}"` : null} ${
    args.fixedWidth ? `fixed-width="${args.fixedWidth}"` : null
  }>
</gcds-icon>

<!-- React code -->
<GcdsIcon ${args.label ? `label="${args.label}"` : null} name="${args.name}" ${
    args.iconStyle != 'solid' ? `iconStyle="${args.iconStyle}"` : null
  } ${args.marginLeft ? `marginLeft="${args.marginLeft}"` : null} ${
    args.marginRight ? `marginRight="${args.marginRight}"` : null
  } ${args.size != 'text' ? `size="${args.size}"` : null} ${
    args.fixedWidth ? `fixedWidth="${args.fixedWidth}"` : null
  }>
</GcdsIcon>
`.replace(/ null/g, '');

const TemplateMargin = args =>
  `
<!-- Web component code (Angular, Vue) -->
<gcds-icon name="${args.name}" ${
    args.marginLeft0 ? `margin-left="${args.marginLeft0}"` : null
  } ${
    args.marginRight0 ? `margin-right="${args.marginRight0}"` : null
  }></gcds-icon>
<gcds-icon name="${args.name}" ${
    args.marginLeft25 ? `margin-left="${args.marginLeft25}"` : null
  } ${
    args.marginRight25 ? `margin-right="${args.marginRight25}"` : null
  }></gcds-icon>
<gcds-icon name="${args.name}" ${
    args.marginLeft50 ? `margin-left="${args.marginLeft50}"` : null
  } ${
    args.marginRight50 ? `margin-right="${args.marginRight50}"` : null
  }></gcds-icon>
<gcds-icon name="${args.name}" ${
    args.marginLeft75 ? `margin-left="${args.marginLeft75}"` : null
  } ${
    args.marginRight75 ? `margin-right="${args.marginRight75}"` : null
  }></gcds-icon>
<gcds-icon name="${args.name}" ${
    args.marginLeft100 ? `margin-left="${args.marginLeft100}"` : null
  } ${
    args.marginRight100 ? `margin-right="${args.marginRight100}"` : null
  }></gcds-icon>
<gcds-icon name="${args.name}" ${
    args.marginLeft125 ? `margin-left="${args.marginLeft125}"` : null
  } ${
    args.marginRight125 ? `margin-right="${args.marginRight125}"` : null
  }></gcds-icon>
<gcds-icon name="${args.name}" ${
    args.marginLeft150 ? `margin-left="${args.marginLeft150}"` : null
  } ${
    args.marginRight150 ? `margin-right="${args.marginRight150}"` : null
  }></gcds-icon>
<gcds-icon name="${args.name}" ${
    args.marginLeft175 ? `margin-left="${args.marginLeft175}"` : null
  } ${
    args.marginRight175 ? `margin-right="${args.marginRight175}"` : null
  }></gcds-icon>
<gcds-icon name="${args.name}" ${
    args.marginLeft200 ? `margin-left="${args.marginLeft200}"` : null
  } ${
    args.marginRight200 ? `margin-right="${args.marginRight200}"` : null
  }></gcds-icon>
<gcds-icon name="${args.name}" ${
    args.marginLeft225 ? `margin-left="${args.marginLeft225}"` : null
  } ${
    args.marginRight225 ? `margin-right="${args.marginRight225}"` : null
  }></gcds-icon>
<gcds-icon name="${args.name}" ${
    args.marginLeft250 ? `margin-left="${args.marginLeft250}"` : null
  } ${
    args.marginRight250 ? `margin-right="${args.marginRight250}"` : null
  }></gcds-icon>
<gcds-icon name="${args.name}" ${
    args.marginLeft300 ? `margin-left="${args.marginLeft300}"` : null
  } ${
    args.marginRight300 ? `margin-right="${args.marginRight300}"` : null
  }></gcds-icon>
<gcds-icon name="${args.name}" ${
    args.marginLeft350 ? `margin-left="${args.marginLeft350}"` : null
  } ${
    args.marginRight350 ? `margin-right="${args.marginRight350}"` : null
  }></gcds-icon>
<gcds-icon name="${args.name}" ${
    args.marginLeft400 ? `margin-left="${args.marginLeft400}"` : null
  } ${
    args.marginRight400 ? `margin-right="${args.marginRight400}"` : null
  }></gcds-icon>
<gcds-icon name="${args.name}" ${
    args.marginLeft450 ? `margin-left="${args.marginLeft450}"` : null
  } ${
    args.marginRight450 ? `margin-right="${args.marginRight450}"` : null
  }></gcds-icon>
<gcds-icon name="${args.name}" ${
    args.marginLeft500 ? `margin-left="${args.marginLeft500}"` : null
  } ${
    args.marginRight500 ? `margin-right="${args.marginRight500}"` : null
  }></gcds-icon>
<gcds-icon name="${args.name}" ${
    args.marginLeft550 ? `margin-left="${args.marginLeft550}"` : null
  } ${
    args.marginRight550 ? `margin-right="${args.marginRight550}"` : null
  }></gcds-icon>
<gcds-icon name="${args.name}" ${
    args.marginLeft600 ? `margin-left="${args.marginLeft600}"` : null
  } ${
    args.marginRight600 ? `margin-right="${args.marginRight600}"` : null
  }></gcds-icon>
<gcds-icon name="${args.name}" ${
    args.marginLeft650 ? `margin-left="${args.marginLeft650}"` : null
  } ${
    args.marginRight650 ? `margin-right="${args.marginRight650}"` : null
  }></gcds-icon>
<gcds-icon name="${args.name}" ${
    args.marginLeft700 ? `margin-left="${args.marginLeft700}"` : null
  } ${
    args.marginRight700 ? `margin-right="${args.marginRight700}"` : null
  }></gcds-icon>
<gcds-icon name="${args.name}" ${
    args.marginLeft750 ? `margin-left="${args.marginLeft750}"` : null
  } ${
    args.marginRight750 ? `margin-right="${args.marginRight750}"` : null
  }></gcds-icon>
<gcds-icon name="${args.name}" ${
    args.marginLeft800 ? `margin-left="${args.marginLeft800}"` : null
  } ${
    args.marginRight800 ? `margin-right="${args.marginRight800}"` : null
  }></gcds-icon>
<gcds-icon name="${args.name}" ${
    args.marginLeft850 ? `margin-left="${args.marginLeft850}"` : null
  } ${
    args.marginRight850 ? `margin-right="${args.marginRight850}"` : null
  }></gcds-icon>
<gcds-icon name="${args.name}" ${
    args.marginLeft900 ? `margin-left="${args.marginLeft900}"` : null
  } ${
    args.marginRight900 ? `margin-right="${args.marginRight900}"` : null
  }></gcds-icon>
<gcds-icon name="${args.name}" ${
    args.marginLeft950 ? `margin-left="${args.marginLeft950}"` : null
  } ${
    args.marginRight950 ? `margin-right="${args.marginRight950}"` : null
  }></gcds-icon>
<gcds-icon name="${args.name}" ${
    args.marginLeft1000 ? `margin-left="${args.marginLeft1000}"` : null
  } ${
    args.marginRight1000 ? `margin-right="${args.marginRight1000}"` : null
  }></gcds-icon>
<gcds-icon name="${args.name}" ${
    args.marginLeft1050 ? `margin-left="${args.marginLeft1050}"` : null
  } ${
    args.marginRight1050 ? `margin-right="${args.marginRight1050}"` : null
  }></gcds-icon>
<gcds-icon name="${args.name}" ${
    args.marginLeft1100 ? `margin-left="${args.marginLeft1100}"` : null
  } ${
    args.marginRight1100 ? `margin-right="${args.marginRight1100}"` : null
  }></gcds-icon>
<gcds-icon name="${args.name}" ${
    args.marginLeft1150 ? `margin-left="${args.marginLeft1150}"` : null
  } ${
    args.marginRight1150 ? `margin-right="${args.marginRight1150}"` : null
  }></gcds-icon>
<gcds-icon name="${args.name}" ${
    args.marginLeft1200 ? `margin-left="${args.marginLeft1200}"` : null
  } ${
    args.marginRight1200 ? `margin-right="${args.marginRight1200}"` : null
  }></gcds-icon>
<gcds-icon name="${args.name}" ${
    args.marginLeft1250 ? `margin-left="${args.marginLeft1250}"` : null
  } ${
    args.marginRight1250 ? `margin-right="${args.marginRight1250}"` : null
  }></gcds-icon>

<!-- React code -->
<GcdsIcon name="${args.name}" ${
    args.marginLeft0 ? `marginLeft="${args.marginLeft0}"` : null
  } ${
    args.marginRight0 ? `marginRight="${args.marginRight0}"` : null
  }></GcdsIcon>
<GcdsIcon name="${args.name}" ${
    args.marginLeft25 ? `marginLeft="${args.marginLeft25}"` : null
  } ${
    args.marginRight25 ? `marginRight="${args.marginRight25}"` : null
  }></GcdsIcon>
<GcdsIcon name="${args.name}" ${
    args.marginLeft50 ? `marginLeft="${args.marginLeft50}"` : null
  } ${
    args.marginRight50 ? `marginRight="${args.marginRight50}"` : null
  }></GcdsIcon>
<GcdsIcon name="${args.name}" ${
    args.marginLeft75 ? `marginLeft="${args.marginLeft75}"` : null
  } ${
    args.marginRight75 ? `marginRight="${args.marginRight75}"` : null
  }></GcdsIcon>
<GcdsIcon name="${args.name}" ${
    args.marginLeft100 ? `marginLeft="${args.marginLeft100}"` : null
  } ${
    args.marginRight100 ? `marginRight="${args.marginRight100}"` : null
  }></GcdsIcon>
<GcdsIcon name="${args.name}" ${
    args.marginLeft125 ? `marginLeft="${args.marginLeft125}"` : null
  } ${
    args.marginRight125 ? `marginRight="${args.marginRight125}"` : null
  }></GcdsIcon>
<GcdsIcon name="${args.name}" ${
    args.marginLeft150 ? `marginLeft="${args.marginLeft150}"` : null
  } ${
    args.marginRight150 ? `marginRight="${args.marginRight150}"` : null
  }></GcdsIcon>
<GcdsIcon name="${args.name}" ${
    args.marginLeft175 ? `marginLeft="${args.marginLeft175}"` : null
  } ${
    args.marginRight175 ? `marginRight="${args.marginRight175}"` : null
  }></GcdsIcon>
<GcdsIcon name="${args.name}" ${
    args.marginLeft200 ? `marginLeft="${args.marginLeft200}"` : null
  } ${
    args.marginRight200 ? `marginRight="${args.marginRight200}"` : null
  }></GcdsIcon>
<GcdsIcon name="${args.name}" ${
    args.marginLeft225 ? `marginLeft="${args.marginLeft225}"` : null
  } ${
    args.marginRight225 ? `marginRight="${args.marginRight225}"` : null
  }></GcdsIcon>
<GcdsIcon name="${args.name}" ${
    args.marginLeft250 ? `marginLeft="${args.marginLeft250}"` : null
  } ${
    args.marginRight250 ? `marginRight="${args.marginRight250}"` : null
  }></GcdsIcon>
<GcdsIcon name="${args.name}" ${
    args.marginLeft300 ? `marginLeft="${args.marginLeft300}"` : null
  } ${
    args.marginRight300 ? `marginRight="${args.marginRight300}"` : null
  }></GcdsIcon>
<GcdsIcon name="${args.name}" ${
    args.marginLeft350 ? `marginLeft="${args.marginLeft350}"` : null
  } ${
    args.marginRight350 ? `marginRight="${args.marginRight350}"` : null
  }></GcdsIcon>
<GcdsIcon name="${args.name}" ${
    args.marginLeft400 ? `marginLeft="${args.marginLeft400}"` : null
  } ${
    args.marginRight400 ? `marginRight="${args.marginRight400}"` : null
  }></GcdsIcon>
<GcdsIcon name="${args.name}" ${
    args.marginLeft450 ? `marginLeft="${args.marginLeft450}"` : null
  } ${
    args.marginRight450 ? `marginRight="${args.marginRight450}"` : null
  }></GcdsIcon>
<GcdsIcon name="${args.name}" ${
    args.marginLeft500 ? `marginLeft="${args.marginLeft500}"` : null
  } ${
    args.marginRight500 ? `marginRight="${args.marginRight500}"` : null
  }></GcdsIcon>
<GcdsIcon name="${args.name}" ${
    args.marginLeft550 ? `marginLeft="${args.marginLeft550}"` : null
  } ${
    args.marginRight550 ? `marginRight="${args.marginRight550}"` : null
  }></GcdsIcon>
<GcdsIcon name="${args.name}" ${
    args.marginLeft600 ? `marginLeft="${args.marginLeft600}"` : null
  } ${
    args.marginRight600 ? `marginRight="${args.marginRight600}"` : null
  }></GcdsIcon>
<GcdsIcon name="${args.name}" ${
    args.marginLeft650 ? `marginLeft="${args.marginLeft650}"` : null
  } ${
    args.marginRight650 ? `marginRight="${args.marginRight650}"` : null
  }></GcdsIcon>
<GcdsIcon name="${args.name}" ${
    args.marginLeft700 ? `marginLeft="${args.marginLeft700}"` : null
  } ${
    args.marginRight700 ? `marginRight="${args.marginRight700}"` : null
  }></GcdsIcon>
<GcdsIcon name="${args.name}" ${
    args.marginLeft750 ? `marginLeft="${args.marginLeft750}"` : null
  } ${
    args.marginRight750 ? `marginRight="${args.marginRight750}"` : null
  }></GcdsIcon>
<GcdsIcon name="${args.name}" ${
    args.marginLeft800 ? `marginLeft="${args.marginLeft800}"` : null
  } ${
    args.marginRight800 ? `marginRight="${args.marginRight800}"` : null
  }></GcdsIcon>
<GcdsIcon name="${args.name}" ${
    args.marginLeft850 ? `marginLeft="${args.marginLeft850}"` : null
  } ${
    args.marginRight850 ? `marginRight="${args.marginRight850}"` : null
  }></GcdsIcon>
<GcdsIcon name="${args.name}" ${
    args.marginLeft900 ? `marginLeft="${args.marginLeft900}"` : null
  } ${
    args.marginRight900 ? `marginRight="${args.marginRight900}"` : null
  }></GcdsIcon>
<GcdsIcon name="${args.name}" ${
    args.marginLeft950 ? `marginLeft="${args.marginLeft950}"` : null
  } ${
    args.marginRight950 ? `marginRight="${args.marginRight950}"` : null
  }></GcdsIcon>
<GcdsIcon name="${args.name}" ${
    args.marginLeft1000 ? `marginLeft="${args.marginLeft1000}"` : null
  } ${
    args.marginRight1000 ? `marginRight="${args.marginRight1000}"` : null
  }></GcdsIcon>
<GcdsIcon name="${args.name}" ${
    args.marginLeft1050 ? `marginLeft="${args.marginLeft1050}"` : null
  } ${
    args.marginRight1050 ? `marginRight="${args.marginRight1050}"` : null
  }></GcdsIcon>
<GcdsIcon name="${args.name}" ${
    args.marginLeft1100 ? `marginLeft="${args.marginLeft1100}"` : null
  } ${
    args.marginRight1100 ? `marginRight="${args.marginRight1100}"` : null
  }></GcdsIcon>
<GcdsIcon name="${args.name}" ${
    args.marginLeft1150 ? `marginLeft="${args.marginLeft1150}"` : null
  } ${
    args.marginRight1150 ? `marginRight="${args.marginRight1150}"` : null
  }></GcdsIcon>
<GcdsIcon name="${args.name}" ${
    args.marginLeft1200 ? `marginLeft="${args.marginLeft1200}"` : null
  } ${
    args.marginRight1200 ? `marginRight="${args.marginRight1200}"` : null
  }></GcdsIcon>
<GcdsIcon name="${args.name}" ${
    args.marginLeft1250 ? `marginLeft="${args.marginLeft1250}"` : null
  } ${
    args.marginRight1250 ? `marginRight="${args.marginRight1250}"` : null
  }></GcdsIcon>
`.replace(/ null/g, '');

const TemplateMultiple = args =>
  `
<!-- Web component code (Angular, Vue) -->
<gcds-icon name="${args.name1}" ${
    args.size1 != 'text' ? `size="${args.size1}"` : null
  }></gcds-icon>
<gcds-icon name="${args.name2}" ${
    args.size2 != 'text' ? `size="${args.size2}"` : null
  }></gcds-icon>
<gcds-icon name="${args.name3}" ${
    args.size3 != 'text' ? `size="${args.size3}"` : null
  }></gcds-icon>
<gcds-icon name="${args.name4}" ${
    args.size4 != 'text' ? `size="${args.size4}"` : null
  }></gcds-icon>
<gcds-icon name="${args.name5}" ${
    args.size5 != 'text' ? `size="${args.size5}"` : null
  }></gcds-icon>
<gcds-icon name="${args.name6}" ${
    args.size6 != 'text' ? `size="${args.size6}"` : null
  }></gcds-icon>
<gcds-icon name="${args.name7}" ${
    args.size7 != 'text' ? `size="${args.size7}"` : null
  }></gcds-icon>
<gcds-icon name="${args.name8}" ${
    args.size8 != 'text' ? `size="${args.size8}"` : null
  }></gcds-icon>
<gcds-icon name="${args.name9}" ${
    args.size9 != 'text' ? `size="${args.size9}"` : null
  }></gcds-icon>

<!-- React code -->
<GcdsIcon name="${args.name1}" ${
    args.size1 != 'text' ? `size="${args.size1}"` : null
  }></GcdsIcon>
<GcdsIcon name="${args.name2}" ${
    args.size2 != 'text' ? `size="${args.size2}"` : null
  }></GcdsIcon>
<GcdsIcon name="${args.name3}" ${
    args.size3 != 'text' ? `size="${args.size3}"` : null
  }></GcdsIcon>
<GcdsIcon name="${args.name4}" ${
    args.size4 != 'text' ? `size="${args.size4}"` : null
  }></GcdsIcon>
<GcdsIcon name="${args.name5}" ${
    args.size5 != 'text' ? `size="${args.size5}"` : null
  }></GcdsIcon>
<GcdsIcon name="${args.name6}" ${
    args.size6 != 'text' ? `size="${args.size6}"` : null
  }></GcdsIcon>
<GcdsIcon name="${args.name7}" ${
    args.size7 != 'text' ? `size="${args.size7}"` : null
  }></GcdsIcon>
<GcdsIcon name="${args.name8}" ${
    args.size8 != 'text' ? `size="${args.size8}"` : null
  }></GcdsIcon>
<GcdsIcon name="${args.name9}" ${
    args.size9 != 'text' ? `size="${args.size9}"` : null
  }></GcdsIcon>
`.replace(/ null/g, '');

const TemplateTwo = args =>
  `
<!-- Web component code (Angular, Vue) -->
<gcds-icon name="${args.name}" ${
    args.size != 'text' ? `size="${args.size}"` : null
  } ${
    args.fixedWidth1 ? `fixed-width="${args.fixedWidth1}"` : null
  }></gcds-icon>
<gcds-icon name="${args.name}" ${
    args.size != 'text' ? `size="${args.size}"` : null
  } ${
    args.fixedWidth2 ? `fixed-width="${args.fixedWidth2}"` : null
  }></gcds-icon>

<!-- React code -->
<GcdsIcon name="${args.name}" ${
    args.size != 'text' ? `size="${args.size}"` : null
  } ${args.fixedWidth1 ? `fixedWidth="${args.fixedWidth1}"` : null}></GcdsIcon>
<GcdsIcon name="${args.name}" ${
    args.size != 'text' ? `size="${args.size}"` : null
  } ${args.fixedWidth2 ? `fixedWidth="${args.fixedWidth2}"` : null}></GcdsIcon>
`.replace(/ null/g, '');

const TemplatePlayground = args => `
<gcds-icon
  ${args.label ? `label="${args.label}"` : null}
  name="${args.name}"
  ${args.marginLeft ? `margin-left="${args.marginLeft}"` : null}
  ${args.marginRight ? `margin-right="${args.marginRight}"` : null}
  ${args.size != 'text' ? `size="${args.size}"` : null}
  ${args.fixedWidth ? `fixed-width="${args.fixedWidth}"` : null}
  ${args.iconStyle != 'solid' ? `iconStyle="${args.iconStyle}"` : null}
>
</gcds-icon>
`;

// ------ Icon default ------

export const Default = Template.bind({});
Default.args = {
  name: 'close',
  size: 'text',
  iconStyle: 'solid',
};

// ------ Icon name ------

export const Name = TemplateMultiple.bind({});
Name.args = {
  name1: 'close',
  name2: 'external-link',
  name3: 'caret-up',
  name4: 'caret-down',
  name5: 'exclamation-circle',
  name6: 'sync',
  name7: 'download',
  name8: 'check',
  name9: 'paperclip',
  size1: 'text',
  size2: 'text',
  size3: 'text',
  size4: 'text',
  size5: 'text',
  size6: 'text',
  size7: 'text',
  size8: 'text',
  size9: 'text',
};

// ------ Icon sizes ------

export const Sizes = TemplateMultiple.bind({});
Sizes.args = {
  name1: 'close',
  name2: 'close',
  name3: 'close',
  name4: 'close',
  name5: 'close',
  name6: 'close',
  name7: 'close',
  name8: 'close',
  name9: 'close',
  size1: 'inherit',
  size2: 'text-small',
  size3: 'text',
  size4: 'h6',
  size5: 'h5',
  size6: 'h4',
  size7: 'h3',
  size8: 'h2',
  size9: 'h1',
};

// ------ Icon margin ------

export const MarginLeft = TemplateMargin.bind({});
MarginLeft.args = {
  name: 'close',
  marginLeft0: '0',
  marginLeft25: '25',
  marginLeft50: '50',
  marginLeft75: '75',
  marginLeft100: '100',
  marginLeft125: '125',
  marginLeft150: '150',
  marginLeft175: '175',
  marginLeft200: '200',
  marginLeft225: '225',
  marginLeft250: '250',
  marginLeft300: '300',
  marginLeft350: '350',
  marginLeft400: '400',
  marginLeft450: '450',
  marginLeft500: '500',
  marginLeft550: '550',
  marginLeft600: '600',
  marginLeft650: '650',
  marginLeft700: '700',
  marginLeft750: '750',
  marginLeft800: '800',
  marginLeft850: '850',
  marginLeft900: '900',
  marginLeft950: '950',
  marginLeft1000: '1000',
  marginLeft1050: '1050',
  marginLeft1100: '1100',
  marginLeft1150: '1150',
  marginLeft1200: '1200',
  marginLeft1250: '1250',
  size: 'text-small',
};

export const MarginRight = TemplateMargin.bind({});
MarginRight.args = {
  name: 'close',
  marginRight0: '0',
  marginRight25: '25',
  marginRight50: '50',
  marginRight75: '75',
  marginRight100: '100',
  marginRight125: '125',
  marginRight150: '150',
  marginRight175: '175',
  marginRight200: '200',
  marginRight225: '225',
  marginRight250: '250',
  marginRight300: '300',
  marginRight350: '350',
  marginRight400: '400',
  marginRight450: '450',
  marginRight500: '500',
  marginRight550: '550',
  marginRight600: '600',
  marginRight650: '650',
  marginRight700: '700',
  marginRight750: '750',
  marginRight800: '800',
  marginRight850: '850',
  marginRight900: '900',
  marginRight950: '950',
  marginRight1000: '1000',
  marginRight1050: '1050',
  marginRight1100: '1100',
  marginRight1150: '1150',
  marginRight1200: '1200',
  marginRight1250: '1250',
  size: 'text-small',
};

// ------ Icon width ------

export const Width = TemplateTwo.bind({});
Width.args = {
  name: 'close',
  size: 'text',
  fixedWidth1: true,
  fixedWidth2: false,
};

// ------ Icon label ------

export const Label = Template.bind({});
Label.args = {
  name: 'close',
  size: 'text',
  iconStyle: 'solid',
  label: 'Clicking this icon will close the element.',
};

// ------ Icon events & props ------

export const Props = Template.bind({});
Props.args = {
  fixedWidth: false,
  iconStyle: 'solid',
  label: '',
  name: 'close',
  size: 'text',
};

// ------ Icon playground ------

export const Playground = TemplatePlayground.bind({});
Playground.args = {
  fixedWidth: false,
  iconStyle: 'solid',
  label: '',
  marginLeft: '0',
  marginRight: '0',
  name: 'close',
  size: 'text',
};
