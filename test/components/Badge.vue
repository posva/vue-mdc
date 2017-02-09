<template>
  <div>
    <h1>Badges</h1>
    <mdl-badge :badge="badgeText"
               :overlap="overlap"
               :no-background="noBackground"
               :hide="hide"
    >
      <i id="badge" class="material-icons">{{ icon }}</i>
    </mdl-badge>
    <mdl-badge :badge="badgeText"
               :overlap="overlap"
    >
      <span ref="badgeText">{{ text }}</span>
    </mdl-badge>
    <br/>
    <input v-model="icon" type="text"/>
    <br/>
    <input v-model="badgeText" type="text"/>
    <br/>
    <input v-model="text" type="text"/>
    <br/>
    <label>
      <input v-model="overlap" type="checkbox"/> Overlap
    </label>
    <br/>
    <label>
      <input v-model="hide" type="checkbox"/> Hide
    </label>
    <br/>
    <label>
      <input v-model="noBackground" type="checkbox"/> No Background
    </label>
  </div>
</template>

<script>
export default {
  data () {
    return {
      icon: 'account_box',
      text: 'Inbox',
      badgeText: '♥',
      hide: false,
      overlap: false,
      noBackground: true
    }
  }
}
</script>

<style>
  .mdl-badge--blue[data-badge]:after {
    background: aquamarine;
  }
</style>
