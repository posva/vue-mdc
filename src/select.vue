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
.mdl-textfield.mdl-js-textfield.mdl-textfield--floating-label.getmdl-select(v-el:textfield)
  input.mdl-textfield__input(v-bind:id.once='id', v-el:input, v-model='name', type='text', readonly='', tabindex='-1')
  label(v-bind:for.once='id')
    i.mdl-icon-toggle__label.material-icons keyboard_arrow_down
  label.mdl-textfield__label(v-bind:for.once='id') {{label}}
  ul.mdl-menu.mdl-menu--bottom-left.mdl-js-menu(v-bind:for.once='id')
    li.mdl-menu__item(v-for='option in optionsObject', v-on:click='selectValue(option)') {{option.name}}
</template>

<script>
/* global componentHandler*/

export default {
  data () {
    return {
      name: ''
    }
  },
  methods: {
    selectValue (option) {
      this.value = option.value
      this.name = option.name
      let event = new Event('change')
      this.$el.dispatchEvent(event)
    },
    setName () {
      for (let i = 0; i < this.optionsObject.length; ++i) {
        let option = this.optionsObject[i]
        if (this.value === option.value) this.name = option.name
      }
      this.$els.textfield.MaterialTextfield.change(this.name)
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
    label: String,
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
    this.setName()
  },
  watch: {
    value (val, oldVal) {
      this.setName()
    }
  }
}
</script>
