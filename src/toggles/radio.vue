<template lang="jade">
label.mdl-radio.mdl-js-radio(v-bind:for.once='id' v-bind:class="{ 'is-disabled': disabled, 'is-checked': isChecked, 'is-upgraded': upgraded }")
  input.mdl-radio__button(v-bind:id.once='id' type='radio' v-bind:name.once='name' v-bind:value='radioValue' v-bind:checked="isChecked" v-on:change="fireChangedEvent" v-bind:disabled='disabled')
  span.mdl-radio__label
    slot
</template>

<script>
export default {
  data: function () {
    return {
      upgraded: false
    }
  },
  props: {
    id: String,
    name: String,
    radioValue: {
      required: true
    },
    value: {
      required: true
    },
    disabled: Boolean
  },
  computed: {
    isChecked: function () {
      return this.value === this.radioValue
    }
  },
  methods: {
    fireChangedEvent () {
      this.$emit('input', this.radioValue)
    }
  },
  mounted () {
    componentHandler.upgradeElements(this.$el)
    this.upgraded = true
  }
}
</script>
