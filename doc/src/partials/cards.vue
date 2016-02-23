<style lang="stylus" scoped>
.reset-height
  min-height: initial
.white-space
  white-space: pre-line
</style>

<style lang="stylus">
.demo-card-welcome.mdl-card
  width: 512px
  .mdl-card__title
    color: white
    height: 176px
    background: url('http://www.getmdl.io/assets/demos/welcome_card.jpg') center / cover
  .mdl-card__menu
    color: white

.demo-card-image.mdl-card
  width: 256px
  height: 256px
  background: url('http://www.getmdl.io/assets/demos/image_card.jpg') center / cover
  .mdl-card__actions
    height: 52px
    padding: 16px
    background: rgba(0, 0, 0, 0.2)
  .demo-card-image__filename
    color: #fff
    font-size: 14px
    font-weight: 500
</style>

<template lang="jade">
.section
  title-link Cards
  .section__content
    p Cards are self-contained pieces of paper with data. Vue MDL tries
      | to make them easier to use in common cases. If it doesn't fit your
      | needs, you can always overwrite the content using slots. Cards
      | are not finished yet but you can use can always so using slots
      | may be necessary
    .flex.start.wrap
      mdl-card.reset-height.white-space(:title='cardTitle', :supporting-text='supportingText', actions, actions-text='View updates')
    .flex.start.wrap
      mdl-textfield(:value.sync='cardTitle', floating-label='Card Title')
      mdl-textfield(textarea, :value.sync='supportingText', floating-label='Supporting Text')

    p Pass the text you want to the directive:
    pre
      code.html
        p='<mdl-card :title="cardTitle" :supporting-text="supportingText" actions="actions" actions-text="View updates">'
        p='</mdl-card>'

    .flex.start.wrap
      mdl-card.demo-card-welcome(title='Welcome', :supporting-text='supportingText', actions, actions-text='Get started', menu)

    br
    pre
      code.css.
        .demo-card-welcome.mdl-card {
          width: 512px;
        }
        .demo-card-welcome .mdl-card__title,
        .demo-card-welcome .mdl-card__menu {
          color: white;
        }
        .demo-card-welcome .mdl-card__title {
          height: 176px;
          background: url('http://www.getmdl.io/assets/demos/welcome_card.jpg') center / cover;
        }
      code.html
        p= '<mdl-card class="demo-card-welcome" title="Welcome" :supporting-text="supportingText" actions="actions" actions-text="Get started">'
        p= '</mdl-card>'

    p You can replace any of the existing content by using slots. Available slots are 
      code title
      | , 
      code subtitle
      | , 
      code supporting-text
      | , 
      code media
      | , 
      code actions
      |  and 
      code menu

    .flex.start.wrap
      mdl-card.demo-card-image
        .mdl-card__title.mdl-card--expand(slot='title')
        .mdl-card__actions(slot='actions')
          span.demo-card-image__filename Image.jpg

    table.mdl-data-table.mdl-js-data-table
      thead
        tr
          th.mdl-data-table__cell--non-numeric Modifiers
          th.mdl-data-table__cell--non-numeric Description
          th.mdl-data-table__cell--non-numeric Remarks
      tbody
        tr
          td.mdl-data-table__cell--non-numeric
            code title
          td.mdl-data-table__cell--non-numeric Defines card's title
          td.mdl-data-table__cell--non-numeric
        tr
          td.mdl-data-table__cell--non-numeric
            code supporting-text
          td.mdl-data-table__cell--non-numeric Defines card's supporting text
          td.mdl-data-table__cell--non-numeric
        tr
          td.mdl-data-table__cell--non-numeric
            code actions
          td.mdl-data-table__cell--non-numeric Makes the actions section visible
          td.mdl-data-table__cell--non-numeric You must set it to a non empty string in order to make it work
        tr
          td.mdl-data-table__cell--non-numeric
            code actions-text
          td.mdl-data-table__cell--non-numeric Defines the actions section button's text
          td.mdl-data-table__cell--non-numeric
</template>

<script>
export default {
  data () {
    return {
      cardTitle: 'Update',
      supportingText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenan convallis.'
    }
  }
}
</script>
