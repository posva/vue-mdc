<template lang="jade">
div
  h1 Textfield
  h3 MDL
  .mdl(mdl)
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
  mdl-textfield#testme(@change='test' v-on:keyup.left='test(rows, $event)', v-model='testme' floating-label="TEST ME")
  mdl-textfield#fly(label='I fly' floating-label)
  mdl-textfield#fly2(floating-label='I fly')
  mdl-textfield#fly-label-dyn(:floating-label='dynFloat')
  mdl-textfield.added-class#classic(label='Classic', :type='type', v-model='text')
  mdl-textfield#fly-dyn(label='Dynamic fly' v-bind:floating-label='float' v-bind:label='label')
  mdl-textfield#textarea(label='textarea', textarea, :rows='rows', v-model='multiText')
  pre#multi-text {{multiText}}
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
  mdl-textfield#expandable(floating-label v-model='text' expandable='search' label='Search')
  br
  p {{text}}
  p {{testme}}
  mdl-checkbox(type="checkbox" v-model='float') Float
  <mdl-textfield v-model='requiredValue' id='required' floating-label='Required' required></mdl-textfield>
  <mdl-textfield v-model='requiredValue' id='required-textarea' floating-label='Required' required textarea></mdl-textfield>
  mdl-textfield#maxlength-input(v-model='requiredValue', :maxlength='maxlength', floating-label="Maxlength")
  mdl-textfield#maxlength-textarea(v-model='requiredValue', :maxlength='maxlength', floating-label="Maxlength" textarea)
</template>

<script lang="babel">
export default {
  data () {
    return {
      rows: 2,
      float: false,
      type: 'text',
      dynFloat: 'Dynamic floating label',
      text: 'Hello textfield',
      pattern: '[0-9]*',
      error: 'Nope',
      multiText: 'Hello\nmultiline',
      testme: '',
      requiredValue: '',
      maxlength: 10
    }
  },
  computed: {
    label () {
      return 'Can I fly? ' + (this.float ? 'Yes' : 'No')
    }
  },
  methods: {
    test () {
      console.log('Test works', this, arguments)
    }
  }
}
</script>
