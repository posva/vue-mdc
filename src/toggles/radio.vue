<template>
  <label class="mdl-radio mdl-js-radio is-upgraded"
         :for="id"
         :class="cssClasses"
  >
    <input class="mdl-radio__button"
           type="radio"
           :id="id"
           :name="name"
           :value="val"
           v-model="checked"
           @change="fireChange"
           :disabled="disabled"/>
    <span class="mdl-radio__label">
      <slot></slot>
    </span>
  </label>
</template>

<script>
export default {
  props: {
    name: String,
    disabled: { required: false },
    id: String,
    value: {
      type: [String, Number],
      required: true
    },
    val: { required: true }
  },
  computed: {
    checked: {
      get () { return this.value },
      set (val) { this.checkedProxy = val }
    },
    isChecked () {
      return this.value === this.val
    },
    cssClasses () {
      return {
        'is-disabled': this.disabled,
        'is-checked': this.isChecked
      }
    }
  },
  mounted () {
    componentHandler.upgradeElements(this.$el)
  },
  methods: {
    fireChange (event) {
      this.$emit('input', this.checkedProxy)
    }
  }
}
</script>
