import '../loader.css';
import "./Sidebar.scss";

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
            ruleList: [null],
            ruleModeList: [],
            ruleMode: null
        },
        error: null,
        ruleEditor:null,
        ruleEditorIndex: -1,
        rules: [],



    },
    computed: {
        placeholders(){
            var placeholders = [];
            placeholders = placeholders.concat(this.settings.spreadsheet.columnNames).concat(this.settings.defaultPlaceholders);
            return placeholders;
        },
        groupedRuleList(){
            const ruleGroup = {};
            const types = [];
            this.settings.ruleList.forEach((rule)=>{
                const type = rule.type;
                if(types.indexOf(type)===-1){
                    types.push(type);
                }
            });

            types.forEach((type)=>{
                ruleGroup[type] = this.settings.ruleList.filter((rule)=>{
                    return rule.type === type;
                });
            });
            return ruleGroup;
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
        newRule(e){
            e.preventDefault();
            this.ruleEditorIndex = -1;
            this.ruleEditor = this.rulePlaceholder();
        },
        clearRuleEditor(e){
            e.preventDefault();
            this.ruleEditor = null;
            this.ruleEditorIndex = -1;
        },
        deleteRule(index, e){
            e.preventDefault();

            if(this.ruleEditorIndex === index){
                this.newRule(e);
            }

            if(this.ruleEditorIndex > index){
                this.ruleEditorIndex--;
            }

            this.rules.splice(index,1);
        },
        saveRule(e){
            e.preventDefault();
            if(this.ruleEditorIndex<0){
                this.rules.push(this.ruleEditor);
            }
            else{
                Object.assign(this.rules[this.ruleEditorIndex], this.ruleEditor)
            }
            this.ruleEditor = null;
        },
        editRule(index, e){
            e.preventDefault();
            this.ruleEditorIndex = index;
            this.ruleEditor = Object.assign({},this.ruleEditor, this.rules[index]);

            // Object.assign(this.ruleEditor, this.rules[index]);
        },
        rulePlaceholder(){
            const rule = {
                type: this.settings.ruleList[0] || null,
                field: this.settings.spreadsheet.columnNames[0] || null,
                value: null
            }
            return rule;
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
