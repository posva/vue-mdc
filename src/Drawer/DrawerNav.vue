<template>
  <List tag="nav">
    <slot></slot>
  </List>
</template>

<script>
import List from '../List/List'

export default {
  components: { List },
}
</script>
