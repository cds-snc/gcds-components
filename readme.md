[La version française suit.](#système-de-design-gc-composants)

# GC Design system components

## Public servants building modern, accessible, beautiful government services

### Ship modern products faster with less work

Spend less time doing repetitive work and more time shipping a product that meets the needs of people using your service.

### An accessible, seamless Canada.ca

Build accessible and predictable products your clients can trust. They'll know they're in the right place and can easily get the help they need.

### Human-centred design

Find ready-made solutions to common problems so you can design content, visual, and interactive elements for task success for all clients.

### Grow your skills and knowledge in the open

Contribute to the system, growing collective knowledge and resources. We're working in the open to learn from each other.

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

--------

# Système de design GC composants

## Vers la création de services fédéraux modernes, accessibles et esthétiques

### Créez des produits modernes rapidement et facilement

Passez moins de temps à effectuer des tâches répétitives, et plus de temps à expédier un produit qui répond aux besoins de vos usagers.

### Tirez profit d'un site Canada.ca accessible

Développez des produits accessibles et intuitifs qui inspirent confiance. Vos usagers sentiront qu'ils sont au bon endroit pour obtenir l'aide dont ils ont besoin.

### Placez l'humain au centre de votre conception

Concevez du contenu, des visuels et des interactions qui permettent aux usagers d'accomplir leur objectif grâce à des solutions toutes faites à des problèmes courants.

### Développez votre savoir-faire avec la communauté

Contribuez au système de design, et enrichissez ainsi les connaissances et ressources collectives. Nous travaillons sur une plateforme publique pour pouvoir apprendre les uns des autres.

## Installation

## Installer le paquet avec npm

``` js
npm install gcds-components
```

## Cadres d'application pris en charge

La bibliothèque gcds-components fonctionne sous plusieurs cadres d'application.

### Javascript

Insérez le code qui suit à l'intérieur de la balise `<head>` de votre site.

``` html
<script type="module">
    import { defineCustomElements } from '/node_modules/gcds-components/loader/index.es2017.mjs';
    defineCustomElements();
</script>
<link rel="stylesheet" href="/node_modules/gcds-components/dist/gcds/gcds.css">
```

Vous devriez maintenant pouvoir utiliser tous les composants de gcds-components sur votre site.

### React

Insérez le code qui suit dans le fichier `index.js` de votre application.

``` jsx
import { applyPolyfills, defineCustomElements } from 'gcds-components/loader';
import 'gcds-components/dist/gcds/gcds.css';

ReactDOM.render(...);

applyPolyfills().then(() => {
  defineCustomElements(window);
});

```

Vous devriez maintenant pouvoir utiliser tous les composants de gcds-components dans votre application React.

### Vue

Insérez le code qui suit dans le fichier `main.js` de votre application.

``` js
import { applyPolyfills, defineCustomElements } from 'gcds-components/loader';
import 'gcds-components/dist/gcds/gcds.css';

applyPolyfills().then(() => {
  defineCustomElements();
});
```

Vous devriez maintenant pouvoir utiliser tous les composants de gcds-components dans votre application Vue.
