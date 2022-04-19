# GCDS Components

## Installation

### Install from npm

``` js
npm install @cdssnc/gcds-components
```

### Supported frameworks

The gcds-component library works in multiple frameworks.

#### Javascript

Place the following code in the `<head>` element of your site.

``` html
<script type="module">
    import { defineCustomElements } from '/node_modules/gcds-components/loader/index.es2017.mjs';
    defineCustomElements();
</script>
<link rel="stylesheet" href="/node_modules/gcds-components/dist/gcds/gcds.css">
```

All gcds-components should now be ready to use in your site.

#### React

Place the following code in the `index.js` file of your app.

``` jsx
import { applyPolyfills, defineCustomElements } from 'gcds-components/loader';
import 'gcds-components/dist/gcds/gcds.css';

ReactDOM.render(...);

applyPolyfills().then(() => {
  defineCustomElements(window);
});

```

All gcds-components should now be ready to use in your React app.

#### Vue

Place the following code in the `main.js` file of your app.

``` js
import { applyPolyfills, defineCustomElements } from 'gcds-components/loader';
import 'gcds-components/dist/gcds/gcds.css';

applyPolyfills().then(() => {
  defineCustomElements();
});
```

All gcds-components should now be ready to use in your Vue app.