<template>
  <aside :id="id"
         style="visibility:hidden"
         class="mdc-dialog"
         role="alertdialog"
         :aria-labelledby="labelId"
         :aria-describedby="descriptionId">
    <div class="mdc-dialog__surface" ref="surface">
      <header class="mdc-dialog__header">
        <slot name="header">
          <h2 :id="labelId"
              class="mdc-dialog__header__title">{{ title }}</h2>
        </slot>
      </header>
      <section :id="descriptionId"
               :class="bodyClasses"
               class="mdc-dialog__body">
        <slot></slot>
      </section>
      <footer class="mdc-dialog__footer">
        <slot name="footer">
          <MdcButton class="mdc-dialog__footer__button mdc-dialog__footer__button--cancel"
                     v-ripple
                     v-if="cancelText"
          >{{ cancelText }}</MdcButton>
          <MdcButton class="mdc-dialog__footer__button mdc-dialog__footer__button--accept"
                     v-ripple
                     ref="accept"
          >{{ acceptText || 'OK' }}</MdcButton>
        </slot>
      </footer>
    </div>
    <div class="mdc-dialog__backdrop"></div>
  </aside>
</template>

<script>
import MDCDialogFoundation from '@material/dialog/foundation'
import { createFocusTrapInstance } from '@material/dialog/util'
import MdcButton from '../Button'
import ripple from '../ripple'

export default {
  props: {
    scrollable: [Boolean, String],
    title: String,
    acceptText: String,
    cancelText: String,
    id: [String, Boolean],
  },

  computed: {
    bodyClasses () {
      return {
        'mdc-dialog__body--scrollable': this.scrollable,
      }
    },
    labelId () {
      return this.id ? `${this.id}__label` : false
    },
    descriptionId () {
      return this.id ? `${this.id}__description` : false
    },
  },

  mounted () {
    this.focusTrap_ = createFocusTrapInstance(this.$refs.surface, this.$refs.accept)
    this.foundation = new MDCDialogFoundation({
      addClass: (className) => this.$el.classList.add(className),
      removeClass: (className) => this.$el.classList.remove(className),
      setStyle: (prop, val) => this.$el.style.setProperty(prop, val),
      addBodyClass: (className) => document.body.classList.add(className),
      removeBodyClass: (className) => document.body.classList.remove(className),
      eventTargetHasClass: (target, className) => target.classList.contains(className),
      registerInteractionHandler: (evt, handler) => this.$el.addEventListener(evt, handler),
      deregisterInteractionHandler: (evt, handler) => this.$el.removeEventListener(evt, handler),
      registerSurfaceInteractionHandler: (evt, handler) => this.$refs.surface.addEventListener(evt, handler),
      deregisterSurfaceInteractionHandler: (evt, handler) => this.$refs.surface.removeEventListener(evt, handler),
      registerDocumentKeydownHandler: (handler) => document.addEventListener('keydown', handler),
      deregisterDocumentKeydownHandler: (handler) => document.removeEventListener('keydown', handler),
      notifyAccept: () => this.$emit('accepted'),
      notifyCancel: () => this.$emit('canceled'),
      trapFocusOnSurface: () => this.focusTrap_.activate(),
      untrapFocusOnSurface: () => this.focusTrap_.deactivate(),
    })

    this.foundation.init()
  },

  beforeDestroy () {
    this.foundation.destroy()
  },

  methods: {
    open () {
      this.foundation.open()
    },
    close () {
      this.foundation.close()
    },
  },

  components: { MdcButton },
  directives: { ripple },
}
</script>

<style lang="scss" src="@material/dialog/mdc-dialog.scss">
</style>
