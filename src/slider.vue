<template>
  <div class="mdl-slider__container">
    <input ref="input"
           type="range"
           class="mdl-slider mdl-js-slider is-upgraded"
           :min="min"
           :max="max"
           :step="step"
           v-model="valueNumber"
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
      return Number(this.value)
    },
    stepNumber () {
      return Number(this.step)
    },
    minNumber () {
      return Number(this.min)
    },
    maxNumber () {
      return Number(this.max)
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
    onInput ({ target: { value } }) {
      this.$emit('input',
                 typeof this.value === 'string' ? value : Number(value)
      )
    }
  }
}
</script>
