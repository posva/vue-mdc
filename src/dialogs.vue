<template lang="jade">
.mdl-dialogs(v-show='switch' v-bind:for='for')
  .mdl-dialog
    .mdl-dialog__content
      .mdl-dialog__header
        h4 {{title}}
      p {{content}}
    .mdl-dialog__actions
      mdl-button.mdl-js-ripple-effect(v-bind:id.once='closeButton') close
</template>

<script>
  /* global componentHandler*/
  import propFill from './mixins/prop-fill'
  import mdlButton from './button.vue'

  export default {
    props: {
      for: {
        required: true,
        type: String
      },
      title:{
        required: true,
        type: String
      },
      content:{
        required: true,
        type: String
      },
      switch: {
        type: Boolean,
        default: false
      },
      closeButton: {
        type: String,
        default: 'dialogsClose'
      }
    },
    ready () {
        const switchElementOn = document.getElementById(this.for)
        const switchElementOff = document.getElementById(this.closeButton)
        switchElementOn.addEventListener('click',this.dialogsSwitchOn,false)
        switchElementOff.addEventListener('click',this.dialogsSwitchOff,false)
    },
    methods: {
      dialogsSwitchOn:function (e) {
          if(!this.switch){
              return this.switch = true
          }
      },
      dialogsSwitchOff:function(e){
          if(this.switch){
              return this.switch = false
          }
      }
    },
    mixins: [propFill]
  }
</script>
<style>
    .mdl-dialogs {
        position: fixed;
        width: 100%;
        height: 100%;
        display: flex;
        flex-wrap: wrap;
        justify-content:center;
        align-items: center;
        top:0;
        left: 0;
        z-index: 10000;
        background: rgba(0,0,0,0.3);
    }
    .mdl-dialog{
        background-color:white;
    }
</style>
