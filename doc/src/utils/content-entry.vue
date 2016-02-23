<template lang="jade">
component(:is='makeComponent(menu.name)')
component(v-for='sub in menu.items', :is='makeComponent(sub)')
</template>

<script>
import _ from 'lodash'

export default {
  props: {
    menu: {
      required: true
    }
  },
  methods: {
    makeComponent (text) {
      return _.kebabCase(text)
    }
  }
}
</script>
