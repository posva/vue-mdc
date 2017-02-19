<template>
  <div style="padding: 1.3rem;">
    <h1>Layout</h1>

    <mdl-checkbox v-model="fixedHeader">Fixed header</mdl-checkbox>
    <mdl-checkbox v-model="fixedDrawer">Fixed drawer</mdl-checkbox>

    <h3>Transparent header layout</h3>
    <div class="demo-layout-container">
      <mdl-layout transparent-header
                  :fixed-header="fixedHeader"
                  :fixed-drawer="fixedDrawer"
                  class="demo-layout-transparent">
        <mdl-layout-header-row title="Title here" slot="header">
          <mdl-layout-spacer/>
          <!-- Navigation -->
          <mdl-nav>
            <a class="mdl-navigation__link" href="">Link</a>
            <a class="mdl-navigation__link" href="">Link</a>
            <a class="mdl-navigation__link" href="">Link</a>
            <a class="mdl-navigation__link" href="">Link</a>
          </mdl-nav>
        </mdl-layout-header-row>

        <mdl-layout-drawer title="Title Here">
          <mdl-nav>
            <a class="mdl-navigation__link" href="">Link</a>
            <a class="mdl-navigation__link" href="">Link</a>
            <a class="mdl-navigation__link" href="">Link</a>
            <a class="mdl-navigation__link" href="">Link</a>
          </mdl-nav>
        </mdl-layout-drawer>

        <mdl-layout-content>
          <h3>Test Content</h3>
          <p>Here is some content</p>
        </mdl-layout-content>
      </mdl-layout>
    </div>

    <h3>Default Layout</h3>
    <div class="demo-layout-container">
      <mdl-layout id="layout"
                  :fixed-header="fixedHeader"
                  :fixed-drawer="fixedDrawer"
      >
        <mdl-layout-header-row title="Title here" slot="header">
          <mdl-layout-spacer/>
          <!-- Navigation -->
          <mdl-nav>
            <a class="mdl-navigation__link" href="">Link</a>
            <a class="mdl-navigation__link" href="">Link</a>
            <a class="mdl-navigation__link" href="">Link</a>
            <a class="mdl-navigation__link" href="">Link</a>
          </mdl-nav>
        </mdl-layout-header-row>

        <mdl-layout-drawer title="Title Here">
          <mdl-nav>
            <a class="mdl-navigation__link" href="">Link</a>
            <a class="mdl-navigation__link" href="">Link</a>
            <a class="mdl-navigation__link" href="">Link</a>
            <a class="mdl-navigation__link" href="">Link</a>
          </mdl-nav>
        </mdl-layout-drawer>

        <mdl-layout-content>
          <div class="page-content">
          </div>
        </mdl-layout-content>
      </mdl-layout>
    </div>

    <h3>Waterfall Layout</h3>
    <div class="demo-layout-container">
      <mdl-layout :fixed-header="fixedHeader"
                  :fixed-drawer="fixedDrawer"
                  waterfall
      >
        <mdl-layout-header-row title="Title here" slot="header">
          <div class="mdl-layout-spacer"></div>
          <mdl-textfield id="search" expandable="search"></mdl-textfield>
        </mdl-layout-header-row>

        <mdl-layout-header-row slot="header">
          <mdl-layout-spacer/>
          <!-- Navigation -->
          <mdl-nav>
            <a class="mdl-navigation__link" href="">Link</a>
            <a class="mdl-navigation__link" href="">Link</a>
            <a class="mdl-navigation__link" href="">Link</a>
            <a class="mdl-navigation__link" href="">Link</a>
          </mdl-nav>
        </mdl-layout-header-row>

        <mdl-layout-drawer title="Title Here">
          <mdl-nav>
            <a class="mdl-navigation__link" href="">Link</a>
            <a class="mdl-navigation__link" href="">Link</a>
            <a class="mdl-navigation__link" href="">Link</a>
            <a class="mdl-navigation__link" href="">Link</a>
          </mdl-nav>
        </mdl-layout-drawer>

        <mdl-layout-content>
          <div class="page-content">
          </div>
        </mdl-layout-content>
      </mdl-layout>
    </div>

  </div>
</template>

<script>
export default {
  data () {
    return {
      fixedHeader: false,
      fixedDrawer: false
    }
  }
}
</script>

<style>
.demo-layout-container {
  box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 1px 5px 0 rgba(0, 0, 0, 0.12);
  width: 100%;
  position: relative;
  height: 300px;
}

.demo-layout-transparent {
  background: url('https://getmdl.io/assets/demos/transparent.jpg') center / cover;
}

.demo-layout-transparent, .mdl-layout__content {
  color: white;
  padding: 0 1rem;
}

.page-content {
  height: 500px;
}
</style>
