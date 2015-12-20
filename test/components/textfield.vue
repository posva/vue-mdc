<template lang="jade">
div
  h1 Textfield
  h3 MDL
  .mdl(v-mdl)
    .mdl-textfield.mdl-js-textfield
      input#sample1.mdl-textfield__input(type='text')
      label.mdl-textfield__label(for='sample1') Text...
    .mdl-textfield.mdl-js-textfield
      input#sample2.mdl-textfield__input(type='text' pattern='-?[0-9]*(\.[0-9]+)?')
      label.mdl-textfield__label(for='sample2') Number...
      span.mdl-textfield__error Input is not a number!
    .mdl-textfield.mdl-js-textfield.mdl-textfield--floating-label
      input#sample3.mdl-textfield__input(type='text')
      label.mdl-textfield__label(for='sample3') I can fly
    .mdl-textfield.mdl-js-textfield.mdl-textfield--floating-label
      textarea#sample4.mdl-textfield__input(type='text' rows='5')
      label.mdl-textfield__label(for='sample4') Textarea
  br
  .mdl-textfield.mdl-js-textfield.mdl-textfield--expandable.mdl-textfield--floating-label
    label.mdl-button.mdl-js-button.mdl-button--icon(for='sample6')
      i.material-icons search
    .mdl-textfield__expandable-holder
      input#sample6.mdl-textfield__input(type='text')
      label.mdl-textfield__label(for='sample6') Expandable Input
  h3 vue
  mdl-textfield#fly(label='I fly' floating-label)
  mdl-textfield#fly2(floating-label='I fly')
  mdl-textfield#fly-label-dyn(:floating-label='dynFloat')
  mdl-textfield.added-class#classic(label='Classic', :type='type', :value.sync='text')
  mdl-textfield#fly-dyn(label='Dynamic fly' v-bind:floating-label='float' v-bind:label='label')
  mdl-textfield#textarea(label='textarea', textarea, :rows='rows')
  <mdl-textfield id='html-text' label='textarea' textarea></mdl-textfield>
  mdl-textfield#number(label='Number', :pattern='pattern', floating-label, :error='error')
  mdl-textfield#custom(:pattern='pattern', floating-label)
    input#custom(slot='input', v-model='rows', type='number')
    label.mdl-textfield__label(slot='label' for='custom')
      i.material-icons vpn_key
    label.mdl-textfield__error(slot='error')
      i.material-icons mood_bad
      span That's not a number
  mdl-textfield#custom-area(floating-label textarea)
    textarea#custom-area(slot='textarea' type='text')
  mdl-textfield#expandable(floating-label v-bind:value.sync='text' expandable='search' label='Search')
  br
  p {{text}}
  mdl-checkbox(:checked.sync='float') Float
</template>

<script lang="coffee">
vmdl = require '../../src/vue-mdl.js'

module.exports =
  data: ->
    rows: 2
    float: false
    type: 'text'
    dynFloat: 'Dynamic floating label'
    text: 'Hello textfield'
    pattern: '[0-9]*'
    error: 'Nope'
  computed:
    label: ->
      'Can I fly? ' + if @float then 'Yes' else 'No'
  components: vmdl.components
  directives: vmdl.directives
</script>
