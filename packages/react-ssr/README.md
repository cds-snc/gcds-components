[La version française suit.](#composants-de-système-de-design-gc--react-côté-serveur)

# GC Design System Components – React SSR

GC Design System Components – React SSR provides the [GC Design System Components](https://github.com/cds-snc/gcds-components/tree/main/packages/web) within a React wrapper to ease integration of the web components into React apps that take advantage of SSR (server side rendering) by using declarative shadow-dom.

## Documentation

You can find the full documentation for GC Design System Components on [https://design-system.alpha.canada.ca/](https://design-system.alpha.canada.ca/).

## Installation

### Install from npm

From the root folder of your project and run:

``` js
npm install @cdssnc/gcds-components-react-ssr
```

### Using the GC Design System components in your app

To use custom components in a server-side environment, you will need to import this script in the root or main file of your project.

``` jsx
import('@cdssnc/gcds-components-react-ssr/server');
```

To load the CSS required for GC Design System, import the following CSS file from the `@cdssnc/gcds-components-ssr` package.

``` js
import '@cdssnc/gcds-components-react-ssr/gcds.css'
```

#### Components

The React components from the `@cdssnc/gcds-components-ssr` package need to be used within React client components to allow the declarative shadow-dom to function.

To use the react ssr components, you need to:
Use within client components only. At the moment, this package uses client-only functions to help render the DSD (declarative shadow dom) version of the component
Use within function components only. The provided components use hooks which can only be used within function components.

##### Example of using `<gcds-input>`

An example of using the `gcds-input` component in a React functional component.

``` jsx
'use client';

import { GcdsInput } from '@cdssnc/gcds-components-react-ssr';
import { GcdsWrapper } from '@cdssnc/gcds-components-react-ssr/client';
import { FC } from 'react';

export const Input: FC = () => (
  <GcdsWrapper>
     <GcdsInput
       inputId="gcds-input"
       label="GC Design System input"
       name="gcds-input"
     ></GcdsInput>
  </GcdsWrapper>
);
```

#### Using the `GcdsWrapper`

It is recommended to use the `GcdsWrapper` component in each React component that makes use of a GC Design System component as they are required to be client components. Using GcdsWrapper from the root of your project could remove some server features from your chosen framework as it requires client components.

## Polyfills

As Declarative Shadow Dom (DSD) is fairly new and is now supported by all major browsers, [older versions may not support DSD](https://caniuse.com/declarative-shadow-dom). We recommend also including a polyfill for DSD in your app such as `@webcomponents/template-shadowroot"`.

## Differences between this package and the react package

Use the react package if you are not using a framework that uses SSR like NextJS. The `@cdssnc/gcds-components-react-ssr` package was specifically designed to provide support for these frameworks and is still in an experimental or canary release. This package takes advantage of a patched version of `@stencil/core` and a `<GcdsWrapper>` component to render the web components server side.

## Troubleshooting

### Loader issues

If you are running into issues with the loader, you may need to add the following to your `next.config.js`.

```js
  transpilePackages: ["@cdssnc/gcds-components-react-ssr", "@stencil/core"],
```

Thank you for your patience as we work and iterate on the product. If you encounter any issues, you can let the team know by creating an issue on [github](https://github.com/cds-snc/gcds-components/issues/new/choose)

## How to contribute

If you are interested in contributing to GC Design System Components, please read our [contributing guidelines](https://github.com/cds-snc/gcds-components/blob/main/CONTRIBUTING.md).

## License

Code released under the [MIT License](https://github.com/cds-snc/gcds-components/blob/main/LICENSE).

--------

# Composants de Système de design GC — React côté serveur

Composants de Système de design GC — React côté serveur fournit les [composants de Système de design GC](https://github.com/cds-snc/gcds-components/tree/main/packages/web) dans un Wrapper React pour faciliter l’intégration des composants Web dans les applications React qui tirent parti du rendu côté serveur (SSR) en utilisant un DOM fantôme déclaratif.

## Documentation

Vous trouverez la documentation complète sur les composants de Système de design GC sur [https://systeme-design.alpha.canada.ca/fr/](https://systeme-design.alpha.canada.ca/fr/).

## Installation

### Installer à partir de npm

Naviguez jusqu’au dossier racine de votre projet et exécutez :

``` js
npm install @cdssnc/gcds-components-react-ssr
```

### Utiliser les composants de Système de design GC dans votre application

Pour utiliser des composants personnalisés dans un environnement côté serveur, vous devez importer le script suivant dans le fichier racine ou principal de votre projet.

``` jsx
import('@cdssnc/gcds-components-react-ssr/server');
```

Pour charger le CSS requis pour Système de design GC, importez le fichier CSS suivant à partir du paquet `@cdssnc/gcds-components-ssr`.

``` js
import '@cdssnc/gcds-components-react-ssr/gcds.css'
```

#### Composants

Les composants React du paquet `@cdssnc/gcds-components-ssr` doivent être utilisés dans les composants client de React pour permettre au DOM fantôme déclaratif de fonctionner.

Pour utiliser les composants React côté serveur, vous devez :
Les utiliser uniquement dans des composants client. À l’heure actuelle, ce paquet utilise des fonctions réservées au côté client pour faciliter le rendu de la version DOM fantôme déclaratif (DSD) du composant.
Les utiliser uniquement dans des composants fonctionnels. Les composants fournis utilisent des Hooks qui ne peuvent être utilisés qu’à l’intérieur de composants fonctionnels.

##### Exemple avec `<gcds-input>`

Exemple d’utilisation du composant `gcds-input` dans un composant fonctionnel React.

``` jsx
'use client';

import { GcdsInput } from '@cdssnc/gcds-components-react-ssr';
import { GcdsWrapper } from '@cdssnc/gcds-components-react-ssr/client';
import { FC } from 'react';

export const Input: FC = () => (
  <GcdsWrapper>
     <GcdsInput
       inputId="gcds-input"
       label="GC Design System input"
       name="gcds-input"
     ></GcdsInput>
  </GcdsWrapper>
);
```

#### Utilisation du `GcdsWrapper`

Il est recommandé d’utiliser le composant `GcdsWrapper` dans chaque composant React qui utilise un composant de Système de design GC, car ils doivent être des composants client. L’utilisation de GcdsWrapper à partir de la racine de votre projet pourrait supprimer certaines fonctionnalités serveur de l’infrastructure que vous avez choisie, car il nécessite des composants client.

## Polyfills

Comme le DOM fantôme déclaratif (DSD) est relativement nouveau, il est maintenant compatible avec la plupart des navigateurs principaux, mais [certaines versions plus anciennes de navigateur pourraient ne pas l’être](https://caniuse.com/declarative-shadow-dom). Nous vous recommandons d’inclure un polyfill pour DSD dans votre application, par exemple `@webcomponents/template-shadowroot"`.

## Différences entre ce paquet et le paquet React

Utilisez le paquet React si vous n’utilisez pas une infrastructure permettant le rendu côté serveur comme NextJS. Le paquet `@cdssnc/gcds-components-react-ssr` a été spécialement conçu pour prendre en charge ce type d’infrastructure et est toujours dans une version expérimentale ou canari. Il tire parti d’une version corrigée de `@stencil/core` et d’un composant `<GcdsWrapper>` pour restituer les composants Web côté serveur.

## Dépannage

### Problèmes liés au chargeur

Si vous avez des problèmes avec le chargeur, vous devrez peut-être ajouter ce qui suit à votre `next.config.js`.

```js
  transpilePackages: ["@cdssnc/gcds-components-react-ssr", "@stencil/core"],
```

Merci de votre patience pendant que nous apportons des améliorations au produit. Si vous rencontrez des problèmes, vous pouvez en informer l’équipe en créant un ticket sur [GitHub](https://github.com/cds-snc/gcds-components/issues/new/choose).

## Apportez votre contribution

Si vous souhaitez contribuer aux unités de style de Système de design GC, veuillez lire nos [lignes directrices sur la contribution](https://github.com/cds-snc/gcds-components/blob/main/CONTRIBUTING.md).

## Licence

Code publié en vertu de la [licence MIT](https://github.com/cds-snc/gcds-components/blob/main/LICENSE) (en anglais).
