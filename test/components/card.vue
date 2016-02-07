<style lang="stylus" scoped>
.content
  margin: 10px
</style>

<template lang="jade">
.content
  h1 Cards
  div
    h3 MDL
    .demo-card.mdl-card.mdl-shadow--2dp
      .mdl-card__title
        h2.mdl-card__title-text Welcome
      .mdl-card__subtitle-text Some subtitle
      .mdl-card__supporting-text
        | Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        | Mauris sagittis pellentesque lacus eleifend lacinia...
      .mdl-card__media
        img(src='http://www.getmdl.io/assets/demos/dog.png')
      .mdl-card__actions.mdl-card--border
        a.mdl-button.mdl-button--colored.mdl-js-button.mdl-js-ripple-effect
          | Get Started
      .mdl-card__menu
        button.mdl-button.mdl-button--icon.mdl-js-button.mdl-js-ripple-effect
          i.material-icons share

  h3 vue
  br
  p Normal card
  mdl-card#card(:title='title', :subtitle='subtitle', :media='media',
    :supporting-text='supportingText',
    actions,
    menu
    )
  br
  mdl-textfield(:value.sync='title', floating-label='Card Title')
  mdl-textfield(:value.sync='subtitle', floating-label='Card subtitle')
  mdl-textfield(:value.sync='media', floating-label='Card Media')
  mdl-textfield(textarea, :value.sync='supportingText', floating-label='Card supporting text')
  p Empty card
  mdl-card#empty-card
  br
  mdl-card(title='Title from prop')
    .mdl-card__title(slot='title')
      h2.mdl-card__title-text Title from slot
  br
  mdl-card
    .mdl-card__title(slot='title')
      h2.mdl-card__title-text Title from slot
  br
  mdl-card(supporting-text='This card has no title \n Ha ha')
</template>

<script lang="coffee">
vmdl = require '../../src/vue-mdl.js'

module.exports =
  data: ->
    title: 'Card Title'
    subtitle: 'Card subtitle'
    media: 'https://avatars0.githubusercontent.com/u/664177'
    supportingText: 'Here is some supporting text'
  directives: vmdl.directives
  components: vmdl.components
</script>
