[La version française suit.](#composants-de-système-de-design-gc--angular)

# GC Design System Components – Angular

GC Design System Components – Angular provides the [GC Design System Components](https://github.com/cds-snc/gcds-components/tree/main/packages/web) within a Angular wrapper to ease integration of the components into Angular apps.

## Documentation

You can find the full documentation for GC Design System Components on [https://design-system.alpha.canada.ca/](https://design-system.alpha.canada.ca/).

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

## Using GC Design System components with `RouterLink`

To use `routerLink` with GC Design System components simply add the `routerLink` attribute to th elements as you normally would. With components that contains multiple links within their shadow-dom (e.g., `gcds-pagination`, `gcds-footer`) and not one clear path when selected, add `gcdsRotuerLink` to allow the component to interface with the Angular router.

### RouterLink and gcdsRouterLink examples

#### RouterLink example

```html
  <gcds-link
    href="/home"
    routerLink="/home"
  >
    Home
  </gcds-link>
```

#### GcdsRouterLink example

```html
  <!-- GCDS Router link example -->
  <gcds-pagination
    display="simple"
    label="Pagination"
    previous-href="/page1"
    previous-label="Page 1"
    next-href="/page3"
    next-label="Page 3"
    gcdsRouterLink
  >
  </gcds-pagination>
```

## How to contribute

If you are interested in contributing to GC Design System Components, please read our [contributing guidelines](https://github.com/cds-snc/gcds-components/blob/main/CONTRIBUTING.md).

## License

Code released under the [MIT License](https://github.com/cds-snc/gcds-components/blob/main/LICENSE).

--------

# Composants de Système de design GC — Angular

Composants de Système de design GC — Angular fournit des [composants de Système de design GC](../web/README.md) dans un encapsulateur Angular afin de faciliter l’intégration dans les applications Angular.

## Documentation

Toute la documentation sur les composants de Système de design GC est accessible à l’adresse [https://systeme-design.alpha.canada.ca/](https://systeme-design.alpha.canada.ca/).

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

## Utilisation des composants du Système de design GC avec `RouterLink`

Pour utiliser `routerLink` avec les composants du système de design GC, ajoutez simplement l'attribut `routerLink` aux éléments comme vous le feriez normalement. Avec des composants qui contiennent plusieurs liens dans leur shadow-dom (par exemple, `gcds-pagination`, `gcds-footer`) et pas un chemin clair lorsqu'ils sont sélectionnés, ajoutez `gcdsRotuerLink` pour permettre au composant de s'interfacer avec le routeur Angular.

### Exemples de RouterLink et gcdsRouterLink

#### Exemple de RouterLink

```html
  <gcds-link
    href="/accueil"
    routerLink="/accueil"
  >
    Accueil
  </gcds-link>
```

#### Exemple de GcdsRouterLink

```html
  <gcds-pagination
    display="simple"
    label="Pagination"
    previous-href="/page1"
    previous-label="Page 1"
    next-href="/page3"
    next-label="Page 3"
    gcdsRouterLink
  >
  </gcds-pagination>
```

## Apportez votre contribution

Si vous souhaitez contribuer aux unités de style de Système de design GC, veuillez lire nos [lignes directrices sur la contribution](https://github.com/cds-snc/gcds-components/blob/main/CONTRIBUTING.md).
<br/>
<br/>

## Licence

Code publié en vertu de la [licence MIT](https://github.com/cds-snc/gcds-components/blob/main/LICENSE) (en anglais).
