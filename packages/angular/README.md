[La version française suit.](#système-de-design---composants-gc)

# GC Design system components

## Installation

### Install from npm

``` js
npm install gcds-components gcds-components-angular
```

Place the following code in the `app.module.ts` file of your app.

``` ts
import { GcdsComponentsModule } from 'gcds-components-angular';

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

Place the following code in the `syles.scss` file of your app.

``` css
@import '../node_modules/gcds-components/dist/gcds/gcds.css';
```

--------

# Système de design - composants GC

## Installation

### Installer le paquet avec npm

``` js
npm install gcds-components gcds-components-angular
```

Insérez le code qui suit dans le fichier `app.module.ts` de votre application.

``` ts
import { GcdsComponentsModule } from 'gcds-components-angular';

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

Insérez le code qui suit dans le fichier `styles.scss` de votre application.

``` css
@import '../node_modules/gcds-components/dist/gcds/gcds.css';
```
