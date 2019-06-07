$(function(){
    loadSettings();
    showDefaultPlaceholders();

    $('.pickSpreadsheet').click(function(e){
        e.preventDefault();
        google.script.run.showSpreadsheetPicker();
    })

});

function loadSettings(){
    $('#loader').show();
    $('#main').hide();
    google.script.run.withSuccessHandler(showSettings)
        .withFailureHandler(showError).getSettings();
    $('#refresh').click(function(e){
        e.preventDefault();
        loadSettings();
    })
}


function showSettings(settings) {
    $('#main').show();
    $('#loader').hide();

    if(settings.spreadsheet){
        $('#spreadsheetSettings').show();
        $('#noSpreadsheetChosen').hide();
        $('#spreadsheet_name').html(settings.spreadsheet.name);
        $('#spreadsheet_name').attr('href',settings.spreadsheet.url);
        $('#sheet').html('');
        for(var i=0; i<settings.spreadsheet.sheets.length; i++){
            var tab = settings.spreadsheet.sheets[i];
            $('#sheet').append("<option value='"+tab+"'>"+tab+"</option>");
        }
        $('#sheet').val(settings.spreadsheet.sheet);

        $('#save').click(function(e){
            e.preventDefault();
            var val = $('#sheet').val();
           google.script.run.withSuccessHandler(function(){
               loadSettings();
           }).setSheetName(val);
        });

        if(settings.spreadsheet.columnNames.length == 1 && settings.spreadsheet.columnNames[0]==""){
            $('#noFields').show();
            $('#fields').hide();
        }

        else{
            $('#noFields').hide();
            $('#fields').show();
            $('#values').html('');
            for(var i=0; i<settings.spreadsheet.columnNames.length; i++){
                var column = settings.spreadsheet.columnNames[i];
                var button = $("<button>"+column+"</button>");
                button.click(function(e){
                    e.preventDefault();
                    addField($(this).html());
                })
                $('#values').append(button);
            }
        }


    }
    else{
        $('#spreadsheetSettings').hide();
        $('#noSpreadsheetChosen').show();

    }



}

function showDefaultPlaceholders(){

    var placeholders = <?!= getDefaultPlaceholders() ?>;

    for(var i=0; i<placeholders.length; i++){
        var placeholder = placeholders[i];
        var button = $("<button>"+placeholder+"</button>");
        button.click(function(e){
            e.preventDefault();
            addField($(this).html());
        })
        $('#defaultPlaceholders').append(button);
    }

}

function addField(field){
    google.script.run
        .withFailureHandler(
            function(msg, element) {
                showError(msg, $('#button-bar'));
                $('#save').disabled = false;
            })
        .addField(field);
}

/**
 * Runs a server-side function to translate the user-selected text and update
 * the sidebar ui with the resulting translation.
 */
function save() {
    $('#error').remove();
    $('#save').disabled = true;
    google.script.run
        .withSuccessHandler(
            function() {
                $('#save').disabled = false;
            })
        .withFailureHandler(
            function(msg, element) {
                showError(msg, $('#button-bar'));
                $('#save').disabled = false;
            })
        .savePreferences({
            apiKey: $('#api_key').val(),
            shortUrls: $('#short_urls').val(),
            projectUrls: $('#project_urls').val(),
            clicks: $('#clicks').val(),
            linkType: $('[name=linkType]:checked').val()
        });
}



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