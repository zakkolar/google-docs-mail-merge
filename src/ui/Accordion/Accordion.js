import "./Accordion.scss";

export const Accordion = {
    props: {
        title: String,
        disabled:{
            default: false
        },
        initialShow:{
            default: false
        },
    },
    created(){
        this.show = this.initialShow;
    },
    template: `<div class="accordion" v-bind:class="{disabled: disabled}">
    <div class="header" v-on:click="toggle">
      {{title}}
      <i class="fa fa-2x fa-angle-down header-icon" v-bind:class="{ rotate: show }"></i>
    </div>
  
      <div class="body" v-show="show">
        <div class="body-inner">
          <slot></slot>
        </div>
      </div>
   
  </div>`,

    data() {
        return {
            show: true
        };
    },
    methods: {
        toggle: function() {
            if(!this.disabled){
                this.show = !this.show;
            }
        },

    }
}