<template>
  <router-link :id="id"
               :to="link"
               :class="{'title-link--big': big }"
               class="title-link"
  >
    <h2 v-if="big">
      <slot></slot>
    </h2>
    <h3 v-else>
      <slot></slot>
    </h3>
  </router-link>
</template>

<script>
import { kebabCase } from 'lodash'

export default {
  props: ['big'],
  data () {
    return {
      id: 'invalid'
    }
  },
  computed: {
    link () {
      return '/' + this.id
    }
  },
  mounted () {
    this.id = kebabCase(this.$el.text)
  }
}
</script>

<style lang="stylus">
@import '../style/variables'

a.title-link
  text-decoration: none
  color: main-color
  h3, h2
    margin: .7em 1em .9em
    position: relative
    &:before
      content: "#";
      color: accent-color
      position: absolute;
      left: -0.7em;
      top: -2px;
      font-size: 1.2em;
      font-weight: bold;
.page-content
  .title-link.title-link--big + div
    padding: 0 48px
  .title-link + div
    padding: 0 32px
</style>
