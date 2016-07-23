<template>
  <a class="mdl-tabs__tab"
     href="#"
  >{{tab.title}}
    <span v-el:ripple
          v-show="!noRippleEffect"
          class="mdl-tabs__ripple-container mdl-js-ripple-effect">
      <span class="mdl-ripple"></span>
    </span>
  </a>
</template>

<script>
export default {
  props: {
    tab: Object,
    noRippleEffect: {
      required: false
    }
  },
  ready () {
    componentHandler.upgradeElement(this.$els.ripple, 'MaterialRipple')
  }
}
</script>
