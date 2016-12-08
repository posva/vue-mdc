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
    model () { return this.valueNumber },
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
    valueNumber () {
      return parseInt(this.value)
    },
    stepNumber () {
      return parseInt(this.step)
    },
    minNumber () {
      return parseInt(this.min)
    },
    maxNumber () {
      return parseInt(this.max)
    },
    relativeValue () {
      const val = Math.round((this.valueNumber - this.minNumber) / this.stepNumber) * this.stepNumber
      return val / (this.maxNumber - this.minNumber)
    }
  },
  props: {
    value: {
      type: [String, Number],
      required: true
    },
    step: {
      type: [String, Number],
      default: 1
    },
    min: {
      type: [String, Number],
      default: 0
    },
    max: {
      type: [String, Number],
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
