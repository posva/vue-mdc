<template lang="jade">
.mdl-progress.mdl-js-progress(v-bind:class='{ "mdl-progress__indeterminate": indeterminate }')
</template>

<script lang="coffee">
propFill = require './mixins/prop-fill.coffee'

module.exports =
  data: ->
  props:
    progress:
      required: false
    buffer:
      required: false
    indeterminate:
      fill: true
  ready: ->
    componentHandler.upgradeElement @$el, 'MaterialProgress'

    if @progress?
      @$el.MaterialProgress.setProgress @progress
      @$watch 'progress', (val) ->
        @$el.MaterialProgress.setProgress val

    if @buffer?
      @$el.MaterialProgress.setBuffer @buffer
      @$watch 'buffer', (val) ->
        @$el.MaterialProgress.setBuffer val
  mixins: [propFill]
</script>
