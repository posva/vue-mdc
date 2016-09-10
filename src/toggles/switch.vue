<template lang="jade">
label.mdl-switch.mdl-js-switch(v-bind:for.once='id' v-bind:class="{ 'is-disabled': disabled, 'is-checked': isChecked, 'is-upgraded': upgraded }")
  input.mdl-switch__input(v-bind:value='selectedValue' type='checkbox' v-bind:id.once='id' v-model:checked='checked' v-bind:disabled='disabled')
  span.mdl-switch__label
    slot
</template>

<script>
import common from '../mixins/toggle'

export default {
  data: function () {
    return {
      checked: null,
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
