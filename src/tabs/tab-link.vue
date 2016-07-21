<template>
  <a class="mdl-tabs__tab"
     href="#"
  >
    <slot></slot>
    <span v-el:ripple class="mdl-tabs__ripple-container mdl-js-ripple-effect">
      <span class="mdl-ripple"></span>
    </span>
  </a>
</template>

<script>
export default {
  ready () {
    componentHandler.upgradeElement(this.$els.ripple, 'MaterialRipple')
  }
}
</script>
