<template>
  <div class="section">
    <title-link>Selects</title-link>
    <div class="section__content">
      <p>Selects are based on the<a href="https://github.com/CreativeIT/getmdl-select/" target="_blank"> getmdl-select</a> and are supposed to replace the &nbsp;<code>select</code> html element.</p>
      <div class="flex center wrap">
        <mdl-select id="country-select" label="Country" :value.sync="country" :options="countriesArray"></mdl-select>
      </div>
      <div class="flex center wrap">
        <p>Selected country is {{country}}</p>
      </div>

      <pre>
        <code v-highlight class="html"><p>&lt;mdl-select label=&quot;Country&quot; id=&quot;contry-select&quot; :value.sync=&quot;country&quot; :options=&quot;countriesArray&quot;&gt;&lt;/mdl-select&gt;</p></code>
        <code v-highlight class="javascript">new Vue({
  data: {
    country: 'Spain',
    countryArrays: ['Russia', 'Spain', 'France', 'China']
  }
})
      </code></pre>

      <p>Provide the options as an array of Values or as an array of objects with a&nbsp;<code>name</code> and a &nbsp;<code>value</code> properties.</p>
      <div class="flex center wrap">
        <mdl-select id="country-select-2" label="Country" :value.sync="countryVal" :options="countries"></mdl-select>
      </div>
      <div class="flex center wrap">
        <p>Selected country is {{countryVal}}</p>
      </div>

      <pre>
        <code v-highlight class="html"><p>&lt;mdl-select label=&quot;Country&quot; id=&quot;contry-select&quot; :value.sync=&quot;country&quot; :options=&quot;countries&quot;&gt;&lt;/mdl-select&gt;</p></code>
        <code v-highlight class="javascript">new Vue({
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
      </code></pre>

      <p>MDL need an&nbsp;<code>id</code> to handle the menu toggling.</p>
      <p>TODO talk about overflow-y auto and max-height: x !important</p>
    </div>
  </div>
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
