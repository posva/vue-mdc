export default {
  props: {
    checked: {
      validator (value) {
        return typeof value === 'boolean' || value instanceof Array
      },
      required: true,
      twoWay: true
    },
    disabled: {
      required: false
    },
    id: String,
    value: {
      required: false
    }
  },
  computed: {
    isChecked () {
      if (typeof this.checked === 'boolean') {
        return this.checked
      } else {
        return this.checked.indexOf(this.value) >= 0
      }
    }
  }
}
