# lerna-wc-ts-monorepo-demo

Playground Monorepo using lerna, web components, lit element, typescript

## Dev Workflow



Run `yarn start` which starts two tasks. One builds the app and listens to changes
and the other serves the files as they are requested by the browser, rewriting imports.

Then open the demo app under

`/demo/index.html`

## Tools

### Polyserve

Serving ES6 modules with imports fixed to find `node_modules`

https://github.com/Polymer/tools/tree/master/packages/polyserve

### Parcel

Zero configuration production build

https://parceljs.org/

Parcel can simply accept a HTML file as entry point

* https://medium.com/@sgoldber61/bundler-showdown-webpack-rollup-parcel-8c0a7a3c070c
* https://medium.com/js-imaginea/comparing-bundlers-webpack-rollup-parcel-f8f5dc609cfd

### Linting

* https://eslint.org/
* https://github.com/typescript-eslint/typescript-eslint
* https://github.com/43081j/eslint-plugin-wc
* https://github.com/43081j/eslint-plugin-lit