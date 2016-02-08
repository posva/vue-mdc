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
      mdl-anchor-button.mdl-js-ripple-effect(colored v-if='isActionsURL' v-bind:href='actions'
        v-bind:target='actionsTarget') {{actionsText}}
      mdl-button.mdl-js-ripple-effect(colored v-else) {{actionsText}}
  // TODO some way of creating a menu or action
  slot(name='menu' v-if='menu')
    .mdl-card__menu
      mdl-button.mdl-js-ripple-effect(icon @click='triggerMenuEvent')
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
  computed:
    isActionsURL: ->
      if typeof @actions is 'string'
        @actions.match(/^(https?:)?\/\//)?
      else
        false
  props:
    title:
      type: String
      default: true
    menu:
      default: true
    actions:
      type: String
      default: true
    actionsTarget:
      default: '_self'
      type: String
    actionsText: String
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
  methods:
    triggerMenuEvent: -> @$dispatch @menu
    triggerActionsEvent: -> @$dispatch @actions
  components:
    mdlButton: require './button.vue'
    mdlAnchorButton: require './anchor-button.vue'
</script>
