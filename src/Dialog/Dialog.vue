<template>
  <aside id="mdc-dialog-with-list"
         style="visibility:hidden"
         class="mdc-dialog"
         role="alertdialog"
         aria-labelledby="mdc-dialog-with-list-label"
         aria-describedby="mdc-dialog-with-list-description">
    <div class="mdc-dialog__surface" ref="surface">
      <header class="mdc-dialog__header">
        <h2 id="mdc-dialog-with-list-label" class="mdc-dialog__header__title">
          Choose a Ringtone
        </h2>
      </header>
      <section id="mdc-dialog-with-list-description" class="mdc-dialog__body mdc-dialog__body--scrollable">
        <ul class="mdc-list">
          <li class="mdc-list-item">None</li>
          <li class="mdc-list-item">Callisto</li>
          <li class="mdc-list-item">Ganymede</li>
          <li class="mdc-list-item">Luna</li>
          <li class="mdc-list-item">Marimba</li>
          <li class="mdc-list-item">Schwifty</li>
          <li class="mdc-list-item">Callisto</li>
          <li class="mdc-list-item">Ganymede</li>
          <li class="mdc-list-item">Luna</li>
          <li class="mdc-list-item">Marimba</li>
          <li class="mdc-list-item">Schwifty</li>
        </ul>
      </section>
      <footer class="mdc-dialog__footer">
        <button type="button" class="mdc-button mdc-dialog__footer__button mdc-dialog__footer__button--cancel">Decline</button>
        <button type="button" class="mdc-button mdc-dialog__footer__button mdc-dialog__footer__button--accept" ref="accept">Accept</button>
      </footer>
    </div>
    <div class="mdc-dialog__backdrop"></div>
  </aside>
</template>

<script>
import MDCDialogFoundation from '@material/dialog/foundation'
import * as util from '@material/dialog/util'

export default {
  mounted () {
    this.focusTrap_ = util.createFocusTrapInstance(this.$refs.surface, this.$refs.accept)
    this.mdcDialog = new MDCDialogFoundation({
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
      notifyAccept: () => this.$emit('accept'),
      notifyCancel: () => this.$emit('cancel'),
      trapFocusOnSurface: () => this.focusTrap_.activate(),
      untrapFocusOnSurface: () => this.focusTrap_.deactivate(),
    })
  },

  methods: {
    open () {
      this.mdcDialog.open()
    },
    close () {
      this.mdcDialog.close()
    },
  },
}
</script>

<style lang="scss" src="@material/dialog/mdc-dialog.scss">
</style>
