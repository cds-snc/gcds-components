[La version française suit.](#composants-de-système-de-design-gc)

# GC Design System Components

GC Design System Components is a monorepo managing the web components of the GC Design System. Web components are encapsulated, reusable custom elements you can use within your web sites/apps. Along with the `gcds-components` packages, there are additional packages for React and Angular to ease integration into those popular frameworks.
<br/>
<br/>

## Tools

We are using [Stencil.js](https://stenciljs.com/) to build our web components.
<br/>
<br/>

## Documentation

You can find the full documentation for GC Design System Components on [https://design-system.alpha.canada.ca/](https://design-system.alpha.canada.ca/).
<br/>
<br/>

## Local installation

- Clone the repo `git clone https://github.com/cds-snc/gcds-components`.
- Run `npm install` to install all Node.js dependencies.
- Run `npm run build` to compile all three packages (web components, react and angular).

You can test the Angular and React packages locally as this repository is setup using [lerna](https://lerna.js.org/) which uses [`npm workspaces`](https://docs.npmjs.com/cli/v10/using-npm/workspaces) under the hood. Npm workspaces automatically handles the linking of dependent packages on `npm install` so there is no need to manually use `npm link`.

<br/>
<br/>

## Compiling all packages

In the root directory, run `npm run build`. All three packages will be compiled.
<br/>
<br/>

## Packages

| Package                   | Description                                                                         | Docs             |
| ------------------------- | ----------------------------------------------------------------------------------- | ---------------- |
| [`@cdssnc/gcds-components`](packages/web/)           | GC Design System Components | [Docs](packages/web/README.md) |
| [`@cdssnc/gcds-components-react`](packages/react/)           | GC Design System Components – React | [Docs](packages/react/README.md) |
| [`@cdssnc/gcds-components-angular`](packages/angular/)           | GC Design System Components – Angular  | [Docs](packages/angular/README.md) |

## How to contribute

If you are interested in contributing to GC Design System Components, please read our [contributing guidelines](https://github.com/cds-snc/gcds-components/blob/main/CONTRIBUTING.md).
<br/>
<br/>

## License

Code released under the [MIT License](https://github.com/cds-snc/gcds-components/blob/main/LICENSE).
<br/>
<br/>

--------
 
# Composants de Système de design GC

« GC Design System Components » (Composants de Système de design GC) est un référentiel unique qui gère les composants Web de Système de design GC. Les composants Web sont des éléments personnalisés, encapsulés et réutilisables pouvant être utilisés dans vos sites et applications Web. En plus des paquets `gcds-components`, il existe des paquets supplémentaires pour React et Angular qui favorisent l’intégration de ceux-ci dans les infrastructures populaires.
<br/>
<br/>

## Outils

Nous utilisons [Stencil.js](https://stenciljs.com/) pour créer nos composants Web.
<br/>
<br/>

## Documentation

Toute la documentation sur les composants de Système de design GC est accessible à l’adresse [https://systeme-design.alpha.canada.ca/](https://systeme-design.alpha.canada.ca/).
<br/>
<br/>

## Installation locale

- Copiez le référentiel `git clone https://github.com/cds-snc/gcds-components`.
- Exécutez ensuite `npm install` pour installer toutes les dépendances Node.js.
- Finalement, exécutez `npm run build` pour compiler les composants Web. [FR]
- Finalement, exécutez `npm run build` pour compiler les trois paquets (composants web, react et angular). [FR]

Pour tester localement les paquets Angular/React, assurez-vous de connecter les paquets au paquet Web en utilisant `npm link`. [original, to be removed]

Pour tester localement les paquets Angular et React 
You can test the Angular and React packages locally as this repository is setup using [lerna](https://lerna.js.org/) which uses [`npm workspaces`](https://docs.npmjs.com/cli/v10/using-npm/workspaces) under the hood. Npm workspaces automatically handles the linking of dependent packages on `npm install` so there is no need to manually use `npm link`. [FR]

<br/>
<br/>

### Compilation de tous les paquets

Dans le répertoire racine, exécutez `npm run build`. Les trois paquets seront alors compilés.
<br/>
<br/>

## Paquets

| Paquet                   | Description                                                                         | Docs             |
| ------------------------- | ----------------------------------------------------------------------------------- | ---------------- |
| [`@cdssnc/gcds-components`](packages/web/)           | Composants de Système de design GC | [Docs](packages/web/README.md) |
| [`@cdssnc/gcds-components-react`](packages/react/)           | Composants de Système de design GC — React | [Docs](packages/react/README.md) |
| [`@cdssnc/gcds-components-angular`](packages/angular/)           | Composants de Système de design GC — Angular  | [Docs](packages/angular/README.md) |

## Apportez votre contribution

Si vous souhaitez contribuer aux unités de style de Système de design GC, veuillez lire nos [lignes directrices sur la contribution](https://github.com/cds-snc/gcds-components/blob/main/CONTRIBUTING.md).
<br/>
<br/>

## Licence

Code publié en vertu de la [licence MIT](https://github.com/cds-snc/gcds-components/blob/main/LICENSE) (en anglais).
