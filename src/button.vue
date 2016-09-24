<template>
  <button class="mdl-button mdl-js-button"
          :class="cssClasses"
          :disabled="disabled"
  >
    <slot>
      <i class="material-icons" v-if="icon" >{{ icon }}</i>
    </slot>
  </button>
</template>

<script>
import button from './mixins/button'

export default {
  mixins: [button]
}
</script>
