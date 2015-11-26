<style lang="stylus">
</style>

<template lang="jade">
  a(:href.once='link', :id.once='id')
    h1.mdl-typography--display-2
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
