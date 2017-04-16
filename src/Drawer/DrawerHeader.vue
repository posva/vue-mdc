<template>
  <header :class="headerClass">
    <div :class="contentClass">
      <slot/>
    </div>
  </header>
</template>

<script>
export default {
  // can be functional in next Vue release
  // but it's not a big deal since this component
  // should be only used once

  inject: ['mode'],

  computed: {
    headerClass () {
      return `mdc-${this.mode}-drawer__header`
    },
    contentClass () {
      return `mdc-${this.mode}-drawer__header-content`
    },
  },
}
</script>
