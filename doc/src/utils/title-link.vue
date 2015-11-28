<style lang="stylus" scoped>
  @import '../style/variables'
  a
    text-decoration: none
    h3
      margin: .7em 1em .9em
      position: relative
      &:before
        content: "#";
        color: main-color
        position: absolute;
        left: -0.7em;
        top: -2px;
        font-size: 1.2em;
        font-weight: bold;
</style>

<template lang="jade">
  a(:href.once='link', :id.once='id')
    h3
      slot
</template>

<script lang="coffee">
_ = require 'lodash'
module.exports =
  data: ->
    id: 'invalid'
  computed:
    link: -> '#' + @id
  ready: ->
    @id = _.kebabCase @$el.text
</script>
