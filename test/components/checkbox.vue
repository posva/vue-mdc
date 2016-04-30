<template lang="jade">
div
  h1 Checkboxes
  h3 MDL
  label.mdl-checkbox.mdl-js-checkbox.mdl-js-ripple-effect(for='ori-checkbox-1')
    input#ori-checkbox-1.mdl-checkbox__input(type='checkbox', checked='')
    span.mdl-checkbox__label Checkbox
  label.mdl-checkbox.mdl-js-checkbox(for='ori-checkbox-2')
    input#ori-checkbox-2.mdl-checkbox__input(type='checkbox', checked='')
    span.mdl-checkbox__label No ripple
  h3 vue
  // We can also use the jade syntax #id for literal ids
  mdl-checkbox.added-class(id='check-dyn' v-bind:checked.sync='check') Dynamic {{check}}
  mdl-checkbox(id='check' v-bind:checked.sync='check' v-bind:disabled='disabled') Check me
  mdl-checkbox#number(v-bind:checked.sync='numCheck') My value is a number
  input#classic(type='checkbox' v-model='check')
  span Classic checkbox
  input#disable(type='checkbox' v-model='disabled')
  span Disable
  mdl-checkbox(v-if='disabled' id='v-if' v-bind:checked.sync='check' v-bind:disabled='disabled') v-if
  mdl-checkbox(v-for='n in 3' v-bind:value='indexId(n)' v-bind:id='indexId(n)' v-bind:checked.sync='checks') v-for {{indexId(n)}}
  p#checks {{checks | json}}
</template>

<script>
export default {
  data () {
    return {
      numCheck: 0,
      check: true,
      checks: [],
      disabled: false
    }
  },
  methods: {
    indexId (num) {
      return `id-${num.toString()}`
    }
  }
}
</script>
