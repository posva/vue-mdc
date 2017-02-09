<template lang="jade">
div
  h1 Ripple Effect
  h3 vue
  mdl-button#button-ripple(mdl-ripple-effect) Hello
  mdl-checkbox#checkbox-ripple(mdl-ripple-effect type="checkbox" v-model='check') Checkbox
  mdl-radio#radio-ripple(mdl-ripple-effect val='one' type="radio" v-model='check') Radio
  mdl-switch#switch-ripple(mdl-ripple-effect type="checkbox" v-model='check')
  mdl-icon-toggle#icon-toggle-ripple(mdl-ripple-effect type="checkbox" v-model='check' icon='add')
</template>

<script lang="babel">
export default {
  data () {
    return {
      check: true
    }
  }
}
</script>
