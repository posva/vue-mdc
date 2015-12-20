<style lang="stylus">
</style>

<template lang="jade">
.section
  title-link Installation
  .section__content
    p Vue MDL is only available through 
      code npm
      | . Install it:
      pre
        code npm install --save vue-mdl
    p If you use a module bundler like
      a(href='https://webpack.github.io/')  webpack
      |  or
      a(href='http://browserify.org/')  Browserify
      | , you can require it
      pre
        code.javascript.
          var vmdl = require('vue-mdl');
      | and use it. Otherwise you can include it in your html:
      pre
        code.html
          p='<script src="//rawgit.com/posva/vue-mdl/master/dist/vue-mdl.js"></script>'
      | Add 
      code .min
      |  to get the minified version:
      pre
        code.html
          p='<script src="//rawgit.com/posva/vue-mdl/master/dist/vue-mdl.min.js"></script>'

    p You'll also need to include 
      a(href='http://www.getmdl.io/started/index.html' target='_blank') Material Design Lite
      | . As it's not bundled with vue-mdl itself.
</template>

<script lang="coffee">
module.exports =
  data: ->
</script>
