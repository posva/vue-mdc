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

<script lang="coffee">
propFill = require './mixins/prop-fill.coffee'

module.exports =
  props:
    value:
      required: true
      twoWay: true
    step:
      required: false
    min:
      required: true
    max:
      required: true
    disabled:
      fill: true
  ready: ->
    componentHandler.upgradeElement @$el, 'MaterialSlider'

    if @value?
      @$el.MaterialSlider.change @value
      @$watch 'value', (val) ->
        @$el.MaterialSlider.change val

    # The original value is not changed, only design is changed
    if @min?
      @$watch 'min', (val) ->
        if val > @value
          @$el.MaterialSlider.change val

    if @max?
      @$watch 'max', (val) ->
        if val < @value
          @$el.MaterialSlider.change val

    if @step?
      @$watch 'step', (val) ->
        @$el.MaterialSlider.change val * Math.round(@value / val)

  mixins: [propFill]
</script>
