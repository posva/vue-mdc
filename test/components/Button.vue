<template>
  <div>
    <h1>Buttons</h1>
    <h3>MDL</h3>
    <h4>Rects</h4>
    <button class="mdl-button mdl-js-button">Normal</button><button class="mdl-button mdl-js-button mdl-js-ripple-effect">Normal</button><button class="mdl-button mdl-js-button" disabled="disabled">Normal</button>
    <h3>vue</h3>
    <mdl-button>{{someText}}</mdl-button>
    <mdl-button id='html-button' raised colored>Should be raised</mdl-button>
    <mdl-button id="disable-btn" v-bind:disabled="disable" @click="disable=true">Disable</mdl-button>
    <br/>
    <mdl-button id="if" v-if="disable" :colored="colored" :raised="raised" :fab="fab" :mini-fab="miniFab" :primary="primary" :accent="accent" :icon="iconProp">Multiple</mdl-button>
    <br/><br/>
    <mdl-button class="added-class" id="button" :colored="colored" :raised="raised" :fab="fab" :mini-fab="miniFab" :primary="primary" :accent="accent" :icon="iconProp">Multiple</mdl-button>
    <br/>
    <mdl-button class="added-class" id="icon-button" :colored="colored" :raised="raised" :fab="fab" :mini-fab="miniFab" :primary="primary" :accent="accent" :icon="iconProp"></mdl-button>
    <br/>
    <mdl-anchor-button id="anchor-button" :href="href" target="_blank">{{href | urlName}}</mdl-anchor-button>
    <br/>
    <input id="disable" type="checkbox" v-model="disable"/>
    <label for="disable">Disable</label>
    <br/>
    <input id="colored" type="checkbox" v-model="colored"/>
    <label for="colored">Colored</label>
    <br/>
    <input id="raised" type="checkbox" v-model="raised"/>
    <label for="raised">Raised</label>
    <br/>
    <input id="fab" type="checkbox" v-model="fab"/>
    <label for="fab">Fab</label>
    <br/>
    <input id="mini-fab" type="checkbox" v-model="miniFab"/>
    <label for="mini-fab">Mini Fab</label>
    <br/>
    <input id="primary" type="checkbox" v-model="primary"/>
    <label for="primary">Primary</label>
    <br/>
    <input id="accent" type="checkbox" v-model="accent"/>
    <label for="accent">Accent</label>
    <br/>
    <input id="icon" type="text" v-model="icon"/>
    <label for="icon">Icon</label>
    <br/>
    <input type="text" v-model="someText"/>
  </div>
</template>

<script lang="babel">
export default {
  data () {
    return {
      someText: 'Dynamic text',
      disable: false,
      icon: '',
      accent: false,
      primary: false,
      miniFab: false,
      fab: false,
      raised: false,
      colored: false,
      href: 'http://vuejs.org'
    }
  },
  computed: {
    iconProp () {
      return this.icon ? this.icon : false
    }
  },
  filters: {
    urlName (url) {
      return url.replace(/^(https?:)?\/\//i, '')
      .replace(/\/+$/, '')
      .replace('/', ' ')
    }
  }
}
</script>
