<template>
  <a class="mdl-tabs__tab"
     href="#"
  >{{tab.title}}
    <span v-el:ripple class="mdl-tabs__ripple-container mdl-js-ripple-effect">
      <span class="mdl-ripple"></span>
    </span>
  </a>
</template>

<script>
export default {
  props: {
    tab: Object
  },
  ready () {
    componentHandler.upgradeElement(this.$els.ripple, 'MaterialRipple')
  }
}
</script>
