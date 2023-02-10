[La version française suit.](#système-de-design---composants-gc)

# GC Design System Components – Web

GC Design System Web Components are encapsulated reusable custom elements to use within your web sites/apps built using the [GC Design System Tokens](https://github.com/cds-snc/gcds-tokens).

## Documentation

You can find the full documentation for GC Design System Components on [https://cds-design-snc.netlify.app/]().

## Installation

### Install from npm

``` js
npm install @cdssnc/gcds-components
```

### Install with CDN

Place the following code in the `<head>` element of your site.
All gcds-components should now be ready to use in your site.

``` html
<!-- GC Design System -->
<link rel="stylesheet" href="https://unpkg.com/@cdssnc/gcds-components/dist/gcds/gcds.css">
<script type="module" src="https://unpkg.com/@cdssnc/gcds-components/dist/gcds/gcds.esm.js"></script>
<script nomodule src="https://unpkg.com/@cdssnc/gcds-components/dist/gcds/gcds.js"></script>
```

Note: <script type="module"> requires a server to load properly, if developing locally, please use <script nomodule>.


### Supported frameworks

The gcds-component library works in multiple frameworks.

#### Javascript

Place the following code in the `<head>` element of your site.

``` html
<!-- Font Awesome (Icons) -->
<link href="https://unpkg.com/font-awesome/css/font-awesome.min.css" rel="stylesheet">

<!-- GC Design System -->
<link rel="stylesheet" href="/node_modules/@cdssnc/gcds-components/dist/gcds/gcds.css">
<script type="module" src="/node_modules/@cdssnc/gcds-components/dist/gcds/gcds.esm.js"></script>
<script nomodule src="/node_modules/@cdssnc/gcds-components/dist/gcds/gcds.js"></script>
```

All gcds-components should now be ready to use in your site.

#### React



### Angular



#### Vue

Place the following code in the `main.js` file of your app.

``` js
import { applyPolyfills, defineCustomElements } from '@cdssnc/gcds-components/loader';
import '@cdssnc/gcds-components/dist/gcds/gcds.css';

applyPolyfills().then(() => {
  defineCustomElements();
});
```

All gcds-components should now be ready to use in your Vue app.

## How to contribute

If you are interested in contributing to GC Design System Components, please read our [contributing guidelines](https://github.com/cds-snc/gcds-components/blob/main/CONTRIBUTING.md).

## License

Code released under the [MIT License](https://github.com/cds-snc/gcds-components/blob/main/LICENSE).

--------

