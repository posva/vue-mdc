export default {
  props: {
    checked: {
      required: true
    },
    disabled: {
      required: false
    },
    id: String,
    value: {
      required: false
    }
  },
  methods: {
    fireChange: function (event) {
      this.$emit('change', event)
    }
  }
}
