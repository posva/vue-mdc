<style>
.getmdl-select .mdl-icon-toggle__label {
  float:right;
  margin-top:-30px;
  color: rgba(0, 0, 0, 0.4);
}

.getmdl-select.is-focused .mdl-icon-toggle__label {
  color: #3f51b5;
}

.getmdl-select .mdl-menu__container {
  width: 100% !important;
}
.getmdl-select .mdl-menu__container .mdl-menu {
  width: 100%;
}
</style>

<template lang="jade">
.mdl-textfield.mdl-js-textfield.mdl-textfield--floating-label.getmdl-select
  input.mdl-textfield__input(v-bind:id.once='id', v-el:input, v-model='value', type='text', readonly='', tabindex='-1')
  label(v-bind:for.once='id')
    i.mdl-icon-toggle__label.material-icons keyboard_arrow_down
  label.mdl-textfield__label(v-bind:for.once='id') Country
  ul.mdl-menu.mdl-menu--bottom-left.mdl-js-menu(v-bind:for.once='id')
    li.mdl-menu__item(v-for='option in optionsObject', v-on:click='selectValue(option.value)') {{option.name}}
</template>

<script>
/* global componentHandler*/

export default {
  methods: {
    selectValue (val) {
      this.value = val
      let event = new Event('change')
      this.$el.dispatchEvent(event)
    }
  },
  computed: {
    optionsObject () {
      if (this.options && this.options.length !== undefined) {
        return this.options.map((option) => {
          if (typeof option === 'string') {
            return {
              name: option,
              value: option
            }
          } else {
            return option
          }
        })
      } else {
        return []
      }
    }
  },
  props: {
    id: {
      required: true
    },
    value: {
      required: false
    },
    options: {
      required: true
    }
  },
  ready () {
    componentHandler.upgradeElements(this.$el)
  }
}
</script>
