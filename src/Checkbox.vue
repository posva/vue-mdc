<template>
  <div class="mdc-checkbox">
    <input type="checkbox"
           class="mdc-checkbox__native-control"
           :value="value"
           :disabled="disabled"
           :id="id"
           v-model="model"
    />
    <div class="mdc-checkbox__background">
      <svg version="1.1"
           class="mdc-checkbox__checkmark"
           xmlns="http://www.w3.org/2000/svg"
           viewBox="0 0 24 24"
           xml:space="preserve"
      >
        <path class="mdc-checkbox__checkmark__path"
              fill="none"
              stroke="white"
              d="M1.73,12.91 8.1,19.28 22.79,4.59"/>
      </svg>
      <div class="mdc-checkbox__mixedmark"></div>
    </div>
  </div>
</template>

<script>
export default {
  model: {
    prop: 'checked',
    event: 'change',
  },

  props: {
    value: {
      required: false,
    },
    checked: [Array, Boolean],
    disabled: [Boolean, String],
    id: String,
  },

  computed: {
    model: {
      get () {
        return this.checked
      },
      set (check) {
        this.$emit('change', check)
      },
    },
  },
}
</script>

<style lang="scss" src="@material/checkbox/mdc-checkbox.scss">
</style>
