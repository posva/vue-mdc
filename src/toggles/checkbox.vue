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
import toggle from '../mixins/toggle'

export default {
  mixins: [toggle]
}
</script>
