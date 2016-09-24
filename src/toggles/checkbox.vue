<template>
  <label class="mdl-checkbox mdl-js-checkbox is-upgraded"
         :class="cssClasses"
         :for="id">
    <input class="mdl-checkbox__input"
           type="checkbox"
           :value="val"
           :id="id"
           v-model="checked"
           @change="fireChange"
           :disabled="disabled"/>
    <span class="mdl-checkbox__label">
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
