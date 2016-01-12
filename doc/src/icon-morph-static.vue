<style lang="stylus">
svg.icon-morph
  transition: .3s fill ease
</style>

<template lang="jade">
svg.icon-morph(xmlns='http://www.w3.org/2000/svg', viewBox='0 0 24 24', :width='size', :height='size')
</template>

<script lang="coffee">
icons = require './icons.coffee'

module.exports =
  data: ->
    shapes: icons
  props:
    icon:
      required: true
    rotation:
      default: 'clockwise'
    duration:
      default: 500
    size:
      default: 24
  beforeCompile: ->
    if @icon not of icons
      @icon = 'help'
    for name, icon of icons
      g = document.createElement 'G'
      g.id = name
      g.style.display = 'none'
      g.innerHTML = icon
      g.setAttribute 'v-pre', ''
      @$el.appendChild g
  ready: ->
    @unwatch = []
    @morph = new SVGMorpheus @$el,
      duration: @duration
      rotation: @rotation
    @morph.to @icon
    @unwatch.push @$watch 'icon', (icon) ->
      if icon of icons
        @morph.to icon
  beforeDestroy: ->
    @unwatch.forEach (unwatch) -> unwatch()
</script>
