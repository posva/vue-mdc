<template lang="jade">
a.mdl-button.mdl-js-button(v-bind:disabled='disabled' v-bind:class='cssClasses')
  slot
    i.material-icons(v-if='icon') {{icon}}
</template>

<script>
import button from './mixins/button'

export default {
  mixins: [button]
}
</script>
