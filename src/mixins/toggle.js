export default {
  props: {
    disabled: { required: false },
    id: String,
    value: {
      type: [Array, Boolean, Number],
      required: true
    },
    val: { required: false }
  },
  data () {
    return {
      checkedProxy: false
    }
  },
  computed: {
    checked: {
      get () { return this.value },
      set (val) { this.checkedProxy = val }
    },
    isChecked () {
      return this.value instanceof Array
        ? this.value.indexOf(this.val) >= 0
        : this.value
    },
    cssClasses () {
      return {
        'is-disabled': this.disabled,
        'is-checked': this.isChecked
      }
    }
  },
  methods: {
    fireChange (event) {
      this.$emit('input', this.checkedProxy)
    }
  }
}
