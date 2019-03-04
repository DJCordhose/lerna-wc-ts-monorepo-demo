# lerna-wc-ts-monorepo-demo

Playground Monorepo using lerna, web components, lit element, typescript

## Dev Workflow

Run `yarn tsc:watch` in one terminal and `yarn dev` in another. One builds the app and listens to changes
and the other serves the files as they are requested by the browser, rewriting imports.

## Tools

### Polyserve

Serving ES6 modules with imports fixed to find `node_modules`

https://github.com/Polymer/tools/tree/master/packages/polyserve

### Parcel

Zero configuration production build

https://parceljs.org/

Parcel can simply accept a HTML file as entry point

https://medium.com/@sgoldber61/bundler-showdown-webpack-rollup-parcel-8c0a7a3c070c
https://medium.com/js-imaginea/comparing-bundlers-webpack-rollup-parcel-f8f5dc609cfd