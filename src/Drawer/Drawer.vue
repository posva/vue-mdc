<template>
  <aside v-if="mode === 'temporary'"
         :class="baseClass"
  >
    <nav ref="drawer" class="mdc-temporary-drawer__drawer">
      <slot name="header"></slot>
      <div class="mdc-list-group mdc-temporary-drawer__content">
        <slot></slot>
      </div>
    </nav>
  </aside>

  <nav v-else
       :class="baseClass">
    Not yet supported
  </nav>
</template>

<script>
import MDCTemporaryDrawerFoundation from '@material/drawer/temporary/foundation'
import * as util from '@material/drawer/util'
const scrollBlock = 'mdc-dialog-scroll-lock'
const {
  FOCUSABLE_ELEMENTS,
  OPACITY_VAR_NAME,
} = MDCTemporaryDrawerFoundation.strings

export default {
  props: {
    mode: {
      type: String,
      default: 'temporary',
    },
  },

  provide () {
    return {
      mode: this.mode,
    }
  },

  computed: {
    baseClass () {
      return `mdc-${this.mode}-drawer`
    },
  },

  mounted () {
    if (this.mode === 'temporary') {
      this.foundation = new MDCTemporaryDrawerFoundation({
        addClass: (className) => this.$el.classList.add(className),
        removeClass: (className) => this.$el.classList.remove(className),
        hasClass: (className) => this.$el.classList.contains(className),
        hasNecessaryDom: () => Boolean(this.$refs.drawer),
        registerInteractionHandler: (evt, handler) =>
          this.$el.addEventListener(util.remapEvent(evt), handler, util.applyPassive()),
        deregisterInteractionHandler: (evt, handler) =>
          this.$el.removeEventListener(util.remapEvent(evt), handler, util.applyPassive()),
        registerDrawerInteractionHandler: (evt, handler) =>
          this.$refs.drawer.addEventListener(util.remapEvent(evt), handler),
        deregisterDrawerInteractionHandler: (evt, handler) =>
          this.$refs.drawer.removeEventListener(util.remapEvent(evt), handler),
        registerTransitionEndHandler: (handler) => this.$refs.drawer.addEventListener('transitionend', handler),
        deregisterTransitionEndHandler: /* istanbul ignore next */ (handler) =>
          this.$refs.drawer.removeEventListener('transitionend', handler),
        registerDocumentKeydownHandler: (handler) => document.addEventListener('keydown', handler),
        deregisterDocumentKeydownHandler: (handler) => document.removeEventListener('keydown', handler),
        getDrawerWidth: /* istanbul ignore next */ () =>
          this.$refs.drawer.offsetWidth,
        setTranslateX: /* istanbul ignore next */ (value) =>
          this.$refs.drawer.style.setProperty(
            util.getTransformPropertyName(),
            value === null ? null : `translateX(${value}px)`
          ),
        updateCssVariable: (value) => {
          // istanbul ignore else
          if (util.supportsCssCustomProperties()) {
            this.$el.style.setProperty(OPACITY_VAR_NAME, value)
          }
        },
        getFocusableElements: () => this.$refs.drawer.querySelectorAll(FOCUSABLE_ELEMENTS),
        saveElementTabState: (el) => util.saveElementTabState(el),
        restoreElementTabState: /* istanbul ignore next */ (el) =>
          util.restoreElementTabState(el),
        makeElementUntabbable: (el) => el.setAttribute('tabindex', -1),
        notifyOpen: () => this.$emit('opened'),
        notifyClose: () => this.$emit('closed'),
        isRtl: /* istanbul ignore next */ () =>
          window.getComputedStyle(this.$el).getPropertyValue('direction') === 'rtl',
        isDrawer: /* istanbul ignore next */ (el) => el === this.$refs.drawer,
      })
      this.foundation.init()
    }
  },

  beforeDestroy () {
    this.foundation.destroy()
  },

  methods: {
    open () {
      this.foundation.open()
      window.document.body.classList.add(scrollBlock)
    },
    close () {
      this.foundation.close()
      window.document.body.classList.remove(scrollBlock)
    },
  },
}
</script>

<style lang="scss" src="@material/drawer/mdc-drawer.scss">
</style>

<style>
body.u-no-scroll {
  overflow: hidden;
}
</style>
