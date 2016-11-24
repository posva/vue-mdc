<template>
  <a v-if="tab.link" class="mdl-tabs__tab"
     v-link="tab.link"
  >{{tab.title}}
    <span v-el:ripple
          v-show="!noRippleEffect"
          class="mdl-tabs__ripple-container mdl-js-ripple-effect">
<span class="mdl-ripple"></span>
</span>
  </a>
  <a v-else class="mdl-tabs__tab"
     v-link="tab.link"
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