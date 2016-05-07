<template>
  <div id='app'>
    <div class='controls'>
      <button @click='previous'>Previous</button>
      <button @click='next'>Next</button>
    </div>
    <component :is='component'></component>
  </div>
</template>

<script>
export default {
  props: {
    components: Array
  },
  computed: {
    component () {
      return this.components[this.currentComponent]
    }
  },
  data () {
    return {
      currentComponent: 0
    }
  },
  methods: {
    previous () {
      if (--this.currentComponent < 0) {
        this.currentComponent = this.components.length - 1
      }
    },
    next () {
      if (++this.currentComponent >= this.components.length) {
        this.currentComponent = 0
      }
    }
  }
}
</script>
