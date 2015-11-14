<p align="center">
  <img src="logo.png"/>
  <br/>
  <a href="https://circleci.com/gh/posva/vue-mdl">
    <img alt="Circle CI" src="https://circleci.com/gh/posva/vue-mdl.svg?style=svg" />
  </a>
  <a href="https://www.bithound.io/github/posva/vue-mdl"><img src="https://www.bithound.io/github/posva/vue-mdl/badges/score.svg" alt="bitHound Score"></a>
  <br>
  <a href="https://david-dm.org/posva/vue-mdl#info=devDependencies" title="devDependency status"><img src="https://david-dm.org/posva/vue-mdl/dev-status.svg"/></a>
  <a href="https://david-dm.org/posva/vue-mdl" title="Dependency status"><img src="https://david-dm.org/posva/vue-mdl.svg"/></a>
</p>

#Intro

Reusable Vue components using [Material Design Lite](https://github.com/google/material-design-lite)

__Warning__: This project is still under development. Contributions are welcome

vue-mdl tries to use the latest versions of material design lite and vue

#Documentation

There is yet no documentation for this project, you can look in the test
directory for some examples

#Build

This will build a distributable version in the `dist` directory.
```bash
npm run build
```

#Test

You can run all the tests
```bash
npm test
```

##Unit tests
```bash
npm run test:unit
```

##End to End tests
```bash
npm run test:e2e
```

It is possible to test one single file by running the dev server in one terminal
and `nightwatch` in another:
```bash
npm run dev-test
```

```bash
PORT=8088 ./node_modules/.bin/nightwatch -c build/nightwatch.json --test test/e2e/checkbox.js
```

#Development

Prefer unit tests over end to end tests.

Run `npm run dev-unit` to run a `webpack-dev-server` that will watch the project
for modifications and create the bundles. You can then visit
[http://localhost:8088/webpack-dev-server/test/unit](http://localhost:8088/webpack-dev-server/test/unit).

Create tests pages inside `test/components`. Add unit tests to `test/unit/specs`
and modify `test/unit/main.coffee` to load the test.

You can also serve the tests pages without running the unit tests by running
`npm run dev-test`.
This will serve the tests at `localhost:8088/test/`.
You must add `#<component_name>` to the address. For instance, if you want to
load the checkbox example you must go to `localhost:8088/test/#checkbox`

#License
[MIT](http://opensource.org/licenses/MIT)

Copyright (c) 2015 Eduardo San Martin Morote
