<template>
  <header class="mdc-toolbar">
    <ToolbarRow>
      <ToolbarSection align="start">
        <a href="#"
           class="material-icons mdc-toolbar__menu"
           @click.prevent="$emit('menu')"
        >{{ icon }}</a>
        <span class="mdc-toolbar__title">{{ title }}</span>
      </ToolbarSection>
    </ToolbarRow>
  </header>
</template>

<script>
import ToolbarSection from './ToolbarSection'
import ToolbarRow from './ToolbarRow'

export default {
  props: {
    title: String,
    icon: {
      type: String,
      default: 'menu',
    },
  },

  components: { ToolbarRow, ToolbarSection },
}
</script>

<style lang="scss" src="@material/toolbar/mdc-toolbar.scss">
</style>

<style>
.mdc-toolbar__menu {
  text-decoration: none;
  color: white;
  cursor: pointer;
  padding-right: 8px;
}
</style>
