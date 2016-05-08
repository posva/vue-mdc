<template lang="jade">
.mdl-dialog-container(v-show='show' v-on:click.stop='cancel')
  .mdl-dialog(v-on:click.stop='noAction')
    .mdl-dialog__title {{title}}
    .mdl-dialog__content
      slot
    .mdl-dialog__actions(v-el:actions, v-bind:class='{ "mdl-dialog__actions--full-width": fullWidth }')
      slot(name='actions')
        mdl-button.mdl-js-ripple-effect Close
</template>

<script>
import propFill from './mixins/prop-fill'
import mdlButton from './button.vue'

export default {
  components: {
    mdlButton
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
    displayOn: {
      required: true,
      type: String
    },
    fullWidth: {
      fill: true,
      default: false
    },
    cancellable: {
      fill: true,
      default: false
    }
  },
  ready () {
    this.eventsAdded = []
    this.$on(this.displayOn, (...callbacks) => {
      this.show = !this.show
      const actions = this.$els.actions.querySelectorAll('button, [data-action]')
      this.cancelAction = null
      if (this.cancellable) {
        this.cancelAction = callbacks[actions.length] || callbacks[actions.length - 1]
      }
      Array.prototype.forEach.call(actions, (action, i) => {
        let callback
        if (callbacks[i]) {
          callback = (event) => {
            event.stopPropagation()
            const ret = callbacks[i]()
            if (ret !== false) this.close()
          }
        } else {
          callback = () => this.close()
        }
        action.addEventListener('click', callback)
        this.eventsAdded.push({
          el: action,
          type: 'click',
          fn: callback
        })
      })
    })
  },
  destroyed () {
    this.removeEventsListeners()
  },
  methods: {
    noAction () {
    },
    cancel () {
      if (this.cancellable) {
        if (this.cancelAction) this.cancelAction()
        this.close()
      }
    },
    close () {
      this.removeEventsListeners()
      this.show = false
    },
    removeEventsListeners () {
      this.eventsAdded.forEach((event) => {
        event.el.removeEventListener(event.type, event.fn)
      })
      this.eventsAdded.length = 0
    }
  },
  mixins: [propFill]
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
