<template>
  <div class="mdc-card">
    <section class="mdc-card__primary">
      <slot name="primary">
        <CardTitle v-if="title" large>{{ title }}</CardTitle>
        <h2 class="mdc-card__subtitle">Subtitle here</h2>
      </slot>
    </section>
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

export default {
  name: 'MdcCard',

  props: {
    title: String,
  },

  components: {
    CardTitle,
  },
}
</script>

<style lang="scss" src="@material/card/mdc-card.scss">
</style>
