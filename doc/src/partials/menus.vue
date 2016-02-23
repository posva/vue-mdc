<style lang="stylus" scoped>
.bar
  position: relative
  background: #3F51B5
  color: white
  height: 64px
  padding: 16px
</style>

<template lang="jade">
.section
  title-link Menus
  .section__content
    p Menus are lists of actions. They are linked to some button by a
      code for
      |  prop. In order to appear in the right position you need to include
      | it inside a&nbsp;
      code position: relative
      |  block. They do not any options yet
    .flex.center.wrap
      .bar
        mdl-button#menu-example(icon)
          i.material-icons more_vert
        mdl-menu(for='menu-example')
          mdl-menu-item Option 1
          mdl-menu-item(disabled) Disabled Action
          mdl-menu-item Other Action
    pre
      code.css.
        .bar {
          position: relative;
          background: #3F51B5;
          color: white;
          height: 64px;
          padding: 16px;
        }
      code.html
        p= '<div class="bar">'
        p= '  <mdl-button id="menu-example" icon>'
        p= '    <i class="material-icons">more_vert</i>'
        p= '  </mdl-button>'
        p= '  <mdl-menu for="menu-example">'
        p= '    <mdl-menu-item>Option 1</mdl-menu-item>'
        p= '    <mdl-menu-item disabled="disabled">Disabled Action</mdl-menu-item>'
        p= '    <mdl-menu-item>Other Action</mdl-menu-item>'
        p= '  </mdl-menu>'
        p= '</div>'

</template>

<script>
export default {}
</script>
