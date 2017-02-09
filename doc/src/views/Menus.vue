<template>
  <div class="section">
    <title-link>Menus</title-link>
    <div class="section__content">
      <p>Menus are lists of actions. They are linked to some button by a<code>for</code> prop. In order to appear in the right position you need to include it inside a&nbsp;<code>position: relative</code> block. They do not any options yet</p>

      <div class="flex center wrap">
        <div class="bar">
          <mdl-button id="menu-example" icon="icon"><i class="material-icons">more_vert</i></mdl-button>
          <mdl-menu for="menu-example">
            <mdl-menu-item>Option 1</mdl-menu-item>
            <mdl-menu-item disabled="disabled">Disabled Action</mdl-menu-item>
            <mdl-menu-item>Other Action</mdl-menu-item>
          </mdl-menu>
        </div>
      </div>

      <pre><code v-highlight class="css">
.bar {
  position: relative;
  background: #3F51B5;
  color: white;
  height: 64px;
  padding: 16px;
}
      </code>
      <code v-highlight class="html"><p>&lt;div class=&quot;bar&quot;&gt;</p><p>  &lt;mdl-button id=&quot;menu-example&quot; icon&gt;</p><p>    &lt;i class=&quot;material-icons&quot;&gt;more_vert&lt;/i&gt;</p><p>  &lt;/mdl-button&gt;</p><p>  &lt;mdl-menu for=&quot;menu-example&quot;&gt;</p><p>    &lt;mdl-menu-item&gt;Option 1&lt;/mdl-menu-item&gt;</p><p>    &lt;mdl-menu-item disabled=&quot;disabled&quot;&gt;Disabled Action&lt;/mdl-menu-item&gt;</p><p>    &lt;mdl-menu-item&gt;Other Action&lt;/mdl-menu-item&gt;</p><p>  &lt;/mdl-menu&gt;</p><p>&lt;/div&gt;</p></code></pre></div>
  </div>
</template>

<script>
export default {}
</script>

<style scoped>
.bar {
  position: relative;
  background: #3F51B5;
  color: white;
  height: 64px;
  padding: 16px;
}
</style>
