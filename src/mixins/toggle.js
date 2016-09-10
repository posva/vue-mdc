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
    selectedValue: {
      required: false
    }
  },
  computed: {
    isChecked () {
      if (this.value instanceof Array) {
        return this.value.indexOf(this.selectedValue) >= 0
      } else {
        return this.value
      }
    }
  },
  beforeMount: function () {
    this.checked = this.value
  },
  watch: {
    value: function (value) {
      this.checked = value
    },
    checked: function (value) {
      this.$emit('input', value)
    }
  }
}
