<p align="center">
  <img src="logo.png"/>
  <br/>
  <a href="https://circleci.com/gh/posva/vue-mdl">
    <img alt="Circle CI" src="https://img.shields.io/circleci/project/posva/vue-mdl/develop.svg" />
  </a>
  <a href="https://codecov.io/gh/posva/vue-mdl">
    <img alt="Codecov Coverage" src="https://img.shields.io/codecov/c/github/posva/vue-mdl/develop.svg?maxAge=2592000" />
  </a>
  <a href="https://www.npmjs.com/package/vue-mdl"><img src="https://img.shields.io/npm/dm/vue-mdl.svg" alt="Downloads per month"></a>
  <a href="http://waffle.io/posva/vue-mdl"><img src="https://badge.waffle.io/posva/vue-mdl.svg?label=ready&title=Ready" alt="Stories in Ready"></a>
  <br>
  <a href="https://david-dm.org/posva/vue-mdl#info=devDependencies" title="devDependency status"><img src="https://david-dm.org/posva/vue-mdl/dev-status.svg"/></a>
  <a href="https://david-dm.org/posva/vue-mdl#info=peerDependencies" title="peerDependency status"><img src="https://david-dm.org/posva/vue-mdl/peer-status.svg"/></a>
  <br>
  <a href="https://www.npmjs.com/package/vue-mdl"><img src="https://img.shields.io/npm/v/vue-mdl.svg" alt="Latest npm release"></a>
  <a href="https://gitter.im/posva/vue-mdl?utm_source=badge&utm_medium=badge&utm_campaign=pr-badgel"><img src="https://badges.gitter.im/posva/vue-mdl.svg" alt="Gitter"></a>
  <a href="https://github.com/posva/vue-mdl/blob/develop/LICENSE"><img src="https://img.shields.io/github/license/mashape/apistatus.svg" alt="MIT License"></a>
</p>

#Intro

Reusable Vue components using [Material Design Lite](https://github.com/google/material-design-lite)

__Warning__: This project has not reached version 1 yet and there may be
breaking changes until then. Contributions are welcome!

‼️ vue-mdl relies on the **last versions of vue and material design lite** but **does not include them**. Make sure to have your modules up to date 😉 and installed (**[Specially for MDL](https://getmdl.io/started/index.html#download)**). Remember to remove the `defer` attribute in case you copy pasted the lines from MDL Doc 😉. See [#20](https://github.com/posva/vue-mdl/issues/20).

#Usage

```js
import VueMdl from 'vue-mdl'
import Vue from 'vue'

Vue.use(VueMdl)

new Vue({
  el: '#app',
  data: {
    checked: false
  }
})
```

```html
<mdl-checkbox :checked.sync='checked'>Checkbox</mdl-checkbox>
```

For more detailed usage about non es6 environments, check the
[documentation](http://posva.net/vue-mdl/#usage).

#Documentation

The `test/components` directory has a lot of examples used for tests.

The documentation is available [here](http://posva.net/vue-mdl)
Pull Requests and issues are welcome.

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

#Development

Run `npm run dev` and visit [http://localhost:8080](http://localhost:8080).

Create tests pages inside `test/components`. Add unit tests to `test/unit/specs`
and modify `test/unit/main.js` to load the test.

You can also serve the tests pages without running the unit tests by running
`npm run dev:integration`. This makes easy to actually see and manually test
components.

#Contributing

When contributing, make sure all tests pass.
If you wrote a new feature or fixed a bug make sure to add the corresponding test.

#Releasing

Releasing is done using the git flow model

- Start a new release `git flow release start x.x.x`
- Run `npm run build`
- Bump package.json version
- Commit the version. No more info needed
- Run `git flow release finish`
- Write the changelog in the tag notes
- Push master and develop branches `git push --all --follow-tags`
- Publish it to npm: `npm publish`

#License
[MIT](http://opensource.org/licenses/MIT)

Copyright (c) 2016 Eduardo San Martin Morote
