<template>
  <span class="mdl-layout-title mdl-layout-title--icon">
    <i class="material-icons">{{ menu.icon }}</i>
    <span>{{ menu.name }}</span>
  </span>
</template>

<script>
export default {
  props: {
    menu: {
      type: Object,
      required: true
    }
  }
}
</script>
