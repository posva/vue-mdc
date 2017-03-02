<template>
  <div :class="containerClasses">
    <div role="button"
         @click="toggle"
         class="test-dom-container__toggle"
    >{{ buttonText }}</div>
    <div class="test-dom-container__content">
      <slot/>
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    visible: true,
  }),

  computed: {
    containerClasses () {
      return {
        'test-dom-container': true,
        'test-dom-container--hidden': !this.visible,
      }
    },
    buttonText () {
      return this.visible ? '-' : '+'
    },
  },

  methods: {
    toggle () {
      this.visible = !this.visible
    },
  },
}
</script>
