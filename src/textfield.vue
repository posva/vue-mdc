<template lang="jade">
.mdl-textfield.mdl-js-textfield(v-bind:class="{'mdl-textfield--floating-label': floatingLabel, 'mdl-textfield--expandable': expandable, 'is-dirty': isDirty, 'is-disabled': disabled}")
  slot(v-if='expandable' name='expandable-button')
    label.mdl-button.mdl-js-button.mdl-button--icon(v-bind:for.once='id')
      i.material-icons {{expandable}}
  div(v-bind:class="{'mdl-textfield__expandable-holder': expandable}")
    slot(v-if='textarea' name='textarea')
      textarea.mdl-textfield__input(type='text' v-bind:value='value' v-on:input='fireInputEvent' v-bind:required='required' v-bind:id.once='id' v-bind:rows='rows' v-bind:maxlength='maxlength')
    slot(v-else name='input')
      input.mdl-textfield__input(v-bind:type='type' v-bind:value='value' v-on:input='fireInputEvent' v-bind:id.once='id' v-bind:pattern='pattern' v-bind:disabled='disabled' v-bind:required='required' v-bind:readonly='readonly' v-bind:maxlength='maxlength')
    slot(name='label')
      label.mdl-textfield__label(v-bind:for.once='id') {{displayLabel}}
    slot(name='error')
      label.mdl-textfield__error(v-if='error') {{error}}
</template>

<script>
export default {
  props: {
    maxlength: {
      required: false
    },
    expandable: String,
    type: {
      type: String,
      default: 'text'
    },
    rows: {
      required: false
    },
    id: String,
    value: {
      required: false
    },
    disabled: {
      type: [Boolean, String],
      fill: true,
      required: false,
      default: false
    },
    required: {
      type: [Boolean, String],
      fill: true,
      required: false,
      default: false
    },
    readonly: {
      type: [Boolean, String],
      fill: true,
      required: false,
      default: false
    },
    label: String,
    pattern: String,
    error: String,
    textarea: Boolean,
    floatingLabel: [Boolean, String]
  },
  computed: {
    displayLabel () {
      return this.label || this.floatingLabel
    },
    isDirty () {
      return '' + this.value
    }
  },
  methods: {
    fireInputEvent: function (event) {
      this.$emit('input', event.target.value)
    }
  },
  mounted () {
    componentHandler.upgradeElement(this.$el)
  }
}
</script>
