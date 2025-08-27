[La version française suit.](#composants-de-système-de-design-gc--angular)

# GC Design System Components – Angular

To make it easier to integrate [GC Design System web components](../web/README.md) into Angular projects, the [gcds-components-angular](https://www.npmjs.com/package/@cdssnc/gcds-components-angular) package provides Angular wrappers.

These wrappers make it easier to work with web components in the Angular ecosystem by preventing unnecessary repaints through detached change detection, and enabling form controls to work with `ngModel` and reactive forms.

The web components inherit native properties and interoperability.

## Documentation

You can find the full documentation for GC Design System Components on [https://design-system.alpha.canada.ca/](https://design-system.alpha.canada.ca/).

## Angular installation instructions

Follow these steps to install and use GC Design System components in your Angular project.

### 1. Install the package

Navigate to your project’s root folder and run the following command:

```js
npm install @cdssnc/gcds-components @cdssnc/gcds-components-angular
```

### 2. Import GC Design System

Place the following code in the `app.module.ts` file of your app:

```ts
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

Place the following code in the `styles.scss` file of your app to import GC Design System styles:

```css
@import '../node_modules/@cdssnc/gcds-components/dist/gcds/gcds.css';
```

### 3. Start building

Once you've installed the design system, start building! Browse our available [components](https://design-system.alpha.canada.ca/en/components/) and [templates](https://design-system.alpha.canada.ca/en/page-templates/) to pull the code you need into your project.

## Using GC Design System components with `RouterLink`

To use `routerLink` with GC Design System components simply add the `routerLink` attribute to the elements as you normally would. With components that contains multiple links within their shadow-dom (e.g., `gcds-pagination`, `gcds-footer`) and not one clear path when selected, add `gcdsRotuerLink` to allow the component to interface with the Angular router.

### RouterLink and gcdsRouterLink examples

#### RouterLink example

```html
<gcds-link href="/home" routerLink="/home"> Home </gcds-link>
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

---

# Composants de Système de design GC — Angular

Afin de faciliter l'intégration des [composants Web de Système de design GC](../web/README.md) à vos projets Angular, le paquet [gcds-components-angular](https://www.npmjs.com/package/@cdssnc/gcds-components-angular) propose des enveloppes Angular.

Ces enveloppes faciltent le travail avec les composants Web dans l'écosystème Angular en empêchant l'actualisation inutile du rendu grâce à une détection des changements découplée, et en permettant aux contrôles de formulaire de fonctionner avec `ngModel` et les formulaires réactifs.

Les composants Web héritent les propriétés et l'interopérabilité natives.

## Documentation

Toute la documentation sur les composants de Système de design GC est accessible à l’adresse [https://systeme-design.alpha.canada.ca/](https://systeme-design.alpha.canada.ca/).

## Instructions d’installation dans Angular

Suivez ces étapes pour installer et utiliser les composants de Système de design GC dans votre projet Angular.

### 1. Installer le paquet

Naviguez vers le dossier racine de votre projet et exécutez la commande suivante :

```js
npm install @cdssnc/gcds-components @cdssnc/gcds-components-angular
```

### 2. Importer Système de design GC

Insérez le code suivant dans le fichier `app.module.ts` de votre application :

```js
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

Pour importer les styles de Système de design GC, insérez le code suivant dans le fichier `styles.scss` de votre application :

```css
@import '../node_modules/@cdssnc/gcds-components/dist/gcds/gcds.css';
```

### 3. Commencez à créer

Une fois le système de design installé, commencez à créer! Parcourez nos [composants](https://systeme-design.alpha.canada.ca/fr/composants/) et [modèles](https://systeme-design.alpha.canada.ca/fr/modeles-de-page/) pour y trouver le code dont vous avez besoin pour votre projet.

## Utilisation des composants du Système de design GC avec `RouterLink`

Pour utiliser `routerLink` avec les composants du système de design GC, ajoutez simplement l'attribut `routerLink` aux éléments comme vous le feriez normalement. Avec des composants qui contiennent plusieurs liens dans leur shadow-dom (par exemple, `gcds-pagination`, `gcds-footer`) et pas un chemin clair lorsqu'ils sont sélectionnés, ajoutez `gcdsRotuerLink` pour permettre au composant de s'interfacer avec le routeur Angular.

### Exemples de RouterLink et gcdsRouterLink

#### Exemple de RouterLink

```html
<gcds-link href="/accueil" routerLink="/accueil"> Accueil </gcds-link>
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
