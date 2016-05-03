<template>
  <div id="app">
    <div id="mocha"></div>
    <div id="test">
      <div>
        <span>Test {{currentTest}}</span>
        <br>
        <button @click='previous'>Previous</button>
        <button @click='next'>Next</button>
      </div>
      <component v-attach :is='currentComponent'></component>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      currentTest: 'None',
      currentComponent: null
    }
  },
  components: {
  }
}
</script>
