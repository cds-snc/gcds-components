[La version française suit.](#système-de-design---composants-gc)

# GC Design System Components

GC Design System Components is a monorepo managing the web components of the GC Design System. Web components are encapsulated, reusable custom elements you can use within your web sites/apps. Along with the `gcds-components` packages, there are additional packages for React and Angular to ease integration into those popular frameworks.
<br/>
<br/>

## Tools

We are using [Stencil.js](https://stenciljs.com/) to build our web components.
<br/>
<br/>

## Documentation

You can find the full documentation for GC Design System Components on [https://cds-design-snc.netlify.app/en/]().
<br/>
<br/>

## Local installation

- Clone the repo git clone `https://github.com/cds-snc/gcds-components`.
- Run `npm install` to install all Node.js dependencies.
- Run `npm install –workspaces` to install all Node.js dependencies for the web, React and Angular packages.
- Change into the `/packages/web` directory.
- Run `npm run build` to compile web components.

To test the angular/react packages locally make sure to link the packages to the web packages using `npm link`
<br/>
<br/>

## Compiling all packages

In the root directory, run `npm run build`. All three packages will be compiled.
<br/>
<br/>

## Packages

| Package                   | Description                                                                         | Docs             |
| ------------------------- | ----------------------------------------------------------------------------------- | ---------------- |
| [`@cdssnc/gcds-components`](packages/web/)           | GC Design System Components – Web | [Docs](packages/web/README.md) |
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
 
