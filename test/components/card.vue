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
  mdl-card#card(:title='title',
    v-attach:card,
    v-el:card,
    :subtitle='subtitle',
    :media='media',
    :supporting-text='supportingText',
    :actions-text='actionsText',
    :actions-target='actionsTarget',
    :actions='actions',
    menu='cardMenu'
    )
  br
  mdl-textfield(:value.sync='title', floating-label='Card Title')
  mdl-textfield(:value.sync='subtitle', floating-label='Card subtitle')
  mdl-textfield(:value.sync='media', floating-label='Card Media')
  mdl-textfield(textarea, :value.sync='supportingText', floating-label='Card supporting text')
  mdl-textfield(:value.sync='actions', floating-label='URL or event name')
  mdl-textfield(:value.sync='actionsText', floating-label='Button text')
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

<script>
import vmdl from '../../src/vue-mdl'
import utils from '../unit/utils'

export default {
  data () {
    return {
      title: 'Card Title',
      actions: 'someEventName',
      actionsText: 'Vuejs.org',
      actionsTarget: '_blank',
      subtitle: 'Card subtitle',
      media: '//www.getmdl.io/assets/demos/image_card.jpg',
      supportingText: 'Here is some supporting text'
    }
  },
  components: vmdl.components,
  directives: {
    attach: utils.attachDirective
  },
  events: {
    cardMenu () {
      console.log('hey')
      return true // stop propagation
    }
  }
}
</script>
