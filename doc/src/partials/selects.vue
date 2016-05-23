<style lang="stylus">
</style>

<template lang="jade">
.section
  title-link Selects
  .section__content
    p Selects are based on the
      a(href='https://github.com/CreativeIT/getmdl-select/' target='_blank')  getmdl-select
      |  and are supposed to replace the &nbsp;
      code select
      |  html element.

    .flex.center.wrap
      mdl-select#country-select(label='Country', :value.sync='country', :options='countriesArray')
    .flex.center.wrap
      p Selected country is {{country}}
    pre
      code.html
        p= '<mdl-select label="Country" id="contry-select" :value.sync="country" :options="countriesArray"></mdl-select>'
      code.javascript.
        new Vue({
          data: {
            country: 'Spain',
            countryArrays: ['Russia', 'Spain', 'France', 'China']
          }
        })

    p Provide the options as an array of Values or as an array of objects
      | with a&nbsp;
      code name
      |  and a &nbsp;
      code value
      |  properties.

    .flex.center.wrap
      mdl-select#country-select-2(label='Country', :value.sync='countryVal', :options='countries')
    .flex.center.wrap
      p Selected country is {{countryVal}}
    pre
      code.html
        p= '<mdl-select label="Country" id="contry-select" :value.sync="country" :options="countries"></mdl-select>'
      code.javascript.
        new Vue({
          data: {
            country: 'Spain',
            countries: [
              {
                name: 'Russia',
                value: 'ru'
              },
              {
                name: 'Spain',
                value: 'es'
              },
              {
                name: 'France',
                value: 'fr'
              },
              {
                name: 'China',
                value: 'cn'
              }
            ]
          }
        })

    p MDL need an&nbsp;
      code id
      |  to handle the menu toggling.
</template>

<script>
export default {
  data () {
    return {
      country: 'Spain',
      countryVal: 'es',
      countriesArray: ['Russia', 'Spain', 'France', 'China'],
      countries: [
        {
          name: 'Russia',
          value: 'ru'
        },
        {
          name: 'Spain',
          value: 'es'
        },
        {
          name: 'France',
          value: 'fr'
        },
        {
          name: 'China',
          value: 'cn'
        }
      ]
    }
  }
}
</script>
