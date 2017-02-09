<template>
  <div class="mdl-textfield mdl-js-textfield mdl-textfield--floating-label getmdl-select"
       ref="textfield">
    <input class="mdl-textfield__input"
           :id="id"
           @keydown.enter.space="open"
           ref="input"
           v-model="name"
           type="text"
           readonly=""
    />
    <label :for="id">
      <i class="mdl-icon-toggle__label material-icons">keyboard_arrow_down</i>
    </label>
    <label class="mdl-textfield__label" :for="id">{{label}}</label>
    <ul class="mdl-menu mdl-menu--bottom-left mdl-js-menu"
        ref="menu"
        :for="id">
      <li class="mdl-menu__item"
          v-for="option in optionsObject"
          @click="selectValue(option)"
      >{{option.name}}</li>
    </ul>
  </div>
</template>

<script>
export default {
  data () {
    return {
      name: ''
    }
  },

  methods: {
    selectValue ({value}) {
      /* setTimeout(() => this.$refs.menu.MaterialTextfield.updateClasses_(), 250) */
      this.$emit('input', value)
    },
    setName () {
      this.name = null
      for (let i = 0; i < this.optionsObject.length; ++i) {
        let option = this.optionsObject[i]
        if (this.value === option.value) this.name = option.name
      }
      if (!this.name) this.name = this.value
      this.$refs.textfield.MaterialTextfield.change(this.name)
      this.$refs.textfield.MaterialTextfield.boundBlurHandler()
    },
    open () {
      this.$refs.input.click()
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
  mounted () {
    componentHandler.upgradeElements(this.$el)
    this.setName()
  },
  watch: {
    value: function () {
      this.setName()
    }
  }
}
</script>

<style>
.getmdl-select .mdl-icon-toggle__label {
  float: right;
  margin-top: -30px;
  color: rgba(0, 0, 0, 0.4);
}
.getmdl-select.is-focused .mdl-icon-toggle__label {
  color: #3f51b5;
}
.getmdl-select .mdl-menu__container {
  width: 100% !important;
  overflow: hidden;
}
.getmdl-select .mdl-menu__container .mdl-menu .mdl-menu__item {
  font-size: 16px;
}

.getmdl-select .mdl-menu {
  /* Remove the 2px border */
  width: calc(100% - 2px);
}

.getmdl-select--fixed-height .mdl-menu__container {
  overflow-y: auto;
  max-height: 300px !important;
}
</style>
