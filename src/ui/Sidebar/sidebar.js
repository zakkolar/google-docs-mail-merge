import '../loader.css';

import Vue from 'vue/dist/vue.esm';

var app = new Vue({
    el: '#sidebar',
    data: {
        loading: true,
        settings: {
            spreadsheet: {
                name: null,
                sheets: [null],
                sheet: null,
                url: null,
                columnNames: [null]
            },
            defaultPlaceholders: [null],
        },
        error: null

    },
    computed: {
        placeholders(){
            var placeholders = [];
            placeholders = placeholders.concat(this.settings.spreadsheet.columnNames).concat(this.settings.defaultPlaceholders);
            return placeholders;
        }
    },
    methods: {
        loadSettings(){
            var vue = this;
            vue.loading = true;
            google.script.run.withSuccessHandler(function(settings) {

                vue.settings = Object.assign({},vue.settings, settings);

                vue.loading = false;
            }).withFailureHandler(function(err){
            vue.error = err;
            }).getSettings();
        },
        refresh(event){
            event.preventDefault();
            this.loadSettings();
        },
        addField(event, field){
            event.preventDefault();
            event.target.setAttribute('disabled','true');
            var vue = this;
            google.script.run
                .withFailureHandler(
                    function(msg) {
                    vue.error = msg;
                        event.target.removeAttribute('disabled');

                    })
                .withSuccessHandler(function(){
                    event.target.removeAttribute('disabled');
                    google.script.host.editor.focus();
                })
                .addField(field);
        },
        pickSpreadsheet(e){
            e.preventDefault();
            google.script.run.showSpreadsheetPicker();
        },
        saveSheet(e){
            e.target.setAttribute('disabled','true');
            var vue = this;
            google.script.run.withSuccessHandler(function(){
                e.target.removeAttribute('disabled');
                vue.loadSettings();
            }).withFailureHandler(function(err){
                vue.error = err;
                e.target.removeAttribute('disabled');
            }).setSheetName(vue.settings.spreadsheet.sheet);
        }
    },
    created(){
        this.loadSettings();
    }
});
