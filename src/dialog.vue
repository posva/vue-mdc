<template>
  <div class="mdl-dialog-container"
       ref="out"
       @click="closeIfOutside"
       v-show="show">
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
    fullWidth: Boolean,
    noFocusTrap: {
      type: Boolean,
      default: false
    }
  },

  mounted () {
    if (!this.noFocusTrap) this._focusTrap = createFocusTrap(this.$el)
  },

  methods: {
    open () {
      this.show = true
      if (this._focusTrap) this.$nextTick(() => this._focusTrap.activate())
      this.$emit('open')
    },
    close () {
      this.show = false
      if (this._focusTrap) this._focusTrap.deactivate()
      this.$emit('close')
    },
    closeIfOutside ({ target }) {
      if (target === this.$refs.out) this.close()
    }
  },

  watch: {
    noFocusTrap (noFocusTrap) {
      this._focusTrap = noFocusTrap ? null : createFocusTrap(this.$el)
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
