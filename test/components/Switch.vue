<template lang="jade">
div
  h1 Switches
  h3 MDL
  label.mdl-switch.mdl-js-switch.mdl-js-ripple-effect(for='ori-switch-1')
    input#ori-switch-1.mdl-switch__input(type='checkbox' checked)
    span.mdl-switch__label Checkbox
  label.mdl-switch.mdl-js-switch(for='ori-switch-2')
    input#ori-switch-2.mdl-switch__input(type='checkbox')
    span.mdl-switch__label No ripple
  h3 vue
  p
    mdl-switch.added-class(id='check-dyn' type="checkbox" v-model='check') Dynamic {{check}}
    mdl-switch(id='check' type="checkbox" v-model='check' v-bind:disabled='disabled') Check me
  p
    input#classic(type='checkbox' v-model='check')
    span Classic checkbox
    input#disable(type='checkbox' v-model='disabled')
    span Disable
  mdl-switch(v-if='disabled' id='v-if' type="checkbox" v-model='check' v-bind:disabled='disabled') v-if
  mdl-switch(v-for='(label, n) in 3' v-bind:val='indexId(n)' v-bind:id='indexId(n)' type="checkbox" v-model='checks') v-for {{indexId(n)}}
  p#checks {{checks}}
</template>

<script lang="babel">
export default {
  data () {
    return {
      check: true,
      checks: [],
      disabled: false
    }
  },
  methods: {
    indexId (num) {
      return 'id-' + num.toString()
    }
  }
}
</script>
