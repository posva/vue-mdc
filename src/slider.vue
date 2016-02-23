<template lang="jade">
input.mdl-slider.mdl-js-slider(
  type='range'
  v-model='value'
  v-bind:min='min'
  v-bind:max='max'
  v-bind:step='step'
  v-bind:disabled='disabled'
  )
</template>

<script>
/* global componentHandler*/
import propFill from './mixins/prop-fill'

export default {
  props: {
    value: {
      required: true,
      twoWay: true
    },
    step: {
      required: false
    },
    min: {
      required: true
    },
    max: {
      required: true
    },
    disabled: {
      fill: true
    }
  },
  ready () {
    componentHandler.upgradeElement(this.$el, 'MaterialSlider')

    this.$el.MaterialSlider.change(this.value)
    this.$watch('value', val => this.$el.MaterialSlider.change(val))

    // The original value is not changed, only design is changed
    this.$watch('min', val => {
      if (val > this.value) {
        this.$el.MaterialSlider.change(val)
      }
    })

    this.$watch('max', val => {
      if (val < this.value) {
        this.$el.MaterialSlider.change(val)
      }
    })

    this.$watch('step', val => this.$el.MaterialSlider.change(val * Math.round(this.value / val)))
  },
  mixins: [propFill]
}
</script>
