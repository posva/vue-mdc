<template>
  <div class="section">
    <title-link>Ripple Effect</title-link>
    <div class="section__content">
      <p>Add the ripple effect by adding the <code>mdl-js-ripple-effect</code> class to any component that supports it:
        <ul>
          <li>Radio Buttons</li>
          <li>Buttons</li>
          <li>Checkboxes</li>
          <li>Icon Toggles</li>
          <li>Switches</li>
        </ul>
      </p>

      <p>Make sure the class is statically added (not using <code>v-bind</code>)</p>

      <div class="flex start wrap">
        <mdl-radio v-model="radio" val="radio" class="mdl-js-ripple-effect">Radio</mdl-radio>
      </div>
      <div class="flex start wrap">
        <mdl-button raised="raised" colored="colored" class="mdl-js-ripple-effect">Button</mdl-button>
      </div>
      <div class="flex start wrap">
        <mdl-checkbox v-model="check" class="reset-width mdl-js-ripple-effect">Checkbox</mdl-checkbox>
      </div>
      <div class="flex start wrap">
        <mdl-icon-toggle v-model="check" icon="format_bold" class="mdl-js-ripple-effect"></mdl-icon-toggle>
      </div>
      <div class="flex start wrap">
        <mdl-switch v-model="check" class="reset-width mdl-js-ripple-effect">Switch</mdl-switch>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      check: true,
      radio: 'option'
    }
  }
}
</script>
