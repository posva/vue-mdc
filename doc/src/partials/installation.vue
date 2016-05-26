<style lang="stylus">
</style>

<template lang="jade">
.section
  title-link Installation
  .section__content
    p Vue MDL is a set of reusable 
      a(target='_blank' href='http://www.getmdl.io/') Material Design Lite
      | (mdl) components. Its purpose is to make it easy for everyone to use mdl by doing all the data binding and giving you the control over classes with props.
      | If you find any bug feel free to open an issue, or even better a Pull Request
      | in the github.

    p Vue MDL is only available through 
      code npm
      | . Install it:
      pre
        code npm install --save vue-mdl

    p You can also include it in your html:
    pre
      code.html
        p='<script src="//rawgit.com/posva/vue-mdl/master/dist/vue-mdl.js"></script>'
    p Add 
      code .min
      |  to get the minified version:

    pre
      code.html
        p='<script src="//rawgit.com/posva/vue-mdl/master/dist/vue-mdl.min.js"></script>'

    p Material Design Lite is not included, please follow the instructions at 
      a(href='http://www.getmdl.io/started/index.html' target='_blank') Material Design Lite Guide
      |  to include it.
</template>

<script>
export default {}
</script>
