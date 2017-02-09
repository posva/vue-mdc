<template>
  <div>
    <h1>Icon toggle</h1>
    <h3>MDL</h3>
    <label class="mdl-icon-toggle mdl-js-icon-toggle mdl-js-ripple-effect" for="icon-toggle-1">
      <input class="mdl-icon-toggle__input" id="icon-toggle-1" type="checkbox" checked=""/><i class="mdl-icon-toggle__label material-icons">format_bold</i>
    </label>
    <label class="mdl-icon-toggle mdl-js-icon-toggle mdl-js-ripple-effect" for="icon-toggle-2">
      <input class="mdl-icon-toggle__input" id="icon-toggle-2" type="checkbox" checked=""/><i class="mdl-icon-toggle__label material-icons">face</i>
    </label>
    <label class="mdl-icon-toggle mdl-js-icon-toggle mdl-js-ripple-effect" for="icon-toggle-3">
      <input class="mdl-icon-toggle__input" id="icon-toggle-3" type="checkbox" checked=""/><i class="mdl-icon-toggle__label material-icons">http</i>
    </label>
    <h3>vue</h3>
    <!-- We can also use the jade syntax #id for literal ids-->
    <mdl-icon-toggle class="added-class" id="it" icon="face" type="checkbox" v-model="check" :disabled="disabled"></mdl-icon-toggle>
    <mdl-icon-toggle id="dit" :icon="icon" type="checkbox" v-model="check"></mdl-icon-toggle>
    <input id="dit-val" type="text" v-model="icon"/>
    <input id="classic" type="checkbox" v-model="check"/><span>Classic icon-toggle</span>
    <input id="disable" type="checkbox" v-model="disabled"/><span>Disable</span>
    <mdl-icon-toggle v-if="disabled" icon="face" id="v-if" type="checkbox" v-model="check" :disabled="disabled"></mdl-icon-toggle>
    <mdl-icon-toggle v-for="(label, n) in 3" icon="face" :val="indexId(n)" :id="indexId(n)" type="checkbox" v-model="checks"></mdl-icon-toggle>
    <p id="its">{{checks}}</p>
  </div>
</template>

<script>
export default {
  data () {
    return {
      check: true,
      checks: [],
      disabled: false,
      icon: 'code'
    }
  },
  methods: {
    indexId (num) {
      return 'id-' + num.toString()
    }
  }
}
</script>
