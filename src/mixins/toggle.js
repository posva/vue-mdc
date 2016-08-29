export default {
  props: {
    value: {
      type: [Array, Boolean, Number],
      required: true
    },
    disabled: {
      required: false
    },
    id: String,
    checkValue: {
      required: false
    }
  },
  computed: {
    isChecked () {
      if (this.value instanceof Array) {
        return this.value.indexOf(this.checkValue) >= 0
      } else {
        return this.value
      }
    }
  },
  beforeMount: function () {
    this.checked = this.value
  },
  watch: {
    value: function (value, oldValue) {
      this.checked = value
    },
    checked: function (value, oldValue) {
      this.$emit('input', value)
    }
  }
}
