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

<template lang="jade">
router-link.title-link(:to='link', :id.once='id', :class="{'title-link--big': big}")
  component(:is='header')
    slot
</template>

<script>
import _ from 'lodash'

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
    },
    header () {
      return this.big ? 'h2' : 'h3'
    }
  },
  ready () {
    this.id = _.kebabCase(this.$el.text)
  }
}
</script>
