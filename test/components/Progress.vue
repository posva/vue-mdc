<template lang="jade">
div
  h1 Progress bar
  mdl-progress#progress(v-bind:progress='progress')
  br
  mdl-progress#buffer(v-bind:progress='progress' v-bind:buffer='buffer')
  br
  mdl-progress#indeterminate(v-bind:indeterminate='indeterminate')
  br
  br
  <mdl-progress id='html-progress' indeterminate />
  br
  br
  input#progress-val(type='number' v-model='progress')
  input#buffer-val(type='number' v-model='buffer')
  br
  input#v-if(type='checkbox' v-model='indeterminate')
  span Indeterminate
</template>

<script lang="babel">
export default {
  data () {
    return {
      progress: 44,
      buffer: 80,
      indeterminate: false
    }
  }
}
</script>
