[La version française suit.](#composants-de-système-de-design-gc--react)

# GC Design System Components – SSR

GC Design System Components – SSR provides the [GC Design System Components](https://github.com/cds-snc/gcds-components/tree/main/packages/web) within a React wrapper to ease integration of the components into React apps that take advantage of server side rendering using declarative shadow-dom.

## Documentation

You can find the full documentation for GC Design System Components on [https://design-system.alpha.canada.ca/](https://design-system.alpha.canada.ca/).

## Installation

### Install from npm

From the root folder of your project and run:

``` js
npm install @cdssnc/gcds-components-ssr
```

### Using the GC Design System components in your app

To achieve server side rendering, import the following into the root of your project.

``` jsx
await import('@cdssnc/gcds-components-ssr/server');
```

To load the CSS required for the GC Design System, import the following CSS file from the `@cdssnc/gcds-components-ssr` package.

``` jsx
import '@cdssnc/gcds-components-ssr/gcds.css'
```

#### Components

The React components from the `@cdssnc/gcds-components-ssr` package need to be used within React client components to allow the declarative shadow-dom to function.

##### Example of using `<gcds-input>`

``` jsx
'use client';

import { GcdsInput } from '@cdssnc/gcds-components-ssr'
import { FC } from 'react';

export const Input: FC = () => (
    <GcdsInput
      inputId="gcds-input"
      label="GC Design System input"
      name="gcds-input"
    ></GcdsInput>
);
```

## Polyfills

As Declarative shadow-dom is fairly new and is now supported by all major browsers, older versions may not support DSD. We recommend also including a polyfill for DSD in your app such as `@webcomponents/template-shadowroot"`.

## How to contribute

If you are interested in contributing to GC Design System Components, please read our [contributing guidelines](https://github.com/cds-snc/gcds-components/blob/main/CONTRIBUTING.md).

## License

Code released under the [MIT License](https://github.com/cds-snc/gcds-components/blob/main/LICENSE).

--------

