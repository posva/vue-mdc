<style lang="stylus" scoped>
  @import '../style/variables'
  a
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
</style>

<template lang="jade">
  a(:href.once='link', :id.once='id')
    h2(v-if='big')
      slot
    h3(v-else)
      slot
</template>

<script lang="coffee">
_ = require 'lodash'
module.exports =
  props: ['big']
  data: ->
    id: 'invalid'
  computed:
    link: -> '#' + @id
  ready: ->
    @id = _.kebabCase @$el.text
</script>
