<template lang="jade">
.mdl-progress.mdl-js-progress(v-bind:class='{ "mdl-progress__indeterminate": indeterminate }')
</template>

<script lang="coffee">
utils = require 'coffee!./utils.coffee'
module.exports =
  data: ->
    unwatch: []
  props:
    progress: Number
    buffer: Number
    indeterminate:
      type: Boolean
      default: false
  ready: ->
    componentHandler.upgradeElement @$el

    if @progress?
      @$el.MaterialProgress.setProgress @progress
      @unwatch.push @$watch 'progress', (val) ->
        @$el.MaterialProgress.setProgress val

    if @buffer?
      @$el.MaterialProgress.setBuffer @buffer
      @unwatch.push @$watch 'buffer', (val) ->
        @$el.MaterialProgress.setBuffer val
  beforeDestroy: ->
    @unwatch.forEach (unwatch) -> unwatch()
</script>
