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
      code i
      | , 
      code span
      |  and 
      code a
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
        p= '<span v-mdl-badge.no-background="value">Inbox</span>'
        p= '<i class="material-icons" v-mdl-badge.overlap="text">account_box</i>'

    p You'll need to add this css to make the 
      code overlap
      |  modifier work in mdl lower than 1.0.7

    pre
      code.css.
        .mdl-badge.mdl-badge--overlap {
          margin-right: 10px;
        }
        .mdl-badge.mdl-badge--overlap:after {
          right: -10px;
        }

    p You can automatically hide the badge depending on the value using the 
      code hide-badge
      |  param. If you want to hide the badge when the value is a number and it's below or equal to 0, you can use the 
      code number
      |  modifier instead. You can also combine both of them
    div
      span(v-mdl-badge='num', :hide-badge='zero') Inbox
      span(v-mdl-badge.number='num', :hide-badge='hide') Inbox
    .flex.start.wrap
      mdl-slider(min=0 max=15 v-bind:value.sync='num')
      mdl-checkbox(:checked.sync='hide') Hide

    pre
      code.html
        p= '<span v-mdl-badge="num">Inbox</span>'
        p= '<span v-mdl-badge.number="num" :hide-badge="hide">Inbox</span>'
      code.javascript.
        new Vue({
          data: {
            num: 3,
            hide: true
          },
          computed: {
            zero: function() {
              return parseInt(this.num, 10) &lt;= 0
            }
          }
        })

    table.mdl-data-table.mdl-js-data-table
      thead
        tr
          th.mdl-data-table__cell--non-numeric Modifiers
          th.mdl-data-table__cell--non-numeric Description
          th.mdl-data-table__cell--non-numeric Remarks
      tbody
        tr
          td.mdl-data-table__cell--non-numeric
            code no-background
          td.mdl-data-table__cell--non-numeric Applies open-circle effect to badge by adding the
            code mdl-badge--no-background
            |  class
          td.mdl-data-table__cell--non-numeric It actually switches primary and accent colorls. So you will have to add some css to make the desired open-circle effect
        tr
          td.mdl-data-table__cell--non-numeric
            code overlap
          td.mdl-data-table__cell--non-numeric Make the badge overlap with its container by adding the
            code mdl-badge--overlap
            |  class
          td.mdl-data-table__cell--non-numeric mdl >= 1.0.6
        tr
          td.mdl-data-table__cell--non-numeric
            code number
          td.mdl-data-table__cell--non-numeric Automatically hide the badge when the given value isn't a number or is below or equal to 0
          td.mdl-data-table__cell--non-numeric When using the 
            code hide-badge
            |  param, this modifier has lower priority
</template>

<script>
export default {
  data () {
    return {
      value: 2,
      num: 3,
      text: '★',
      hide: false
    }
  },
  computed: {
    zero () {
      return parseInt(this.num, 10) <= 0
    }
  }
}
</script>
