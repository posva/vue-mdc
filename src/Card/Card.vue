<template>
  <div class="mdc-card">
    <CardMedia v-if="media"
               class="mdc-card__media--default"
               :media="media"
               :style="mediaStyle"
    >
      <slot name="media"></slot>
    </CardMedia>
    <section v-if="title || subtitle || $slots.primary"
             class="mdc-card__primary">
      <slot name="primary">
        <CardTitle v-if="title" large>{{ title }}</CardTitle>
        <CardSubtitle v-if="subtitle">{{ subtitle }}</CardSubtitle>
      </slot>
    </section>
    <slot></slot>
    <section class="mdc-card__supporting-text">
      Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
      veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
      commodo consequat.
    </section>
    <section class="mdc-card__actions">
      <button class="mdc-button mdc-button--compact mdc-card__action">Action 1</button>
      <button class="mdc-button mdc-button--compact mdc-card__action">Action 2</button>
    </section>
  </div>
</template>

<script>
import CardTitle from './CardTitle'
import CardSubtitle from './CardSubtitle'
import CardMedia from './CardMedia'

export default {
  name: 'MdcCard',

  props: {
    title: String,
    subtitle: String,
    media: String,
    mediaHeight: {
      type: String,
      default: '12.313rem',
    },
  },

  components: {
    CardTitle,
    CardSubtitle,
    CardMedia,
  },

  computed: {
    mediaStyle () {
      return {
        height: this.mediaHeight,
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
