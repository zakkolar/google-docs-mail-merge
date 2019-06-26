import "./Accordion.scss";

export const Accordion = {
    install: function(Vue, opts){
        Vue.component('accordion', {
            props: {
                title: String,
                disabled:{
                    default: false
                },
                initialShow:{
                    default: false
                },
                id: {
                    type: String,
                    required: true
                }
            },
            created(){
                this.show = this.initialShow;
            },
            template: `<div class="accordion" v-bind:class="{disabled: disabled}">
    <div class="header" v-bind:aria-controls="id" v-bind:id="makeButtonId(id)" v-on:click="toggle" tabindex="0" v-on:keydown="keyDown" v-bind:aria-disabled="disabled" role="button" v-bind:aria-expanded="show ? 'true' : 'false'" v-bind:aria-pressed="show ? 'true' : 'false'">
      {{title}}
      <i class="fa fa-2x fa-angle-down header-icon" aria-hidden="true" v-bind:class="{ rotate: show }"></i>
    </div>
  
      <div class="body" v-show="show" v-bind:aria-labelledby="makeButtonId(id)" role="region"  v-bind:id="id">
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
                makeButtonId(id){
                    return id+"-button"
                },
                keyDown: function(e){
                    const currentHeader = e.target;
                    const accordions = document.getElementsByClassName('accordion');
                    let currentIndex = 0;
                    const headers = [];
                    for(let i=0; i<accordions.length; i++){
                        const accordion = accordions[i];
                        const header = accordion.getElementsByClassName('header')[0];
                        headers.push(header);
                        if(header === currentHeader){
                            currentIndex = i;
                        }
                    }

                    let nextIndex = 0;

                    let previousIndex = 0;

                    if(currentIndex === accordions.length - 1){
                        nextIndex = 0;
                    }
                    else{
                        nextIndex = currentIndex + 1;
                    }

                    if(currentIndex === 0){
                        previousIndex = accordions.length - 1;
                    }
                    else{
                        previousIndex = currentIndex - 1;
                    }

                    if(e.keyCode === 13 || e.keyCode === 32){
                        this.toggle();
                    }

                    if(e.keyCode === 38){
                        headers[previousIndex].focus();
                    }

                    if(e.keyCode === 40){
                        headers[nextIndex].focus();
                    }

                    if(e.keyCode === 35){
                        headers[headers.length - 1].focus();
                    }

                    if(e.keyCode === 36){
                        headers[0].focus();
                    }

                },

            }
        });
    }
}
