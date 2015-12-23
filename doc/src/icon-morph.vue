<style lang="stylus">
object.icon
  display: block
  box-sizing: border-box
  width: 100%
  height: 50px
  background: #FFF
  margin: auto
  padding: 1em
  &:not([fill=none])
    fill: red
</style>

<template lang="jade">
object.icon(data='iconset.svg' type='image/svg+xml')
</template>

<script lang="coffee">
icons = require './icons.coffee'

module.exports =
  data: ->
  props:
    icon:
      required: true
    rotation:
      required: false
    duration:
      required: false
    size:
      default: 24
  ready: ->
    @viewBox = '0 0 24 24'
    @$el.onload = =>
      @unwatch = []
      @morph = new SVGMorpheus @$el,
        duration: @duration
        rotation: @rotation
      @unwatch.push @$watch 'icon', (icon) -> @morph.to icon
  beforeDestroy: ->
    @unwatch.forEach (unwatch) -> unwatch()
</script>
