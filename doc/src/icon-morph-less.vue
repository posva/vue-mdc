<template lang="jade">
svg.icon-morph(xmlns='http://www.w3.org/2000/svg', viewBox='0 0 24 24', :width='size', :height='size')
</template>

<script lang="coffee">
icons = require './icons.coffee'

gElement = (name, icon) ->
  g = document.createElement 'G'
  g.id = name
  g.style.display = 'none'
  g.innerHTML = icon
  g

module.exports =
  props:
    icons:
      coerce: (val) ->
        if typeof val is 'string' and val is ''
          Object.keys(icons).join ' '
        else if val instanceof Array
          val.join ' '
        else
          val
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
  ready: ->
    @unwatch = []
    if @icons?
      for icon in @icons.split ' '
        @$el.appendChild gElement icon, icons[icon]
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
