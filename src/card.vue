<template lang="jade">
.mdl-card.mdl-shadow--2dp
  slot(name='title' v-if='title')
    .mdl-card__title
      h2.mdl-card__title-text {{title}}
  slot(name='subtitle' v-if='subtitle')
    .mdl-card__subtitle-text {{subtitle}}
  slot(name='supporting-text' v-if='supportingText')
    .mdl-card__supporting-text {{supportingText}}
  .mdl-card__media(v-if='media')
    slot(name='media')
  .mdl-card__actions.mdl-card--border
    a.mdl-button.mdl-button--colored.mdl-js-button.mdl-js-ripple-effect
      | Get Started
  .mdl-card__menu
    button.mdl-button.mdl-button--icon.mdl-js-button.mdl-js-ripple-effect
      i.material-icons share

</template>

<script lang="coffee">
propFill = require './mixins/prop-fill.coffee'

slots = [
  'title'
  'subtitle'
  'supportingText'
  'actions'
  'menu'
  ]

module.exports =
  data: ->
    media: false
  props:
    title:
      type: String
      default: true
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
</script>
