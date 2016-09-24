<template>
  <label class="mdl-icon-toggle mdl-js-icon-toggle is-upgraded"
         :for="id"
         :class="cssClasses">
    <input class="mdl-icon-toggle__input"
           type="checkbox"
           :value="val"
           :id="id"
           v-model="checked"
           @change="fireChange"
           :disabled="disabled"/>
    <i class="mdl-icon-toggle__label material-icons">{{icon}}</i>
  </label>
</template>

<script>
import common from '../mixins/toggle'

export default {
  props: {
    icon: {
      required: true,
      type: String
    }
  },
  mounted () {
    componentHandler.upgradeElements(this.$el)
  },
  mixins: [common]
}
</script>
