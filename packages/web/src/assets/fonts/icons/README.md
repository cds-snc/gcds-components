([Français](#polices-de-système-de-design-gc--icônes))

# GC Design System Fonts - GCDS Icons

GC Design System Fonts - GCDS Icons is a custom icon font created for the GC Design System. Icon fonts provide scalable vector icons that enhance performance, maintain consistency, and offer easy customization through CSS. Icons are used for visual communication that helps a person understand context.

To remove the reliance on a third-party icon library (Font Awesome) we built a custom icon font. This also provides the GC Design System with more control over icons available to users. FontAwesome provides an extensive collection of icons, most of which will not be used for our components. By limiting the scope of available icons, we aim to prevent misuse and provide clear guidelines on the appropriate usage of each icon.

## Installation

### Install icon font with CDN

#### Add the code

Use the latest version of GC Design System icons. Pinned versions provide stability and predictability because the code will remain consistent and won't change unexpectedly, which can be crucial for maintaining the stability of an application. However, it requires manual updating of the CDN links whenever a newer version of GC Design System icons is released.

To use GC Design System icons in your project, place the following code in your CSS or include the [gcds-icons.css](https://github.com/cds-snc/gcds-fonts/blob/main/fonts/icons/gcds-icons.css) file in your project. Replace `<version-number>` with the latest version number to receive corresponding updates.

```css
<!-- GC Design System Fonts - Icons -->
@font-face {
  font-family: "gcds-icons";
  src: url("https://cdn.design-system.alpha.canada.ca/@cdssnc/gcds-fonts@<version-number>/icons/gcds-icons.eot");
  src: url("https://cdn.design-system.alpha.canada.ca/@cdssnc/gcds-fonts@<version-number>/icons/gcds-icons.eot#iefix")
      format("embedded-opentype"), url("https://cdn.design-system.alpha.canada.ca/@cdssnc/gcds-fonts@<version-number>/icons/gcds-icons.ttf")
      format("truetype"),
    url("https://cdn.design-system.alpha.canada.ca/@cdssnc/gcds-fonts@<version-number>/icons/gcds-icons.woff")
      format("woff"), url("https://cdn.design-system.alpha.canada.ca/@cdssnc/gcds-fonts@<version-number>/icons/gcds-icons.svg")
      format("svg");
  font-weight: normal;
  font-style: normal;
  font-display: block;
}

[class^="gcds-icon-"],
[class*=" gcds-icon-"] {
  /* use !important to prevent issues with browser extensions that change fonts */
  font-family: "gcds-icons" !important;
  speak: never;
  font-style: normal;
  font-weight: normal;
  font-variant: normal;
  text-transform: none;
  line-height: 1;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.gcds-icon-checkmark-circle:before {
  content: "\e908";
}

.gcds-icon-chevron-down:before {
  content: "\e900";
}

.gcds-icon-chevron-left:before {
  content: "\e901";
}

.gcds-icon-chevron-right:before {
  content: "\e902";
}

.gcds-icon-chevron-up:before {
  content: "\e903";
}

.gcds-icon-close:before {
  content: "\e90b";
}

.gcds-icon-download:before {
  content: "\e906";
}

.gcds-icon-email:before {
  content: "\e905";
}

.gcds-icon-exclamation-circle:before {
  content: "\e909";
}

.gcds-icon-external:before {
  content: "\e904";
}

.gcds-icon-info-circle:before {
  content: "\e90a";
}

.gcds-icon-phone:before {
  content: "\e90c";
}

.gcds-icon-search:before {
  content: "\e907";
}

.gcds-icon-warning-triangle:before {
  content: "\e90d";
}
```

#### Automatic updates using `@latest`

Use the `@latest` version of GC Design System icons to receive automatic updates whenever a new version is released. **While it removes the need to manually update the CDN links, it adds the risk of introducing breaking changes to the codebase as new versions are automatically applied**.

### Install icon font with npm

Navigate to the root folder of your project and run:

```js
npm install @cdssnc/gcds-fonts
```

Place the following code in your CSS and replace `path/to/node_modules` with the location where you've added the node modules:

```css
<!-- GC Design System Fonts - Icons -->
@font-face {
  font-family: "gcds-icons";
  src: url("path/to/node_modules/@cdssnc/gcds-fonts/fonts/icons/gcds-icons.eot");
  src: url("path/to/node_modules/@cdssnc/gcds-fonts/fonts/icons/gcds-icons.eot#iefix")
      format("embedded-opentype"), url("path/to/node_modules/@cdssnc/gcds-fonts/fonts/icons/gcds-icons.ttf")
      format("truetype"),
    url("path/to/node_modules/@cdssnc/gcds-fonts/fonts/icons/gcds-icons.woff")
      format("woff"), url("path/to/node_modules/@cdssnc/gcds-fonts/fonts/icons/gcds-icons.svg")
      format("svg");
  font-weight: normal;
  font-style: normal;
  font-display: block;
}

[class^="gcds-icon-"],
[class*=" gcds-icon-"] {
  /* use !important to prevent issues with browser extensions that change fonts */
  font-family: "gcds-icons" !important;
  speak: never;
  font-style: normal;
  font-weight: normal;
  font-variant: normal;
  text-transform: none;
  line-height: 1;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.gcds-icon-checkmark-circle:before {
  content: "\e908";
}

.gcds-icon-chevron-down:before {
  content: "\e900";
}

.gcds-icon-chevron-left:before {
  content: "\e901";
}

.gcds-icon-chevron-right:before {
  content: "\e902";
}

.gcds-icon-chevron-up:before {
  content: "\e903";
}

.gcds-icon-close:before {
  content: "\e90b";
}

.gcds-icon-download:before {
  content: "\e906";
}

.gcds-icon-email:before {
  content: "\e905";
}

.gcds-icon-exclamation-circle:before {
  content: "\e909";
}

.gcds-icon-external:before {
  content: "\e904";
}

.gcds-icon-info-circle:before {
  content: "\e90a";
}

.gcds-icon-phone:before {
  content: "\e90c";
}

.gcds-icon-search:before {
  content: "\e907";
}

.gcds-icon-warning-triangle:before {
  content: "\e90d";
}
```

## How to use icons

Open the [icons overview]() to see a list of all available GC Design System icons and find the icon class name of the icon you want to use. Apply the class to any HTML element where you want the icon to appear. Replace `gcds-icon-name` with the specific class name for the icon you want to use.

```html
<span class="gcds-icon-name"></span>
```

If you want to use the close icon, for example, you need to add the class `gcds-icon-close`:

```html
<span class="gcds-icon-close"></span>
```

## Example

Open the [icons overview]() to see a list of all available GC Design System icons. You can find the code for the icons overview page in the [examples folder](https://github.com/cds-snc/gcds-fonts/tree/main/examples/icons).

---

# Polices de Système de design GC — GCDS Icônes

Polices de Système de design GC — GCDS Icônes est une police d'icônes sur mesure créée pour Système de design GC. Les polices d'icônes fournissent des icônes vectorielles redimensionnables qui améliorent la performance, assurent l'uniformité et offrent une personnalisation facile par le biais de CSS. Les icônes sont utilisées pour communiquer visuellement et aider les gens à comprendre le contexte.

Pour éviter de recourir à une bibliothèque d'icônes tierce (Font Awesome), nous avons créé une police d'icônes sur mesure. Nous pouvons ainsi mieux contrôler les icônes mises à la disposition des utilisatrices et utilisateurs de Système de design GC. Font Awesome fournit une vaste collection d'icônes, dont la plupart ne seront pas utilisées pour nos composants. En limitant la quantité d'icônes disponibles, nous visons à prévenir les mauvais usages et à fournir des directives claires sur l'usage approprié de chaque icône.

## Installation

### Installer la police d'icônes avec le CDN

#### Ajoutez le code

Utilisez la version la plus récente de icônes de Système de design GC. Les versions épinglées offrent stabilité et prévisibilité parce que le code ne changera pas de manière inattendue, ce qui peut être crucial pour maintenir la stabilité d'une application. Toutefois, il faut mettre à jour manuellement les liens CDN chaque fois qu'une version plus récente de icônes de Système de design GC est publiée.

Pour utiliser les icônes de Système de design GC dans votre projet, placez le code suivant dans votre CSS ou incluez le fichier [gcds-icons.css](https://github.com/cds-snc/gcds-fonts/blob/main/fonts/icons/gcds-icons.css) dans votre projet. Remplacez `<version-number>` par le numéro de version le plus récent pour recevoir les mises à jour correspondantes.

```css
<!-- Polices de Système de design GC — Icônes -->
@font-face {
  font-family: "gcds-icons";
  src: url("https://cdn.design-system.alpha.canada.ca/@cdssnc/gcds-fonts@<version-number>/icons/gcds-icons.eot");
  src: url("https://cdn.design-system.alpha.canada.ca/@cdssnc/gcds-fonts@<version-number>/icons/gcds-icons.eot#iefix")
      format("embedded-opentype"), url("https://cdn.design-system.alpha.canada.ca/@cdssnc/gcds-fonts@<version-number>/icons/gcds-icons.ttf")
      format("truetype"),
    url("https://cdn.design-system.alpha.canada.ca/@cdssnc/gcds-fonts@<version-number>/icons/gcds-icons.woff")
      format("woff"), url("https://cdn.design-system.alpha.canada.ca/@cdssnc/gcds-fonts@<version-number>/icons/gcds-icons.svg")
      format("svg");
  font-weight: normal;
  font-style: normal;
  font-display: block;
}

[class^="gcds-icon-"],
[class*=" gcds-icon-"] {
  /* use !important to prevent issues with browser extensions that change fonts */
  font-family: "gcds-icons" !important;
  speak: never;
  font-style: normal;
  font-weight: normal;
  font-variant: normal;
  text-transform: none;
  line-height: 1;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.gcds-icon-checkmark-circle:before {
  content: "\e908";
}

.gcds-icon-chevron-down:before {
  content: "\e900";
}

.gcds-icon-chevron-left:before {
  content: "\e901";
}

.gcds-icon-chevron-right:before {
  content: "\e902";
}

.gcds-icon-chevron-up:before {
  content: "\e903";
}

.gcds-icon-close:before {
  content: "\e90b";
}

.gcds-icon-download:before {
  content: "\e906";
}

.gcds-icon-email:before {
  content: "\e905";
}

.gcds-icon-exclamation-circle:before {
  content: "\e909";
}

.gcds-icon-external:before {
  content: "\e904";
}

.gcds-icon-info-circle:before {
  content: "\e90a";
}

.gcds-icon-phone:before {
  content: "\e90c";
}

.gcds-icon-search:before {
  content: "\e907";
}

.gcds-icon-warning-triangle:before {
  content: "\e90d";
}
```

#### Mises à jour automatiques grâce à `@latest`

Utilisez la version `@latest` de icônes de Système de design GC pour recevoir des mises à jour automatiques chaque fois qu'une nouvelle version est publiée. **Bien que cette approche vous évite la mise à jour manuelle des liens CDN, elle court le risque d'introduire des modifications qui entraînent une rupture de compatibilité avec le code base à mesure que les nouvelles versions sont automatiquement appliquées**.

### Installer la police d'icônes avec npm

Naviguez jusqu'au dossier racine de votre projet et exécutez :

```js
npm install @cdssnc/gcds-fonts
```

Placez le code suivant dans votre CSS et remplacez `path/to/node_modules` par l'emplacement où vous avez ajouté les modules de Node :

```css
<!-- Polices de Système de design GC — Icônes -->
@font-face {
  font-family: "gcds-icons";
  src: url("path/to/node_modules/@cdssnc/gcds-fonts/fonts/icons/gcds-icons.eot");
  src: url("path/to/node_modules/@cdssnc/gcds-fonts/fonts/icons/gcds-icons.eot#iefix")
      format("embedded-opentype"), url("path/to/node_modules/@cdssnc/gcds-fonts/fonts/icons/gcds-icons.ttf")
      format("truetype"),
    url("path/to/node_modules/@cdssnc/gcds-fonts/fonts/icons/gcds-icons.woff")
      format("woff"), url("path/to/node_modules/@cdssnc/gcds-fonts/fonts/icons/gcds-icons.svg")
      format("svg");
  font-weight: normal;
  font-style: normal;
  font-display: block;
}

[class^="gcds-icon-"],
[class*=" gcds-icon-"] {
  /* use !important to prevent issues with browser extensions that change fonts */
  font-family: "gcds-icons" !important;
  speak: never;
  font-style: normal;
  font-weight: normal;
  font-variant: normal;
  text-transform: none;
  line-height: 1;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.gcds-icon-checkmark-circle:before {
  content: "\e908";
}

.gcds-icon-chevron-down:before {
  content: "\e900";
}

.gcds-icon-chevron-left:before {
  content: "\e901";
}

.gcds-icon-chevron-right:before {
  content: "\e902";
}

.gcds-icon-chevron-up:before {
  content: "\e903";
}

.gcds-icon-close:before {
  content: "\e90b";
}

.gcds-icon-download:before {
  content: "\e906";
}

.gcds-icon-email:before {
  content: "\e905";
}

.gcds-icon-exclamation-circle:before {
  content: "\e909";
}

.gcds-icon-external:before {
  content: "\e904";
}

.gcds-icon-info-circle:before {
  content: "\e90a";
}

.gcds-icon-phone:before {
  content: "\e90c";
}

.gcds-icon-search:before {
  content: "\e907";
}

.gcds-icon-warning-triangle:before {
  content: "\e90d";
}
```

## Comment utiliser les icônes

Ouvrez l'[aperçu des icônes]() pour afficher la liste de toutes les icônes de Système de design GC disponibles et trouver le nom de classe de l'icône que vous souhaitez utiliser. Appliquez la classe à n'importe quel élément HTML auquel vous voulez ajouter l'icône. Remplacez `gcds-icon-name` par le nom de classe de l'icône que vous souhaitez utiliser.

```html
<span class="gcds-icon-name"></span>
```

Si vous voulez utiliser l'icône « fermer », par exemple, vous devez ajouter la classe `gcds-icon-close` :

```html
<span class="gcds-icon-close"></span>
```

## Exemple

Ouvrez l'[aperçu des icônes]() pour afficher la liste de toutes les icônes de Système de design GC disponibles. Vous trouverez le code accompagnant l'aperçu des icônes dans le dossier [exemples](https://github.com/cds-snc/gcds-fonts/tree/main/examples/icons).
