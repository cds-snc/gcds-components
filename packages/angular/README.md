[La version française suit.](#composants-de-système-de-design-gc-—-web)

# GC Design System Components – Angular

GC Design System Components – Angular provides the [GC Design System Components](https://github.com/cds-snc/gcds-components/tree/main/packages/web) within a Angular wrapper to ease integration of the components into Angular apps.

## Documentation

You can find the full documentation for GC Design System Components on [https://cds-design-snc.netlify.app/]().

## Installation

### Install from npm

Navigate to the root folder of your project and run:

``` js
npm install @cdssnc/gcds-components @cdssnc/gcds-components-angular
```

Place the following code in the `app.module.ts` file of your app.

``` ts
import { GcdsComponentsModule } from '@cdssnc/gcds-components-angular';

@NgModule({
  declarations: [
    ...
  ],
  imports: [
    ...,
    GcdsComponentsModule
  ],
  providers: [],
  bootstrap: [...]
})
export class AppModule { }
```

Place the following code in the `styles.scss` file of your app.

``` css
@import '../node_modules/@cdssnc/gcds-components/dist/gcds/gcds.css';
```

## How to contribute

If you are interested in contributing to GC Design System Components, please read our [contributing guidelines](https://github.com/cds-snc/gcds-components/blob/main/CONTRIBUTING.md).

## License

Code released under the [MIT License](https://github.com/cds-snc/gcds-components/blob/main/LICENSE).

--------

# Composants de Système de design GC — Angular

Composants de Système de design GC — Angular fournit des [composants de Système de design GC](../web/README.md) dans un encapsulateur Angular afin de faciliter l’intégration dans les applications Angular.

## Documentation

Toute la documentation sur les composants de Système de design GC est accessible à l’adresse [https://cds-design-snc.netlify.app/fr/](https://cds-design-snc.netlify.app/fr/).

## Installation

### Installation à l'aide de npm

Naviguez jusqu'au dossier racine de votre projet et exécutez :

``` js
npm install @cdssnc/gcds-components @cdssnc/gcds-components-angular
```

Insérez le code suivant dans le fichier app.module.ts de votre application :

``` js
import { GcdsComponentsModule } from '@cdssnc/gcds-components-angular';

@NgModule({
  declarations: [
    ...
  ],
  imports: [
    ...,
    GcdsComponentsModule
  ],
  providers: [],
  bootstrap: [...]
})

export class AppModule { }
```

Insérez le code suivant dans le fichier `styles.scss` de votre application :

``` css
@import '../node_modules/@cdssnc/gcds-components/dist/gcds/gcds.css';
```

## Apportez votre contribution

Si vous souhaitez contribuer aux unités de style de Système de design GC, veuillez lire nos [lignes directrices sur la contribution](https://github.com/cds-snc/gcds-components/blob/main/CONTRIBUTING.md).
<br/>
<br/>

## Licence

Code publié en vertu de la [licence MIT](https://github.com/cds-snc/gcds-components/blob/main/LICENSE) (en anglais).
