<template>
  <div>
    <h1>Checkboxes</h1>
    <h3>MDL</h3>
    <label class="mdl-checkbox mdl-js-checkbox mdl-js-ripple-effect" for="ori-checkbox-1">
      <input class="mdl-checkbox__input" id="ori-checkbox-1" type="checkbox" checked=""/><span class="mdl-checkbox__label">Checkbox</span>
    </label>
    <label class="mdl-checkbox mdl-js-checkbox" for="ori-checkbox-2">
      <input class="mdl-checkbox__input" id="ori-checkbox-2" type="checkbox" checked=""/><span class="mdl-checkbox__label">No ripple</span>
    </label>
    <h3>vue</h3>
    <mdl-checkbox class="added-class" id="check-dyn" v-model="check">Dynamic {{check}}</mdl-checkbox>
    <mdl-checkbox id="check"
                  type="checkbox"
                  v-model="check"
                  :disabled="disabled"
    >Check me</mdl-checkbox>
    <mdl-checkbox id="number" type="checkbox" v-model="numCheck">My value is a number</mdl-checkbox>
    <input id="classic" type="checkbox" v-model="check"/><span>Classic checkbox</span>
    <input id="disable" type="checkbox" v-model="disabled"/><span>Disable</span>
    <mdl-checkbox v-if="disabled" id="v-if" type="checkbox" v-model="check" :disabled="disabled">v-if</mdl-checkbox>
    <mdl-checkbox v-for="(label, n) in 3" :val="indexId(n)" :id="indexId(n)" type="checkbox" v-model="checks">v-for {{indexId(n)}}</mdl-checkbox>
    <p id="checks">{{checks}}</p>
  </div>
</template>

<script lang="babel">
export default {
  data () {
    return {
      numCheck: 0,
      check: true,
      checks: [],
      disabled: false
    }
  },
  methods: {
    indexId (num) {
      return `id-${num.toString()}`
    }
  }
}
</script>
