<template lang="jade">
div
  h1 Select
  h3 vue
  mdl-checkbox(type="checkbox" v-model='visible') Visible
  p Country {{country}}
  mdl-select#select(v-if='visible', label='Country', v-model='country', :options='countriesArray')
  p Country Val {{countryVal}}
  mdl-select#select-val(ref='selectVal' label='Country', v-model='countryVal', :options='countries')
</template>

<script lang="babel">
export default {
  data () {
    return {
      country: 'Russia',
      countryVal: 'es',
      changes: 0,
      visible: true,
      countriesArray: ['Russia', 'Spain', 'France', 'China'],
      countries: [
        {
          name: 'Select One',
          value: ''
        },
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
