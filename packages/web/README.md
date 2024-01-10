[La version française suit.](#composants-de-système-de-design-gc)

# GC Design System Components

GC Design System Components are encapsulated reusable custom elements to use within your web sites/apps built using the [GC Design System Tokens](https://github.com/cds-snc/gcds-tokens).

## Documentation

You can find the full documentation for GC Design System Components on [https://design-system.alpha.canada.ca/](https://design-system.alpha.canada.ca/).

## Installation

### Install from npm

```js
npm install @cdssnc/gcds-components
```

### Install with CDN

Place the following code in the `<head>` element of your site.
All gcds-components should now be ready to use in your site.

```html
<!-- Icons Font Awesome (to access icons, import Font Awesome) -->
<link
  rel="stylesheet"
  href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.min.css"
  crossorigin="anonymous"
/>

<!-- GC Design System -->
<link
  rel="stylesheet"
  href="https://cdn.design-system.alpha.canada.ca/@cdssnc/gcds-components@latest/dist/gcds/gcds.css"
/>
<script
  type="module"
  src="https://cdn.design-system.alpha.canada.ca/@cdssnc/gcds-components@latest/dist/gcds/gcds.esm.js"
></script>
<script
  nomodule
  src="https://cdn.design-system.alpha.canada.ca/@cdssnc/gcds-components@latest/dist/gcds/gcds.js"
></script>
```

Note: `<script type="module">` requires a server to load properly, if developing locally, please use `<script nomodule>`.

### Supported frameworks

The gcds-component library works in multiple frameworks.

#### Javascript

Place the following code in the `<head>` element of your site.

```html
<!-- Icons Font Awesome (to access icons, import Font Awesome) -->
<link
  rel="stylesheet"
  href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.min.css"
  crossorigin="anonymous"
/>

<!-- GC Design System -->
<link
  rel="stylesheet"
  href="/node_modules/@cdssnc/gcds-components/dist/gcds/gcds.css"
/>
<script
  type="module"
  src="/node_modules/@cdssnc/gcds-components/dist/gcds/gcds.esm.js"
></script>
<script
  nomodule
  src="/node_modules/@cdssnc/gcds-components/dist/gcds/gcds.js"
></script>
```

All gcds-components should now be ready to use in your site.

#### React

Please reference [GC Design System Components – React](../react/README.md)

### Angular

Please reference [GC Design System Components – Angular](../angular/README.md)

#### Vue

Place the following code in the `main.js` file of your app.

```js
import {
  applyPolyfills,
  defineCustomElements,
} from '@cdssnc/gcds-components/loader';
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

---

# Composants de Système de design GC

Composants de Système de design GC fournit des éléments personnalisables, encapsulés et réutilisables. Ils peuvent être employés dans vos sites et applications Web créés à l’aide des [unités de style de Système de design GC](https://github.com/cds-snc/gcds-tokens).

## Documentation

Toute la documentation sur les composants de Système de design GC est accessible à l’adresse [https://systeme-design.alpha.canada.ca/](https://systeme-design.alpha.canada.ca/).

## Installation

## Installer le paquet avec npm

```js
npm install @cdssnc/gcds-components
```

## Installer le paquet avec CDN

Insérez le code qui suit à l'intérieur de la balise `<head>` de votre site.

Vous devriez maintenant pouvoir utiliser tous les composants de gcds-components sur votre site.

```html
<!-- Icons Font Awesome (pour avoir accès aux icônes, installer Font Awesome) -->
<link
  rel="stylesheet"
  href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.min.css"
  crossorigin="anonymous"
/>

<!-- GC Système de design -->
<link
  rel="stylesheet"
  href="https://cdn.design-system.alpha.canada.ca/@cdssnc/gcds-components@latest/dist/gcds/gcds.css"
/>
<script
  type="module"
  src="https://cdn.design-system.alpha.canada.ca/@cdssnc/gcds-components@latest/dist/gcds/gcds.esm.js"
></script>
<script
  nomodule
  src="https://cdn.design-system.alpha.canada.ca/@cdssnc/gcds-components@latest/dist/gcds/gcds.js"
></script>
```

Remarque : Il faut un serveur pour que `<script type="module">` se charge correctement. Si vous développez localement, utilisez plutôt `<script nomodule>`.

## Cadres d'application pris en charge

La bibliothèque gcds-components fonctionne sous plusieurs cadres d'application.

### JavaScript

Insérez le code qui suit à l'intérieur de la balise `<head>` de votre site.

```html
<!-- Icons Font Awesome (pour avoir accès aux icônes, installer Font Awesome) -->
<link
  rel="stylesheet"
  href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.min.css"
  crossorigin="anonymous"
/>

<!-- GC Système de design -->
<link
  rel="stylesheet"
  href="/node_modules/gcds-components/dist/gcds/gcds.css"
/>
<script type="module" src="/components/dist/gcds/gcds.esm.js"></script>
<script nomodule src="/components/dist/gcds/gcds.js"></script>
```

Vous devriez maintenant pouvoir utiliser tous les composants de gcds-components sur votre site.

#### React

Veuillez faire référence [Composants de Système de design GC – React](../react/README.md)

### Angular

Veuillez faire référence [Composants de Système de design GC – Angular](../angular/README.md)

### Vue

Insérez le code qui suit dans le fichier `main.js` de votre application.

```js
import { applyPolyfills, defineCustomElements } from 'gcds-components/loader';
import 'gcds-components/dist/gcds/gcds.css';

applyPolyfills().then(() => {
  defineCustomElements();
});
```

Vous devriez maintenant pouvoir utiliser tous les composants de gcds-components dans votre application Vue.

## Apportez votre contribution

Si vous souhaitez contribuer aux unités de style de Système de design GC, veuillez lire nos [lignes directrices sur la contribution](https://github.com/cds-snc/gcds-components/blob/main/CONTRIBUTING.md).
<br/>
<br/>

## Licence

Code publié en vertu de la [licence MIT](https://github.com/cds-snc/gcds-components/blob/main/LICENSE) (en anglais).
