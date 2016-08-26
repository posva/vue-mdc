<template lang="jade">
label.mdl-checkbox.mdl-js-checkbox(v-bind:for.once='id' v-bind:class="{ 'is-disabled': disabled, 'is-checked': checked, 'is-upgraded': upgraded }")
  input.mdl-checkbox__input(v-bind:value='value' type='checkbox' v-bind:id.once='id' v-bind:checked='checked' v-on:change='fireChange' v-bind:disabled='disabled')
  span.mdl-checkbox__label
    slot
</template>

<script>
/* global componentHandler*/
import common from '../mixins/toggle'
export default {
  data: function () {
    return {
      upgraded: false
    }
  },
  mounted () {
    componentHandler.upgradeElements(this.$el)
    this.upgraded = true
  },
  mixins: [common]
}
</script>
