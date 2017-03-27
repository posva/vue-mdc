<template>
  <div class="mdc-card"
       :class="cardClasses"
  >
    <CardMedia v-if="media"
               class="mdc-card__media--default"
               :media="media"
               :style="mediaStyle"
    >
      <slot name="media"></slot>
    </CardMedia>
    <CardPrimary v-if="title || subtitle || $slots.primary"
                 class="mdc-card__primary"
    >
      <slot name="primary">
        <CardTitle v-if="title" large>{{ title }}</CardTitle>
        <CardSubtitle v-if="subtitle">{{ subtitle }}</CardSubtitle>
      </slot>
    </CardPrimary>
    <slot></slot>
    <CardSupportingText v-if="supportingText || $slots.supportingText">
      <slot name="supporting-text">{{ supportingText }}</slot>
    </CardSupportingText>
    <CardActions  v-if="$slots.actions">
      <slot name="actions"></slot>
    </CardActions>
  </div>
</template>

<script>
import CardPrimary from './CardPrimary'
import CardTitle from './CardTitle'
import CardSubtitle from './CardSubtitle'
import CardActions from './CardActions'
import CardMedia from './CardMedia'
import CardSupportingText from './CardSupportingText'

export default {
  props: {
    title: String,
    subtitle: String,
    supportingText: String,
    media: String,
    mediaHeight: {
      type: String,
      default: '12.313rem',
    },
    themeDark: Boolean,
  },

  components: {
    CardActions,
    CardTitle,
    CardSubtitle,
    CardMedia,
    CardSupportingText,
    CardPrimary,
  },

  computed: {
    mediaStyle () {
      return {
        height: this.mediaHeight,
      }
    },
    cardClasses () {
      return {
        'mdc-card--theme-dark': this.themeDark,
      }
    },
  },
}
</script>

<style lang="scss" src="@material/card/mdc-card.scss">
</style>

<style>
.mdc-card__media--default {
    background-size: cover;
    background-repeat: no-repeat;
}
</style>
