<style lang="stylus" scoped>
*
  box-sizing: border-box

.content
  margin: 10px

.container
  width: 200px

.background
  background: white
  height: 148px

.bar
  position: relative
  background: #3F51B5
  color: white
  height: 64px
  padding: 16px

</style>

<template lang="jade">
.content
  h1 Menus
  div
    h3 MDL
    .container.mdl-shadow--2dp
      .background
      .bar
        button#mdl-menu.mdl-button.mdl-js-button.mdl-button--icon
          i.material-icons more_vert
        ul.mdl-menu.mdl-menu--top-left.mdl-js-menu.mdl-js-ripple-effect(for='mdl-menu')
          li.mdl-menu__item Some Action
          li.mdl-menu__item Another Action
          li.mdl-menu__item(disabled) Disabled Action
          li.mdl-menu__item Yet Another Action
  h3 vue
  br
  .container.mdl-shadow--2dp
    .background
    .bar(v-if='group')
      button#v-menu.mdl-button.mdl-js-button.mdl-button--icon(v-if='showButton')
        i.material-icons more_vert
      mdl-menu(v-if='show' target='v-menu' ref='menu')
        mdl-menu-item Hello
        mdl-menu-item(v-for='(option, index) in options' v-bind:key='index' v-bind:disabled='index === 2') {{option}}
        li.mdl-menu__item
          i.material-icons mood
          | Send Feedback
  mdl-button.mdl-js-ripple-effect(raised colored v-on:click.native='open') Open the menu
  mdl-checkbox(type="checkbox" v-model='group') Show Group
  mdl-checkbox(type="checkbox" v-model='show') Show Menu
  mdl-checkbox(type="checkbox" v-model='showButton') Show Button
  mdl-textfield(v-model='newOption', floating-label='New Option')
  mdl-button.mdl-js-ripple-effect(raised colored v-on:click.native='addOption') Add Option
</template>

<script lang="babel">
export default {
  data () {
    return {
      group: true,
      showButton: true,
      show: true,
      newOption: 'Dynamic options',
      options: [
        'Some Action',
        'Another Action',
        'Disabled Action',
        'Yet Another Action'
      ]
    }
  },
  methods: {
    open () {
      this.$els.menu.MaterialMenu.handleForClick_()
    },
    addOption () {
      this.options.push(this.newOption)
    }
  }
}
</script>
