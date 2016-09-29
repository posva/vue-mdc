<template>
  <div class="mdl-slider__container">
    <input ref="input"
           type="range"
           class="mdl-slider mdl-js-slider is-upgraded"
           :min="min"
           :max="max"
           :step="step"
           v-model="model"
           @input="onInput"
           data-upgraded=",MaterialSlider"
           :disabled="disabled">
    <div class="mdl-slider__background-flex">
      <div class="mdl-slider__background-lower"
           :style="lowerBackgroundStyle">
      </div>
      <div class="mdl-slider__background-upper"
           :style="upperBackgroundStyle">
      </div>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    model () { return this.value },
    lowerBackgroundStyle () {
      return {
        flex: `${this.relativeValue} 1 0%`
      }
    },
    upperBackgroundStyle () {
      return {
        flex: `${1 - this.relativeValue} 1 0%`
      }
    },
    relativeValue () {
      const val = Math.round((this.value - this.min) / this.step) * this.step
      return val / (this.max - this.min)
    }
  },
  props: {
    value: {
      type: Number,
      required: true
    },
    step: {
      type: Number,
      default: 1
    },
    min: {
      type: Number,
      default: 0
    },
    max: {
      type: Number,
      required: true
    },
    disabled: {
      required: false
    }
  },
  methods: {
    onInput (event) {
      this.$emit('input', Number(event.target.value))
    }
  },
  mounted () {
    return
  }
}
</script>
