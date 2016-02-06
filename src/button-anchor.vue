<template lang="jade">
a.mdl-button.mdl-js-button(v-bind:href='href' v-bind:disabled='disabled' v-bind:class='cssClasses')
  slot
    i.material-icon(v-if='icon') {{icon}}
</template>

<script lang="coffee">
button = require './mixins/button.coffee'

module.exports =
  props:
    href:
      type: String
      required: true
  mixins: [button]
</script>
