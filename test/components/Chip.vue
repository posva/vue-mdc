<template>
  <div>
    <h1>Chips</h1>
    <h3>Vue</h3>
    <mdl-chip id="chip">Basic chip</mdl-chip>
    <mdl-chip id="delete" @delete="deleteChip"
              v-if="!deleted"
              :delete-icon="deleteIcon"
    >Deletable chip</mdl-chip>
    <mdl-chip id="contact" :contact="contact">Contact Chip</mdl-chip>
    <mdl-chip id="image" contact-image="https://getmdl.io/templates/dashboard/images/user.jpg">Image Contact Chip</mdl-chip>
  </div>
</template>

<script>
export default {
  data () {
    return {
      deleted: false,
      contact: 'ES',
      deleteIcon: 'cancel'
    }
  },
  methods: {
    deleteChip () {
      this.deleted = true
    }
  }
}
</script>
