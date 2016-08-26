<template lang="jade">
label.mdl-icon-toggle.mdl-js-icon-toggle(v-bind:for.once='id' class='' v-bind:class="{ 'is-disabled': disabled, 'is-checked': checked, 'is-upgraded': upgraded }")
  input.mdl-icon-toggle__input(v-bind:value='value' type='checkbox' v-bind:id.once='id' v-bind:checked='checked' v-on:change='fireChange' v-bind:disabled='disabled')
  i.mdl-icon-toggle__label.material-icons {{icon}}
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
  props: {
    icon: {
      required: true,
      type: String
    }
  },
  mixins: [common],
  mounted () {
    componentHandler.upgradeElements(this.$el)
    this.upgraded = true
  }
}
</script>
