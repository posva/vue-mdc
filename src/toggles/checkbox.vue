<template lang="jade">
label.mdl-checkbox.mdl-js-checkbox(v-bind:for.once='id' v-bind:class="{ 'is-disabled': disabled, 'is-checked': isChecked, 'is-upgraded': upgraded }")
  input.mdl-checkbox__input(v-bind:value='checkValue' type="checkbox" v-bind:id.once='id' v-model='checked' v-bind:disabled='disabled')
  span.mdl-checkbox__label
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
  mounted () {
    componentHandler.upgradeElements(this.$el)
    this.upgraded = true
  },
  mixins: [common]
}
</script>
