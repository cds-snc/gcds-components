[La version française suit.](#composants-de-système-de-design-gc)

# GC Design System Components

Use GC Design System web components directly in HTML. These components are framework-agnostic and behave similarly to native HTML elements.

Use this option for:

- Static sites
- CMS platforms
- Node.js
- Java
- Svelte
- .NET

If you’re using React, Angular, or Vue frameworks, browse the [installation page](https://design-system.alpha.canada.ca/en/get-started/develop/) for framework-specific options.

## Documentation

You can find the full documentation for GC Design System Components on [https://design-system.alpha.canada.ca/](https://design-system.alpha.canada.ca/).

## Npm installation instructions

### 1. Install the package

Navigate to your project’s root folder and run the following command:

```js
npm install @cdssnc/gcds-components
```

### 2. Include GC Design System in your project

Add the following `link` tags inside the `head` tag of your `HTML` files to load GC Design System:

```html
<!-- GC Design System -->
<link
  rel="stylesheet"
  href="/node_modules/@cdssnc/gcds-components/dist/gcds/gcds.css"
/>
<script
  type="module"
  src="/node_modules/@cdssnc/gcds-components/dist/gcds/gcds.esm.js"
></script>
```

### 3. Start building

Once you've installed the design system, start building! Browse our available [components](https://design-system.alpha.canada.ca/en/components/) and [templates](https://design-system.alpha.canada.ca/en/page-templates/) to pull the code you need into your project.

## CDN installation instructions

### 1. Select how to receive updates

You have two options to receive updates from the CDN:

- Use pinned version for stability (recommended).
- Use `@latest` to get automatic updates.

#### a. Use pinned version (recommended)

It’s highly recommended to use this option to ensure stability and predictability in your project.

Add the following code to the `head` tag of your `HTML` files to load GC Design System. Make sure the current version is listed.

```html
<!-- GC Design System -->
<link
  rel="stylesheet"
  href="https://cdn.design-system.alpha.canada.ca/@cdssnc/gcds-components@<version-number>/dist/gcds/gcds.css"
/>
<script
  type="module"
  src="https://cdn.design-system.alpha.canada.ca/@cdssnc/gcds-components@<version-number>/dist/gcds/gcds.esm.js"
></script>
```

Note: `<script type="module">` requires a server to load properly. If developing locally, use `<script nomodule>`.

##### Going forward

The code will remain unchanged until you manually update the version in the CDN URLs. This is ideal for production environments.

Check for new [GC Design System versions](https://github.com/cds-snc/gcds-components/blob/main/CHANGELOG.md) regularly to update the latest pinned version.

#### Use `@latest` version

Use the `@latest` tag to pull the most recent version of GC Design System into your project. Put this tag in place of the version number.

While it removes the need to manually update versions, it adds the risk of introducing breaking changes to the codebase as new versions are automatically applied.

### 2. Start building

Once you've installed the design system, start building! Browse our available [components](https://design-system.alpha.canada.ca/en/components/) and [templates](https://design-system.alpha.canada.ca/en/page-templates/) to pull the code you need into your project.

## Supported frameworks

The gcds-component library works in multiple frameworks.

### React

Please reference [GC Design System Components – React](../react/README.md)

### Angular

Please reference [GC Design System Components – Angular](../angular/README.md)

### Vue

Please reference [GC Design System Components – Vue](../vue/README.md)

## How to contribute

If you are interested in contributing to GC Design System Components, please read our [contributing guidelines](https://github.com/cds-snc/gcds-components/blob/main/CONTRIBUTING.md).

## License

Code released under the [MIT License](https://github.com/cds-snc/gcds-components/blob/main/LICENSE).

---

# Composants de Système de design GC

Utilisez les composants Web de Système de design GC directement dans un projet HTML. Ces composants s’adaptent à tout cadriciel et ont un comportement similaire aux éléments HTML natifs.

Utilisez cette option pour les situations suivantes :

- Sites statiques
- Plateformes CMS
- Node.js
- Java
- Svelte
- .NET

Si vous utilisez les cadres React, Angular ou Vue, consultez la [page d’installation](https://systeme-design.alpha.canada.ca/fr/demarrer/developpement/) pour connaître les options propres à chaque cadre.

## Documentation

Toute la documentation sur les composants de Système de design GC est accessible à l’adresse [https://systeme-design.alpha.canada.ca/](https://systeme-design.alpha.canada.ca/).

## Instructions d’installation avec npm

### 1. Installer le paquet

Naviguez vers le dossier racine de votre projet et exécutez la commande suivante :

```js
npm install @cdssnc/gcds-components
```

### 2. Inclure Système de design GC dans votre projet

Ajoutez les balises `link` suivantes à l’intérieur de la balise `head` de vos fichiers `HTML` pour charger Système de design GC :

```html
<!-- GC Design System -->
<link
  rel="stylesheet"
  href="/node_modules/@cdssnc/gcds-components/dist/gcds/gcds.css"
/>
<script
  type="module"
  src="/node_modules/@cdssnc/gcds-components/dist/gcds/gcds.esm.js"
></script>
```

### 3. Commencez à créer

Une fois le système de design installé, commencez à créer! Parcourez nos [composants](https://systeme-design.alpha.canada.ca/fr/composants/) et [modèles](https://systeme-design.alpha.canada.ca/fr/modeles-de-page/) pour y trouver le code dont vous avez besoin pour votre projet.

## Instructions d’installation avec CDN

### 1. Sélectionner comment recevoir des mises à jour

Vous avez deux options pour recevoir des mises à jour du CDN :

- Utiliser la version épinglée pour la stabilité (recommandé).
- Utiliser `@latest` pour obtenir des mises à jour automatiques.

#### a. Utiliser la version épinglée (recommandé)

Il est fortement recommandé d’utiliser cette option pour garantir la stabilité et la prévisibilité de votre projet.

Ajoutez le code suivant à la balise `head` de vos fichiers `HTML` pour charger Système de design GC. Assurez-vous d’indiquer la version actuelle.

```html
<!-- GC Système de design -->
<link
  rel="stylesheet"
  href="https://cdn.design-system.alpha.canada.ca/@cdssnc/gcds-components@<version-number>/dist/gcds/gcds.css"
/>
<script
  type="module"
  src="https://cdn.design-system.alpha.canada.ca/@cdssnc/gcds-components@<version-number>/dist/gcds/gcds.esm.js"
></script>
```

Remarque : `<script type="module">` doit être chargé depuis un serveur. Pour le développement local, utilisez `<script nomodule>`.

##### Étapes suivantes

Le code restera inchangé jusqu’à ce que vous mettiez à jour manuellement la version dans les URL CDN, ce qui est idéal pour les environnements de production.

Vérifiez régulièrement s’il y a des [nouvelles versions de Système de design GC](https://github.com/cds-snc/gcds-components/blob/main/CHANGELOG.md#journal-des-modifications) afin de mettre à jour la dernière version épinglée.

#### b. Utiliser la version `@latest` (la dernière version)

Utilisez la balise `@latest` pour insérer la plus récente version de Système de design GC dans votre projet. Remplacez le numéro de version par cette balise.

Bien que cette approche vous évite la mise à jour manuelle des versions, elle court le risque d’introduire des modifications qui entraînent une rupture de compatibilité avec le code base à mesure que les nouvelles versions sont automatiquement appliquées.

### 2. Commencez à créer

Une fois le système de design installé, commencez à créer! Parcourez nos [composants](https://systeme-design.alpha.canada.ca/fr/composants/) et [modèles](https://systeme-design.alpha.canada.ca/fr/modeles-de-page/) pour y trouver le code dont vous avez besoin pour votre projet.

## Cadres d'application pris en charge

La bibliothèque gcds-components fonctionne sous plusieurs cadres d'application.

### React

Veuillez faire référence [Composants de Système de design GC – React](../react/README.md)

### Angular

Veuillez faire référence [Composants de Système de design GC – Angular](../angular/README.md)

### Vue

Veuillez faire référence [Composants de Système de design GC – Vue](../vue/README.md)

## Apportez votre contribution

Si vous souhaitez contribuer aux unités de style de Système de design GC, veuillez lire nos [lignes directrices sur la contribution](https://github.com/cds-snc/gcds-components/blob/main/CONTRIBUTING.md).

## Licence

Code publié en vertu de la [licence MIT](https://github.com/cds-snc/gcds-components/blob/main/LICENSE) (en anglais).
