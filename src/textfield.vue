<template lang="jade">
.mdl-textfield.mdl-js-textfield(v-bind:class='{"mdl-textfield--floating-label": floatingLabel, "mdl-textfield--expandable": expandable}')
  slot(v-if='expandable' name='expandable-button')
    label.mdl-button.mdl-js-button.mdl-button--icon(v-bind:for.once='id')
      i.material-icons {{expandable}}
  div(v-bind:class='{"mdl-textfield__expandable-holder": expandable}')
    slot(v-if='textarea' name='textarea')
      textarea.mdl-textfield__input(type='text' v-bind:id.once='id' v-bind:rows='rows')
    slot(v-else name='input')
      input.mdl-textfield__input(v-bind:type='type' v-model='value' v-bind:id.once='id' v-bind:pattern='pattern')
    slot(name='label')
      label.mdl-textfield__label(v-bind:for.once='id') {{label}}
    slot(name='error')
      label.mdl-textfield__error(v-if='error') {{error}}
</template>

<script lang="coffee">
propFill = require './mixins/prop-fill.coffee'

module.exports =
  props:
    expandable: String
    type:
      type: String
      default: 'text'
    rows:
      required: false
    id: String
    value:
      required: false
    label: String
    pattern: String
    error: String
    textarea:
      fill: true
    floatingLabel:
      required: false
  ready: ->
    componentHandler.upgradeElement @$el
    if @floatingLabel and not @label?
      @label = @floatingLabel
      @$watch 'floatingLabel', (val) => @label = val
  mixins: [propFill]
</script>
