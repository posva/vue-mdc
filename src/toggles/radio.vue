<template lang="jade">
label.mdl-radio.mdl-js-radio(v-bind:for.once='id' v-bind:class="{ 'is-disabled': disabled, 'is-checked': checked }")
  input.mdl-radio__button(v-bind:id.once='id' type='radio' v-bind:name.once='name' v-bind:value='value' v-bind:checked='checked' v-on:change='fireChangedEvent' v-bind:disabled='disabled')
  span.mdl-radio__label
    slot
</template>

<script>
import propFill from '../mixins/prop-fill'

export default {
  props: {
    id: String,
    name: String,
    value: {
      required: true
    },
    checked: {
      required: true
    },
    disabled: Boolean
  },
  methods: {
    fireChangedEvent (event) {
      this.$emit('change', this.value)
    }
  },
  mounted () {
    componentHandler.upgradeElements(this.$el)
  }
}
</script>
