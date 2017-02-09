<template lang="jade">
.mdl-card.mdl-shadow--2dp
  slot(name='title' v-if='title')
    .mdl-card__title
      h2.mdl-card__title-text {{title}}
  slot(name='subtitle' v-if='subtitle')
    .mdl-card__subtitle-text {{subtitle}}
  slot(name='supporting-text' v-if='supportingText')
    .mdl-card__supporting-text {{supportingText}}
  slot(name='media' v-if='media')
    .mdl-card__media
      img(:src='media')
  // TODO this was an anchor
  slot(name='actions' v-if='actions')
    .mdl-card__actions.mdl-card--border
      mdl-anchor-button.mdl-js-ripple-effect(colored v-if='isActionsURL' v-bind:href='actions'
        v-bind:target='actionsTarget') {{actionsText}}
      mdl-button.mdl-js-ripple-effect(colored v-else @click.native='triggerActionsEvent') {{actionsText}}
  // TODO some way of creating a menu or action
  slot(name='menu' v-if='menu')
    .mdl-card__menu
      mdl-button.mdl-js-ripple-effect(icon @click.native='triggerMenuEvent')
        i.material-icons share

</template>

<script>
import mdlButton from './button.vue'
import mdlAnchorButton from './anchor-button.vue'

const slots = [
  'title',
  'subtitle',
  'supportingText',
  'media',
  'actions',
  'menu'
]

export default {
  computed: {
    isActionsURL () {
      if (typeof this.actions === 'string') {
        return this.actions.match(/^(https?:)?\/\//) != null
      } else {
        return false
      }
    }
  },
  props: {
    title: String,
    menu: String,
    actions: String,
    actionsTarget: {
      default: '_self',
      type: String
    },
    actionsText: String,
    media: String,
    subtitle: String,
    supportingText: String
  },
  mounted () {
    slots.forEach((slot, pos) => {
      if (this[slot] === true) {
        let el = this.$el.children[pos]
        if (!el || !this.$el.attributes.getNamedItem('slot')) {
          this[slot] = ''
        }
      }
    })
    // el = @$el.children[pos]?.attributes.getNamedItem 'slot'
  },
  methods: {
    triggerMenuEvent () {
      this.$emit(this.menu)
    },
    triggerActionsEvent () {
      this.$emit(this.actions)
    }
  },
  components: {
    mdlButton,
    mdlAnchorButton
  }
}
</script>
