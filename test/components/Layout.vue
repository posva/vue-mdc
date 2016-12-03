<template>
    <div style="margin: 25px;">
        <h1>Layout</h1>

        <h3>Fixed Header</h3>
        <div class="single-container">
        <mdl-layout fixed-header class="single-container">
            <mdl-header-row :title="title" slot="header">
            </mdl-header-row>

            <mdl-content>
                <h3>Test Content</h3>
                <p>{{content}}</p>
            </mdl-content>
        </mdl-layout>
        </div>
        
        <h3>Fixed Drawer</h3>
        <div class="single-container">
        <mdl-layout fixed-header fixed-drawer class="single-container">
            <mdl-header-row :title="title" slot="header">
            </mdl-header-row>

            <mdl-drawer title="Drawer Content">
            </mdl-drawer>
            
            <mdl-content>
                <h3>Test Content</h3>
                <p>{{content}}</p>
            </mdl-content>
        </mdl-layout>
        </div>

        <h3>Waterfall Header</h3>
        <div class="single-container">
        <mdl-layout fixed-header waterfall class="single-container">
            <mdl-header-row :title="title" slot="header">
            </mdl-header-row>
            <mdl-header-row slot="header">
                <div class="mdl-layout-spacer"></div>
                <!-- Navigation -->
                <nav class="mdl-navigation">
                    <a class="mdl-navigation__link" href="">Link</a>
                    <a class="mdl-navigation__link" href="">Link</a>
                    <a class="mdl-navigation__link" href="">Link</a>
                    <a class="mdl-navigation__link" href="">Link</a>
                </nav>
            </mdl-header-row>

            <mdl-content>
                <div class="scroll-content">
                <h3>Test Content</h3>
                <p>{{content}}</p>
                </div>
            </mdl-content>
        </mdl-layout>
        </div>

        <h3>Tabs</h3>
        <div class="single-container">
        <mdl-layout fixed-header class="single-container">
            <mdl-header-row :title="title" slot="header">
            </mdl-header-row>

            <mdl-content>
              <mdl-layout-tab title="First">
                <h4>First</h4>
                <p>Tab content</p>
              </mdl-layout-tab>

              
              <mdl-layout-tab title="Second">
                <h4>Second</h4>
                <p>Some more content</p>
              </mdl-layout-tab>
            </mdl-content>
        </mdl-layout>
        </div>
    </div>
</template>

<script>
export default {
  data () {
    return {
      title: 'Test Title',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla pharetra ultricies sem, dapibus imperdiet est pellentesque et. Donec at turpis at tortor auctor convallis. Pellentesque non interdum ante. Aenean sed tempor quam, sit amet viverra elit. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nullam ac elit varius, elementum odio sed, tincidunt leo. Nullam ac porta mauris. Aenean posuere, nibh nec ultrices euismod, enim tortor venenatis tortor, eget ullamcorper quam mi vitae nibh. Etiam mollis efficitur augue. Vestibulum nec lacus sed nisi pretium blandit tempus sit amet tortor. Nulla tincidunt nec ligula ut porttitor.'
    }
  }
}
</script>

<style>
    .single-container {
        width: 100%;
        height: 250px;
        overflow-y: auto;
        margin-bottom: 25px;
    }

    .scroll-content {
        height: 500px;
    }
</style>
