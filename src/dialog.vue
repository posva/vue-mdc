<template>
<div class="mdl-dialog-container" v-show="show">
  <div class="mdl-dialog">
    <div class="mdl-dialog__title">{{title}}</div>
    <div class="mdl-dialog__content">
      <slot></slot>
    </div>
    <div class="mdl-dialog__actions" :class="actionsClasses">
      <slot name="actions">
        <mdl-button class="mdl-js-ripple-effect" @click.native.stop="close">Close</mdl-button>
      </slot>
    </div>
  </div>
</div>
</template>

<script>
import mdlButton from './button.vue'
import createFocusTrap from 'focus-trap'

export default {
  components: {
    mdlButton
  },

  computed: {
    actionsClasses () {
      return {
        'mdl-dialog__actions--full-width': this.fullWidth
      }
    }
  },

  data () {
    return {
      show: false
    }
  },

  props: {
    title: {
      type: String
    },
    fullWidth: Boolean
  },

  mounted () {
    this._focusTrap = createFocusTrap(this.$el)
  },

  methods: {
    open () {
      this.show = true
      this.$nextTick(() => this._focusTrap.activate())
      this.$emit('open')
    },
    close () {
      this.show = false
      this._focusTrap.deactivate()
      this.$emit('close')
    }
  }
}
</script>

<style>
.mdl-dialog-container {
  position: fixed;
  width: 100%;
  height: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content:center;
  align-items: center;
  top:0;
  left: 0;
  z-index: 10000;
  background: rgba(0,0,0,0.3);
}
.mdl-dialog-container .mdl-dialog {
  background-color:white;
  padding: 1em;
  color: black;
  width: initial;
  min-width: 280px;
}
</style>
