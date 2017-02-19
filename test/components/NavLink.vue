<template>
  <div>
    <h1>Navlink</h1>
    <mdl-nav-link :icon="icon" href="/href">Account</mdl-nav-link>
    <br/>
    <input v-model="icon" type="text"/>
  </div>
</template>

<script>
export default {
  data () {
    return {
      icon: 'account_box'
    }
  }
}
</script>
