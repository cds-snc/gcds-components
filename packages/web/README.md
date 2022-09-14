[La version française suit.](#système-de-design---composants-gc)

# GC Design system components

## Installation

### Install from npm

``` js
npm install gcds-components
```

### Install with CDN

Place the following code in the `<head>` element of your site.
All gcds-components should now be ready to use in your site.

``` html
<!-- Font Awesome (Icons) -->
<link href="https://unpkg.com/font-awesome/css/font-awesome.min.css" rel="stylesheet">

<!-- GC Design System -->
<link rel="stylesheet" href="https://unpkg.com/gcds-components/dist/gcds/gcds.css">
<script type="module" src="https://unpkg.com/gcds-components/dist/gcds/gcds.esm.js"></script>
<script nomodule src="https://unpkg.com/gcds-components/dist/gcds/gcds.js"></script>
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
<link rel="stylesheet" href="/node_modules/gcds-components/dist/gcds/gcds.css">
<script type="module" src="/components/dist/gcds/gcds.esm.js"></script>
<script nomodule src="/components/dist/gcds/gcds.js"></script>
```

All gcds-components should now be ready to use in your site.

#### React

``` js
npm install gcds-components-react
```

Place the following code in the `index.js` file of your app.

``` jsx
import 'gcds-components-react/gcds.css'
```

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

--------

# Système de design - composants GC

## Installation

### Installer le paquet avec npm

``` js
npm install gcds-components
```

### Installer le paquet avec CDN

Insérez le code qui suit à l'intérieur de la balise `<head>` de votre site.
Vous devriez maintenant pouvoir utiliser tous les composants de gcds-components sur votre site.

``` html
<!-- Font Awesome -->
<link href="https://unpkg.com/font-awesome/css/font-awesome.min.css" rel="stylesheet">

<!-- GC Système de design -->
<link rel="stylesheet" href="https://unpkg.com/gcds-components/dist/gcds/gcds.css">
<script type="module" src="https://unpkg.com/gcds-components/dist/gcds/gcds.esm.js"></script>
<script nomodule src="https://unpkg.com/gcds-components/dist/gcds/gcds.js"></script>
```

Remarque : Il faut un serveur pour que <script type="module"> se charge correctement. Si vous développez localement, utilisez plutôt <script nomodule>.

### Cadres d'application pris en charge

La bibliothèque gcds-components fonctionne sous plusieurs cadres d'application.

#### Javascript

Insérez le code qui suit à l'intérieur de la balise `<head>` de votre site.

``` html
<!-- Font Awesome -->
<link href="https://unpkg.com/font-awesome/css/font-awesome.min.css" rel="stylesheet">

<!-- GC Système de design -->
<link rel="stylesheet" href="/node_modules/gcds-components/dist/gcds/gcds.css">
<script type="module" src="/components/dist/gcds/gcds.esm.js"></script>
<script nomodule src="/components/dist/gcds/gcds.js"></script>
```

Vous devriez maintenant pouvoir utiliser tous les composants de gcds-components sur votre site.

#### React

npm install gcds-components-react
```

Insérez le code qui suit dans le fichier `index.js` de votre application.

``` jsx
import 'gcds-components-react/gcds.css'
```

#### Vue

Insérez le code qui suit dans le fichier `main.js` de votre application.

``` js
import { applyPolyfills, defineCustomElements } from 'gcds-components/loader';
import 'gcds-components/dist/gcds/gcds.css';

applyPolyfills().then(() => {
  defineCustomElements();
});
```

Vous devriez maintenant pouvoir utiliser tous les composants de gcds-components dans votre application Vue.