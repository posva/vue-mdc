<style lang="stylus">
overlap-margin = 10px
i.material-icons.mdl-badge
  font-size: 32px
.mdl-badge.mdl-badge--overlap
  margin-right: overlap-margin
  &:after
    right: -(overlap-margin)
</style>

<template lang="jade">
.section
  title-link Badges
  .section__content
    p Badges let you add onscreen notifications. They are made to be used on
      code  i
      | ,
      code  span
      |  and
      code  a
      |  elements
    .flex.start.wrap
      span(v-mdl-badge='value') Inbox
      span(v-mdl-badge.no-background='value') Inbox
      i.material-icons(v-mdl-badge.overlap='text') account_box
    .flex.start.wrap
      mdl-textfield(:value.sync='value', label='Badge Number', floating-label)
      mdl-textfield(:value.sync='text', label='Badge Text', floating-label)

    p Pass the text you want to the directive:
    pre
      code.html
        p= '<span v-mdl-badge="value">Inbox</span>'
        p= '<span v-mdl-badge.no-bcakground="value">Inbox</span>'
        p= '<i class="material-icons" v-mdl-badge.overlap="text">account_box</i>'

    p You'll need to add this css to make the
      code  overlap
      |  modifier work in mdl lower than 1.0.7

    pre
      code.css.
        .mdl-badge.mdl-badge--overlap {
          margin-right: 10px;
        }
        .mdl-badge.mdl-badge--overlap:after {
          right: -10px;
        }

    table.mdl-data-table.mdl-js-data-table
      thead
        tr
          th.mdl-data-table__cell--non-numeric Modifiers
          th.mdl-data-table__cell--non-numeric Description
          th.mdl-data-table__cell--non-numeric Remarks
      tbody
        tr
          td.mdl-data-table__cell--non-numeric
            code  no-background
          td.mdl-data-table__cell--non-numeric Applies open-circle effect to badge by adding the
            code  mdl-badge--no-background
            |  class
          td.mdl-data-table__cell--non-numeric It actually switches primary and accent colorls. So you will have to add some css to make the desired open-circle effect
        tr
          td.mdl-data-table__cell--non-numeric
            code  overlap
          td.mdl-data-table__cell--non-numeric Make the badge overlap with its container by adding the
            code  mdl-badge--overlap
            |  class
          td.mdl-data-table__cell--non-numeric mdl >= 1.0.6
</template>

<script lang="coffee">
module.exports =
  data: ->
    value: 2
    text: '★'
</script>
