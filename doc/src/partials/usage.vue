<style lang="stylus">
</style>

<template lang="jade">
.section
  title-link Usage
  .section__content
    p If you use a module bundler like
      a(href='https://webpack.github.io/')  webpack
      |  or
      a(href='http://browserify.org/')  Browserify
      |  with babel (es6 support), you can import it and use it as a plugin:

    pre
      code.javascript.
        import VueMdl from 'vue-mdl'

        Vue.use(VueMdl)

    p If you don't use es6, you'll have to use it this way:

    pre
      code.javascript.
        // es5 webpack/browserify
        var VueMdl = require('vue-mdl')

        Vue.use(VueMdl.default)

    p Using it as a plugin will include all components and directives. Vue MDL also exports
      | a components and a directives properties containing all components and directives:

    pre
      code.javascript.
        // es6
        import { components, directives } from 'vue-mdl'

        new Vue({
          components,
          directives
        })

        // es5
        var VueMdl = require('vue-mdl')

        new Vue({
          components: VueMdl.components,
          directives: VueMdl.directives
        })

    p You can also import individually any component or directive

    pre
      code.javascript.
        // es6
        import { MdlCheckbox, MdlBadge } from 'vue-mdl'

        new Vue({
          components: {
            MdlCheckbox
          },
          directives: {
            MdlBadge
          }
        })

        // es5
        var VueMdl = require('vue-mdl')

        new Vue({
          components: {
            MdlCheckbox: VueMdl.MdlCheckbox
          },
          directives: {
            MdlBadge: VueMdl.MdlBadge
          }
        })
</template>

<script>
export default {}
</script>
