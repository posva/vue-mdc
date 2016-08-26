<template lang="jade">
label.mdl-switch.mdl-js-switch(v-bind:for.once='id' v-bind:class="{ 'is-disabled': disabled, 'is-checked': checked, 'is-upgraded': upgraded }")
  input.mdl-switch__input(v-bind:value='value' type='checkbox' v-bind:id.once='id' v-bind:checked='checked' v-on:change='fireChange' v-bind:disabled='disabled')
  span.mdl-switch__label
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
  mixins: [common],
  mounted () {
    componentHandler.upgradeElements(this.$el)
    this.upgraded = true
  }
}
</script>
