propFill = require './prop-fill.coffee'

module.exports =
  computed:
    cssClasses: ->
      'mdl-button--icon': @icon
      'mdl-button--accent': @accent
      'mdl-button--primary': @primary
      'mdl-button--mini-fab': @miniFab
      'mdl-button--fab': @fab or @miniFab
      'mdl-button--raised': @raised
      'mdl-button--colored': @colored
  props:
    disabled:
      fill: true
    icon:
      required: false
    accent:
      fill: true
    primary:
      fill: true
    miniFab:
      fill: true
    fab:
      fill: true
    raised:
      fill: true
    colored:
      fill: true
  mixins: [propFill]
  ready: ->
    componentHandler.upgradeElement @$el
