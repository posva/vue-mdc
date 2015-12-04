<style lang="stylus">
</style>

<template lang="jade">
.section
  title-link Usage
  .section__content
    pre
      code.javascript.
        var vmdl = require('vue-mdl');
        var Vue = require('vue');

        // Globally register the checkbox
        vmdl.register(Vue, 'mdl-checkbox');
        // Shorthand
        vmdl.register(Vue, 'checkbox');
        // Globally register all components and directives
        vmdl.registerAll(Vue);

        // Access any component or directive
        var checkbox = vmdl.components['mdl-checkbox'];
        var badge = vmdl.directives['mdl-badge'];
        var app = new Vue({
          components: {
            mdlCheckbox: checkbox
          },
          directives: {
            mdlBadge: badge
          }
        });
</template>

<script lang="coffee">
module.exports =
  data: ->
</script>
