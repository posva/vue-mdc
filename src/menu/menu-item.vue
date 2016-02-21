<template lang="jade">
li.mdl-menu__item
  slot
</template>

<script>
export default {}
// MDL code doesn't expose some method to do this and I prefer not
// to copy paster some code from it. Ripple effect won't be usable
// until then
// parent = @$el.$parent.$el
// if parent.MaterialMenu? and parent.classList.contains 'mdl-js-ripple-effect'
</script>
