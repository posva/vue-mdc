<template>
  <span class="mdl-chip"
        :class="chipClasses"
  >
    <slot name="chip-contact">
      <span class="mdl-chip__contact mdl-color--teal mdl-color-text--white"
            v-if="contact"
      >{{ contact }}</span>
      <img class="mdl-chip__contact"
           v-if="contactImage"
           :src="contactImage"/>
    </slot>
    <span class="mdl-chip__text">
      <slot></slot>
    </span>
    <a href="#"
       @click.prevent="$emit('delete')"
       class="mdl-chip__action"
       v-if="deletable"
    >
      <i class="material-icons">{{ deleteIcon }}</i>
    </a>
  </span>
</template>

<script>
export default {
  data () {
    return {
      deletable: !!this._events.delete
    }
  },
  props: {
    deleteIcon: {
      type: String,
      default: 'cancel'
    },
    contactImage: String,
    contact: String
  },
  computed: {
    hasContact () {
      this.contactImage
      return this.contact || this.contactImage
    },
    chipClasses () {
      return {
        'mdl-chip--contact': this.hasContact,
        'mdl-chip--deletable': this.deletable
      }
    }
  }
}
</script>
