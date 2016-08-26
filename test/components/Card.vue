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
    ref='card',
    :subtitle='subtitle',
    :media='media',
    :supporting-text='supportingText',
    :actions-text='actionsText',
    :actions-target='actionsTarget',
    :actions='actions',
    menu='cardMenu'
    )
  mdl-card#menu(
    ref='cardMenu',
    title='Menu',
    :supporting-text="'Menu was called ' + menuCallCount + ' times.'",
    menu='cardMenu',
    v-on:cardMenu='increaseMenuCount'
  )
  br
  mdl-textfield(v-model='title', floating-label='Card Title')
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
  mdl-card#actions-button(ref='increaseCard', :title="'Emitted events ' + num", actions='increaseNum', actions-text='Increase count', v-on:increaseNum='increaseNum')
  mdl-card(title="Empty slot", :supporting-text="''", :actions="''")
</template>

<script>
export default {
  data () {
    return {
      num: 0,
      menuCallCount: 0,
      title: 'Card Title',
      actions: 'someEventName',
      actionsText: 'Vuejs.org',
      actionsTarget: '_blank',
      subtitle: 'Card subtitle',
      media: '//www.getmdl.io/assets/demos/image_card.jpg',
      supportingText: 'Here is some supporting text'
    }
  },
  methods: {
    increaseMenuCount: function () {
      this.menuCallCount++
    },
    increaseNum: function () {
      this.num++
    }
  }
}
</script>
