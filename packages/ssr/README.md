[La version française suit.](#composants-de-système-de-design-gc--react)

# GC Design System Components – SSR

GC Design System Components – SSR provides the [GC Design System Components](https://github.com/cds-snc/gcds-components/tree/main/packages/web) within a React wrapper to ease integration of the components into React apps that that take advantage of server side rendering.

## Documentation

You can find the full documentation for GC Design System Components on [https://design-system.alpha.canada.ca/](https://design-system.alpha.canada.ca/).

## Installation

### Install from npm

Navigate to the root folder of your project and run:

``` js
npm install @cdssnc/gcds-components-ssr
```

Place the following code in the `index.js` file of your app.

``` jsx
import '@cdssnc/gcds-components-ssr/gcds.css'
```

### Next.js

Import into root layout

``` jsx
await import('@cdssnc/gcds-components-ssr/server');
```

### Remix?

## How to contribute

If you are interested in contributing to GC Design System Components, please read our [contributing guidelines](https://github.com/cds-snc/gcds-components/blob/main/CONTRIBUTING.md).

## License

Code released under the [MIT License](https://github.com/cds-snc/gcds-components/blob/main/LICENSE).

--------

