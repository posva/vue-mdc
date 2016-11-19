<template>
<div>
  <h1>Slider</h1>
  <mdl-slider id="slider" v-model="value" :min="min" :max="max"></mdl-slider>
  <mdl-slider id="step" ref="step" v-model="value" :min="min" :max="max" :step="step"></mdl-slider>
  <mdl-slider id="default-values" v-model="value" :max="max"></mdl-slider>
  <mdl-slider id="disable" v-model="value" :min="min" :max="max" :disabled="disabled" :step="step"></mdl-slider>
  <mdl-slider id='no-args-disabled' v-model='value' :min='min' :max='max' disabled></mdl-slider>
  <br/>
  <br/>
  <label>
    Min:
    <input v-model="min" type="number"/>
  </label>
  <br/>
  <label>
    Max:
    <input v-model="max" type="number"/>
  </label>
  <br/>
  <label>
    Step:
    <input v-model="step" type="number"/>
  </label>
  <br/>
  <label>
    value:
    <input v-model="value" type="number"/>
  </label>
  <br/>
  <label>
    <input v-model="disabled" type="checkbox"/>
    Disable
  </label>
</div>
</template>

<script lang="babel">
export default {
  data () {
    return {
      min: 0,
      max: 100,
      value: 25,
      step: 25,
      disabled: false
    }
  }
}
</script>
