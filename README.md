**If you're looking for vue-mdl, check the [mdl branch](https://github.com/posva/vue-mdc/tree/mdl). To learn about what's happening, check [#139](https://github.com/posva/vue-mdc/issues/139)**

---

<p align="center">
  <img width="320px" src="https://posva.net/vue-mdl-docs/logo.svg"/>
  <br/>
  <a href="https://www.npmjs.com/package/vue-mdc">
    <img alt="last version" src="https://img.shields.io/npm/v/vue-mdc.svg" />
  </a>
  <a href="https://circleci.com/gh/posva/vue-mdc">
    <img alt="Circle CI" src="https://img.shields.io/circleci/project/posva/vue-mdc/develop.svg" />
  </a>
  <a href="https://codecov.io/gh/posva/vue-mdc">
    <img alt="Codecov Coverage" src="https://img.shields.io/codecov/c/github/posva/vue-mdc/master.svg?maxAge=2592000&nocache=true" />
  </a>
  <a href="https://discordapp.com/invite/dAF4F28">
    <img src="https://img.shields.io/badge/discord-vue%40SpeakJS-738bd7.svg?style=flat" alt="Discord">
  </a>
  <br>
  <a href="https://vuejs.org" title="Compatible with Vue 2">
    <img src="https://img.shields.io/badge/vue-2.x-brightgreen.svg"/>
  </a>
  <a href="https://david-dm.org/posva/vue-mdc?type=dev" title="devDependency status">
    <img src="https://david-dm.org/posva/vue-mdc/dev-status.svg"/>
  </a>
  <a href="https://david-dm.org/posva/vue-mdc" title="Dependency status">
    <img src="https://david-dm.org/posva/vue-mdc/status.svg"/>
  </a>
</p>

---

# Vue Material Components web

> Material Components Web for Vue.js

This is the adaptation of [Material Components web](https://github.com/material-components/material-components-web) for Vue.js. Keeping them fast, easy to use and, SSR ready.

The docs will be the demo, until then you can [check the test folder](test/specs) and the [Material Components web demo](http://material-components-web.appspot.com/)

## Installation

```bash
$ npm install --save vue-mdc
# or
$ yarn add vue-mdc
```

## Usage

### Bundler (Webpack, Rollup)

```js
import Vue from 'vue'
import VueMdc from 'vue-mdc'
// You need a specific loader for CSS files like https://github.com/webpack/css-loader
import 'vue-mdc/dist/vue-mdc.css'

Vue.use(VueMdc)
```

### Browser

```html
<!-- Include after Vue -->
<!-- Local files -->
<link rel="stylesheet" href="vue-mdc/dist/vue-mdc.css"></link>
<script src="vue-mdc/dist/vue-mdc.js"></script>

<!-- From CDN -->
<link rel="stylesheet" href="https://unpkg.com/vue-mdc/dist/vue-mdc.css"></link>
<script src="https://unpkg.com/vue-mdc"></script>
```

### Docs

WIP 😁

## Development

### Launch visual tests

```bash
npm run dev
```

### Launch Karma with coverage

```bash
npm run dev:coverage
```

### Build

Bundle the js and css of to the `dist` folder:

```bash
npm run build
```


## Publishing

The `prepublish` hook will ensure dist files are created before publishing. This
way you don't need to commit them in your repository.

```bash
# Bump the version first
# It'll also commit it and create a tag
npm version
# Push the bumped package and tags
git push --follow-tags
# Ship it 🚀
npm publish
```

## License

[MIT](http://opensource.org/licenses/MIT)
