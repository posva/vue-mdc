<template lang="jade">
component(:is='makeComponent(menu.name)')
component(v-for='sub in menu.items', :is='makeComponent(sub)')
</template>

<script lang="coffee">
_ = require 'lodash'

module.exports =
  props:
    menu:
      required: true
  methods:
    makeComponent: (text) -> _.kebabCase text
</script>
