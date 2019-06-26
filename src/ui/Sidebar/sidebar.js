import '../loader.css';
import "./Sidebar.scss";

import Vue from 'vue/dist/vue.esm';
import {Accordion} from "../Accordion/Accordion";

Vue.component('accordion', Accordion);

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
                columnNames: [null],
                startRow: 0,
                endRow: 0,
            },
            defaultPlaceholders: [null],
            ruleList: [null],
            ruleModeList: [],
            ruleMode: null,
            rules: []
        },
        error: null,
        ruleEditor:null,
        ruleEditorIndex: -1,
        ruleSaving: false,
        rowsSaving: false,
        rowsDirty: false,
        mergeURL: null,
        accordions:{
            setUp: true,
            addFields: false,
            setRules: false
        }




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
        },
        disableMergeButton(){
            return this.ruleSaving || this.loading || this.rowsSaving;
        }

    },
    methods: {
        showError(err){
            vue.error = err;
        },
        loadSettings(){
            var vue = this;
            vue.loading = true;
            google.script.run.withSuccessHandler(function(settings) {
                if(!settings.rules){
                    settings.rules = [];
                }
                vue.settings = Object.assign({},vue.settings, settings);
                vue.loading = false;

                if(vue.settings.spreadsheet.sheet == null){
                    vue.accordions.setUp = true;
                    vue.accordions.addFields = false;
                    vue.accordions.setRules = false;
                }
                else{
                    vue.accordions.setUp = false;
                    if(vue.settings.rules.length>0){
                        vue.accordions.addFields = false;
                        vue.accordions.setRules = true;
                    }
                    else {
                        vue.accordions.addFields = true;
                        vue.accordions.setRules = false;
                    }
                }

            }).withFailureHandler(function(err){
            this.error=err
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

            this.settings.rules.splice(index,1);
            this.storeRules();
        },
        saveRule(e){
            e.preventDefault();
            if(this.ruleEditorIndex<0){
                this.settings.rules.push(this.ruleEditor);
            }
            else{
                Object.assign(this.settings.rules[this.ruleEditorIndex], this.ruleEditor)
            }
            this.storeRules();
            this.ruleEditor = null;
        },
        editRule(index, e){
            e.preventDefault();
            this.ruleEditorIndex = index;
            this.ruleEditor = Object.assign({},this.ruleEditor, this.settings.rules[index]);

        },
        storeRules(){
            this.ruleSaving = true;
            const vue = this;
            google.script.run.withFailureHandler(function(msg){
                vue.error = msg;
                vue.ruleSaving = false;
            }).withSuccessHandler(function(){
                vue.ruleSaving = false;
            }).setRules(this.settings.spreadsheet.sheet, this.settings.rules, this.settings.ruleMode);
        },
        saveMergeRows(e){
            e.preventDefault();
            this.rowsSaving = true;
            const vue = this;
            google.script.run.withSuccessHandler(()=>{
                vue.rowsSaving = false;
                vue.rowsDirty = false;
            }).withFailureHandler((err)=>{
                vue.rowsSaving = false;
                vue.error = err;
            }).setRows(this.settings.spreadsheet.startRow, this.settings.spreadsheet.endRow);
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
                    vue.error=msg;
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
            const vue = this;
            google.script.run.withSuccessHandler(function(){
                e.target.removeAttribute('disabled');
                vue.loadSettings();
            }).withFailureHandler(function(err){
                vue.error = err;
                e.target.removeAttribute('disabled');
            }).setSheetName(vue.settings.spreadsheet.sheet);
        },
        runMerge(e){
            e.preventDefault();
            const vue = this;
            vue.loading = true;
            google.script.run.withFailureHandler(function(err){
                vue.error = err;
                vue.loading = false;

            }).withSuccessHandler(function(url){

                vue.mergeURL = url;
                vue.loading = false;


            }).merge();
        }
    },
    created(){
        this.loadSettings();
    }
});
