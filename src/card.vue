<template lang="jade">
.mdl-card.mdl-shadow--2dp
  slot(name='title' v-if='title')
    .mdl-card__title
      h2.mdl-card__title-text {{title}}
  slot(name='subtitle' v-if='subtitle')
    .mdl-card__subtitle-text {{subtitle}}
  slot(name='supporting-text' v-if='supportingText')
    .mdl-card__supporting-text {{supportingText}}
  slot(name='media' v-if='media')
    .mdl-card__media
      img(:src='media')
  // TODO this was an anchor
  slot(name='actions' v-if='actions')
    .mdl-card__actions.mdl-card--border
      mdl-button.mdl-js-ripple-effect(colored) Get Started
  // TODO some way of creating a menu or action
  slot(name='menu' v-if='menu')
    .mdl-card__menu
      mdl-button.mdl-js-ripple-effect(icon)
        i.material-icons share

</template>

<script lang="coffee">
propFill = require './mixins/prop-fill.coffee'

slots = [
  'title'
  'subtitle'
  'supportingText'
  'media'
  'actions'
  'menu'
  ]

module.exports =
  props:
    title:
      type: String
      default: true
    # TODO specify a real menu
    menu:
      default: true
    # TODO specify a real action
    actions:
      default: true
    media:
      default: true
      type: String
    subtitle:
      default: true
      type: String
    supportingText:
      default: true
      type: String
  compiled: ->
    slots.forEach (slot, pos) =>
      if @[slot] is true
        el = @$el.children[pos]
        @[slot] = '' if not el.attributes.getNamedItem 'slot'
    #el = @$el.children[pos]?.attributes.getNamedItem 'slot'
  components:
    mdlButton: require './button.vue'
</script>
