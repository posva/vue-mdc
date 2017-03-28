<template>
  <div class="mdc-card"
       :class="cardClasses"
  >
    <card-media v-if="media"
               class="mdc-card__media--default"
               :media="media"
               :style="mediaStyle"
    >
      <slot name="media"></slot>
    </card-media>
    <card-primary v-if="title || subtitle || $slots.primary"
                 class="mdc-card__primary"
    >
      <slot name="primary">
        <card-title v-if="title" large>{{ title }}</card-title>
        <card-subtitle v-if="subtitle">{{ subtitle }}</card-subtitle>
      </slot>
    </card-primary>
    <slot></slot>
    <card-supporting-text v-if="supportingText || $slots.supportingText">
      <slot name="supporting-text">{{ supportingText }}</slot>
    </card-supporting-text>
    <card-actions  v-if="$slots.actions">
      <slot name="actions"></slot>
    </card-actions>
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
