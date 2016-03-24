<template lang="jade">
div
  h1 Select
  h3 vue
  mdl-checkbox(:checked.sync='visible') Visible
  p Changed {{changes}}
  mdl-select#select(v-if='visible', @change='changes++', :value.sync='country', :options='countriesArray')
</template>

<script>
import vmdl from '../../src/vue-mdl'

export default {
  data () {
    return {
      country: 'Russia',
      changes: 0,
      visible: true,
      countriesArray: ['Russia', 'Spain', 'France', 'China']
    }
  },
  components: vmdl.components,
  directives: vmdl.directives
}
</script>
