[La version française suit.](#composants-de-système-de-design-gc--react)

# GC Design System Components – Vue

GC Design System Components – Vue provides the [GC Design System Components](https://github.com/cds-snc/gcds-components/tree/main/packages/web) within a Vue wrapper to ease integration of the components into Vue apps.

## Documentation

You can find the full documentation for GC Design System Components on [https://design-system.alpha.canada.ca/](https://design-system.alpha.canada.ca/).

## Installation

### Install from npm

Navigate to the root folder of your project and run:

``` js
npm install @cdssnc/gcds-components-vue
```

In your `main.js` file, import the GC Design System components plugin and use it:

``` jsx
import { GcdsComponents } from '@cdssnc/gcds-components-vue';

createApp(App).use(GcdsComponents).mount('#app');
```

In your `App.vue`, place the following to load the global styles:

``` html
<style src='@cdssnc/gcds-components-vue/gcds.css'>
    /* global styles */
</style> 
```

### Using Vite

If using [Vite](https://vitejs.dev/), additional configuration will need to be added to `vite.config.ts` to prevent Vue from logging a warning about failing to resolve components (e.g. "Failed to resolve component: gcds-header").

``` js
export default defineConfig({
  plugins: [
    vue({
      template: {
        compilerOptions: {
          // treat all tags with a dash as custom elements
          isCustomElement: (tag) => tag.includes('-'),
        },
      },
    })
  ],
})
```

## How to contribute

If you are interested in contributing to GC Design System Components, please read our [contributing guidelines](https://github.com/cds-snc/gcds-components/blob/main/CONTRIBUTING.md).

## License

Code released under the [MIT License](https://github.com/cds-snc/gcds-components/blob/main/LICENSE).

--------

# Composants de Système de design GC — Vue

Composants de Système de design GC — Vue fournit des [composants de Système de design GC](../web/README.md) dans un encapsulateur Vue afin de faciliter l’intégration dans les applications Vue.

## Documentation

Toute la documentation sur les composants de Système de design GC est accessible à l’adresse [https://systeme-design.alpha.canada.ca/](https://systeme-design.alpha.canada.ca/).

## Installation

### Installer le paquet avec npm

Naviguez jusqu'au dossier racine de votre projet et exécutez :

``` js
npm install @cdssnc/gcds-components-vue
```

<!-- In your `main.js` file, import the GC Design System components plugin and use it:

``` jsx
import { GcdsComponents } from '@cdssnc/gcds-components-vue';

createApp(App).use(GcdsComponents).mount('#app');
```

In your `App.vue`, place the following to load the global styles:

``` html
<style src='@cdssnc/gcds-components-vue/gcds.css'>
    /* global styles */
</style> 
```

### Using Vite

If using [Vite](https://vitejs.dev/), additional configuration will need to be added to `vite.config.ts` to prevent Vue from logging a warning about failing to resolve components.

``` js
export default defineConfig({
  plugins: [
    vue({
      template: {
        compilerOptions: {
          // treat all tags with a dash as custom elements
          isCustomElement: (tag) => tag.includes('-'),
        },
      },
    })
  ],
})
``` -->

## Apportez votre contribution

Si vous souhaitez contribuer aux unités de style de Système de design GC, veuillez lire nos [lignes directrices sur la contribution](https://github.com/cds-snc/gcds-components/blob/main/CONTRIBUTING.md).

## Licence

Code publié en vertu de la [licence MIT](https://github.com/cds-snc/gcds-components/blob/main/LICENSE) (en anglais).