[La version française suit.](#composants-de-système-de-design-gc--vue)

# GC Design System Components – Vue

To make it easier to integrate [GC Design System web components](../web/README.md) into Vue projects, the [@gcds-core/components-vue](https://www.npmjs.com/package/@gcds-core/components-vue) package provides Vue wrappers.

These wrappers make it easier to work with web components in the Vue ecosystem by enabling type checking, integration with `Vue Router`, and support for `v-model` with form controls.

The web components inherit native properties and interoperability.

## Documentation

You can find the full documentation for GC Design System Components on [https://design-system.alpha.canada.ca/](https://design-system.alpha.canada.ca/).

## Vue installation instructions

Follow these steps to install and use GC Design System components in your Vue project.

### 1. Install the package

Navigate to your project’s root folder and run the following command:

```js
npm install @gcds-core/components-vue
```

### 2. Import GC Design System

In your `main.js` file, import the GC Design System components plugin and use it:

```js
import { GcdsComponents } from '@gcds-core/components-vue';

createApp(App).use(GcdsComponents).mount('#app');
```

### 3. Import GC Design System styles

There are 2 ways to do this:

- Import style to `main.js`.
- Import styles to `App.vue`.

a. Import the styles to your `main.js` file, alongside your `style.css`:

```js
import '@gcds-core/components-vue/gcds.css';
import './style.css';
```

b. Import the styles to your `App.vue` using the HTML style tag:

```html
<style src="@gcds-core/components-vue/gcds.css">
  /* global styles */
</style>
```

### 4. Start building

Once you've installed the design system, start building! Browse our available [components](https://design-system.alpha.canada.ca/en/components/) and [templates](https://design-system.alpha.canada.ca/en/page-templates/) to pull the code you need into your project.

## Using Vite

If using [Vite](https://vitejs.dev/), additional configuration will need to be added to `vite.config.ts` to prevent Vue from logging a warning about failing to resolve components (e.g. "Failed to resolve component: gcds-header").

```js
export default defineConfig({
  plugins: [
    vue({
      template: {
        compilerOptions: {
          // treat all tags with a dash as custom elements
          isCustomElement: tag => tag.includes('-'),
        },
      },
    }),
  ],
});
```

## How to contribute

If you are interested in contributing to GC Design System Components, please read our [contributing guidelines](https://github.com/cds-snc/gcds-components/blob/main/CONTRIBUTING.md).

## License

Code released under the [MIT License](https://github.com/cds-snc/gcds-components/blob/main/LICENSE).

---

# Composants de Système de design GC — Vue

Pour faciliter l’intégration des [composants Web de Système de design GC](../web/README.md) dans les projets Vue, le paquet [@gcds-core/components-vue](https://www.npmjs.com/package/@gcds-core/components-vue) propose différentes enveloppes Vue.

Ces enveloppes facilitent le travail avec les composants Web dans l’écosystème Vue en permettant la vérification des types, l’intégration avec `Vue Router`, et la prise en charge de la fonction `v-model` avec les contrôles de formulaire.

Les composants Web héritent les propriétés et l’interopérabilité natives.

## Documentation

Toute la documentation sur les composants de Système de design GC est accessible à l’adresse [https://systeme-design.alpha.canada.ca/](https://systeme-design.alpha.canada.ca/).

## Instructions d’installation dans Vue

Suivez ces étapes pour installer et utiliser les composants de Système de design GC dans votre projet Vue.

### 1. Installer le paquet

Naviguez vers le dossier racine de votre projet et exécutez la commande suivante :

```js
npm install @gcds-core/components-vue
```

### 2. Importer Système de design GC

Dans votre fichier `main.js`, importez le plugiciel des composants de Système de design GC et utilisez-le :

```js
import { GcdsComponents } from '@gcds-core/components-vue';

createApp(App).use(GcdsComponents).mount('#app');
```

### 3. Importer les styles de Système de design GC

Il y a 2 façons de le faire :

- Importer le style dans `main.js`.
- Importer des styles dans `App.vue`.

a. Importez les styles dans votre fichier `main.js`, à côté de votre `style.css`:

```js
import '@gcds-core/components-vue/gcds.css';
import './style.css';
```

b. Importez les styles dans fichier `App.vue` en utilisant la balise HTML `style` :

```html
<style src="@gcds-core/components-vue/gcds.css">
  /* global styles */
</style>
```

### 4. Commencez à créer

Une fois le système de design installé, commencez à créer! Parcourez nos [composants](https://systeme-design.alpha.canada.ca/fr/composants/) et [modèles](https://systeme-design.alpha.canada.ca/fr/modeles-de-page/) pour y trouver le code dont vous avez besoin pour votre projet.

## Utilisation de Vite

Si vous utilisez [Vite](https://vitejs.dev/), il faudra ajouter une configuration additionnelle à 'vite.config.ts' afin d’empêcher que Vue ne signale un avertissement d’échec pour la résolution de composants (p. ex. « Failed to resolve component: gcds-header » [Échec de la résolution du composant : gcds-header]).

```js
export default defineConfig({
  plugins: [
    vue({
      template: {
        compilerOptions: {
          // treat all tags with a dash as custom elements
          isCustomElement: tag => tag.includes('-'),
        },
      },
    }),
  ],
});
```

## Apportez votre contribution

Si vous souhaitez contribuer aux unités de style de Système de design GC, veuillez lire nos [lignes directrices sur la contribution](https://github.com/cds-snc/gcds-components/blob/main/CONTRIBUTING.md).

## Licence

Code publié en vertu de la [licence MIT](https://github.com/cds-snc/gcds-components/blob/main/LICENSE) (en anglais).
