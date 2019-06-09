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
            defaultPlaceholders: [null]
        }

    },
    methods: {
        loadSettings(){
            var vue = this;
            vue.loading = true;
            google.script.run.withSuccessHandler(function(settings) {

            var resetArray = function(array, newItems){

                    array.length = 0;
                    for(var i=0; i<newItems.length; i++){
                        array.push(newItems[i]);
                    }
                }

                vue.settings.spreadsheet.name = settings.spreadsheet.name || null;

                resetArray(vue.settings.spreadsheet.sheets, settings.spreadsheet.sheets);

                vue.settings.spreadsheet.sheet = settings.spreadsheet.sheet || null;

                vue.settings.spreadsheet.url = settings.spreadsheet.url || null;

                resetArray(vue.settings.spreadsheet.columnNames, settings.spreadsheet.columnNames);

                resetArray(vue.settings.defaultPlaceholders, settings.defaultPlaceholders);

                vue.loading = false;
            }).withFailureHandler(function(err){
            // @todo add failure handler
            }).getSettings();
        },
        refresh(event){
            event.preventDefault();
            this.loadSettings();
        },
        addField(event, field){
            event.preventDefault();
            event.target.setAttribute('disabled','true');
            google.script.run
                .withFailureHandler(
                    function(msg, element) {
                    //    @todo add error handler;
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
            }).withFailureHandler(function(){
                // @todo add error handler
                e.target.removeAttribute('disabled');
            }).setSheetName(vue.settings.spreadsheet.sheet);
        }
    },
    created(){
        this.loadSettings();
    }
});


/**
 * Inserts a div that contains an error message after a given element.
 *
 * @param {string} msg The error message to display.
 * @param {DOMElement} element The element after which to display the error.
 */
function showError(msg, element) {
    $('#error').remove();
    var div = $('<div id="error" class="error">' + msg + '</div>');
    $(element).after(div);
}