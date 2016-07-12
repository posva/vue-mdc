<style lang="stylus">
.wide
  width: 80%
  max-width: 500px
</style>

<template lang="jade">
.section
  title-link Textfields
  .section__content
    p The textfield component is highly customizable and allows you to use text inputs and textareas.
      | Instead of using the 
      code v-model
      |  directive you have to pass a two way prop named 
      code value
      | .
    .flex.center.wrap
      p Hello {{name}}
    .flex.start.wrap
      mdl-textfield.space(label='Name', :value.sync='name')
      mdl-textfield.space(floating-label='Name', :value.sync='name')
    pre
      code.html
        p= '<mdl-textfield label="Name" :value.sync="name"></mdl-textfield>'
        p= '<mdl-textfield floating-label="Name" :value.sync="name"></mdl-textfield>'

    p Use the 
      code textarea
      |  prop to use a textarea instead of an input
    .flex.start.wrap
      mdl-textfield(floating-label='Textarea', textarea, rows='4', :value.sync='text')
      p {{text}}
    pre
      code.html= '<mdl-textfield floating-label="Name" textarea rows="4"></mdl-textfield>'

    p You can dynamically bind the 
      code floating-label
      |  prop and use the 
      code label
      | prop for the real label if you need to control whether the label can floats or not

    pre
      code.html= '<mdl-textfield :floating-label="float" label="Name" textarea></mdl-textfield>'
      code.javascript.
        new Vue({
          el: '#app',
          data: {floating: false}
        })

    p You can make the textfield expandable by using the 
      code expandable
      |  prop and setting and 
      code id
      |  on the element.

    .flex.start.wrap
      mdl-textfield#demo-expandable-button(expandable='search')

    pre
      code.html= '<mdl-textfield id="demo-expandable-button" expandable="search"></mdl-textfield>'

    // h5 Playground
    // .flex.start.wrap
    //   mdl-textfield(:floating-label='float', :label='label', :textarea='textarea', :rows='rows')
    // .flex.start.wrap
    //   mdl-checkbox.reset-width.space(:checked.sync='float') Floating label
    //   mdl-checkbox.reset-width.space(:checked.sync='textarea') Textarea
    // .flex.start.wrap
    //   p Rows: 
    //   mdl-slider.reset-width.space(:value.sync='rows', min='1', max='20')
    // .flex.start.wrap
    //   mdl-textfield.space(:value.sync='label', floating-label='Label')
    // p Result:
    // pre
    //   code.html(v-hljs='playgroundHtml')

    h5 Prop List
    table.mdl-data-table.mdl-js-data-table
      thead
        tr
          th.mdl-data-table__cell--non-numeric Prop
          th.mdl-data-table__cell--non-numeric Description
          th.mdl-data-table__cell--non-numeric Remarks
      tbody
        tr
          td.mdl-data-table__cell--non-numeric
            code value
          td.mdl-data-table__cell--non-numeric Defines a value for the textfield
          td.mdl-data-table__cell--non-numeric Should be used with the 
            code .sync
            |  modifier
        tr
          td.mdl-data-table__cell--non-numeric
            code label
          td.mdl-data-table__cell--non-numeric Defines the label used on the the textfield
          td.mdl-data-table__cell--non-numeric You don't need this if you use 
            code floating-label
        tr
          td.mdl-data-table__cell--non-numeric
            code floating-label
          td.mdl-data-table__cell--non-numeric Defines whether the label should float or not. If the given value is a String, you don't need to provide a 
            code label
            |  prop
          td.mdl-data-table__cell--non-numeric
        tr
          td.mdl-data-table__cell--non-numeric
            code textarea
          td.mdl-data-table__cell--non-numeric Makes the textfield a textarea instead of an input
          td.mdl-data-table__cell--non-numeric
        tr
          td.mdl-data-table__cell--non-numeric
            code rows
          td.mdl-data-table__cell--non-numeric Controls the number of rows used in the textarea
          td.mdl-data-table__cell--non-numeric Needs the 
            code textarea
            |  prop
        tr
          td.mdl-data-table__cell--non-numeric
            code pattern
          td.mdl-data-table__cell--non-numeric Input validation using a Regex
          td.mdl-data-table__cell--non-numeric Only works on non-textareas
        tr
          td.mdl-data-table__cell--non-numeric
            code error
          td.mdl-data-table__cell--non-numeric Defines the error displayed when the input text doesn't match the given pattern
          td.mdl-data-table__cell--non-numeric Needs the 
            code pattern
            |  prop
        tr
          td.mdl-data-table__cell--non-numeric
            code expandable
          td.mdl-data-table__cell--non-numeric Makes the textfield look like a button that expands. You need to pass a material icon to this prop
          td.mdl-data-table__cell--non-numeric Needs to have an id set
        tr
          td.mdl-data-table__cell--non-numeric
            code type
          td.mdl-data-table__cell--non-numeric Defines the type of the input
          td.mdl-data-table__cell--non-numeric Defaults to text. Only works on non-textarea
        tr
          td.mdl-data-table__cell--non-numeric
            code disabled
          td.mdl-data-table__cell--non-numeric Disables the input
          td.mdl-data-table__cell--non-numeric Add it without any value or bind it to a Boolean
        tr
          td.mdl-data-table__cell--non-numeric
            code readonly
          td.mdl-data-table__cell--non-numeric Makes the input readonly
          td.mdl-data-table__cell--non-numeric Add it without any value or bind it to a Boolean
        tr
          td.mdl-data-table__cell--non-numeric
            code maxlength
          td.mdl-data-table__cell--non-numeric Defines the maxlength of the input or textarea
          td.mdl-data-table__cell--non-numeric This uses html attribute maxlength
    br
</template>

<script>
export default {
  data () {
    return {
      name: 'Ed',
      label: 'I am a label',
      float: true,
      textarea: false,
      text: 'You can have\nmultiline',
      rows: 3
    }
  },
  computed: {
    playgroundHtml () {
      return '<mdl-textfield' +
      (this.float ? ` floating-label="${this.label}"` : ` label="${this.label}"`) +
      '</mdl-textfield>'
    }
  }
}
</script>
