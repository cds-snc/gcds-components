[La version française suit.](#système-de-design---composants-gc)

# GC Design System Components – Angular

GC Design System Components – Angular provides the [GC Design System Components](https://github.com/cds-snc/gcds-components/tree/main/packages/web) within a Angular wrapper to ease integration of the components into Angular apps.

## Installation

### Install from npm

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


