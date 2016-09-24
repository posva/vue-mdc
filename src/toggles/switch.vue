<template>
  <label class="mdl-switch mdl-js-switch is-upgraded"
         v-bind:for.once="id"
         v-bind:class="cssClasses"
  >
    <input class="mdl-switch__input"
           type="checkbox"
           :value="val"
           :id="id"
           v-model="checked"
           @change="fireChange"
           :disabled="disabled"/>
    <span class="mdl-switch__label">
      <slot></slot>
    </span>
  </label>
</template>

<script>
import common from '../mixins/toggle'

export default {
  mounted () {
    componentHandler.upgradeElements(this.$el)
  },
  mixins: [common]
}
</script>
