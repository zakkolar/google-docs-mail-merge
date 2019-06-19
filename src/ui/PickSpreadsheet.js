import './stylesheets/loader.css';
import {LoadScript} from "./LoadScript";

LoadScript("https://apis.google.com/js/api.js?onload=onApiLoad");

var DIALOG_DIMENSIONS = {
    width: 700,
    height: 425
};
var pickerApiLoaded = false;



window.onApiLoad = function() {
    gapi.load('picker', {
        'callback': function () {
            pickerApiLoaded = true;
           showPicker();
        }
    });

}

function createPicker(token) {
    if (pickerApiLoaded && token) {

        document.getElementById('loader').style.display = 'none';

        var docsView = new google.picker.DocsView()
            .setIncludeFolders(true)
            .setMimeTypes("application/vnd.google-apps.spreadsheet");

        var uploadView = new google.picker.DocsUploadView();


        var picker = new google.picker.PickerBuilder()
        // Hide the navigation panel so that Picker fills more of the dialog.
            .enableFeature(google.picker.Feature.NAV_HIDDEN)
            // Hide the title bar since an Apps Script dialog already has a title.
            .hideTitleBar()
            .addView(docsView)
            .setSize(DIALOG_DIMENSIONS.width - 2, DIALOG_DIMENSIONS.height - 2)
            .setOAuthToken(token)
            .setCallback(pickerCallback)
            .setOrigin('https://docs.google.com')
            .build();

        picker.setVisible(true);

    } else {
        showError('Unable to load the file picker.');
    }
}

function showPicker(){
    google.script.run.withSuccessHandler(createPicker)
        .withFailureHandler(showError).getOAuthToken();
}

/**
 * A callback function that extracts the chosen document's metadata from the
 * response object. For details on the response object, see
 * https://developers.google.com/picker/docs/result
 *
 * @param {object} data The response object.
 */
function pickerCallback(data) {
    var action = data[google.picker.Response.ACTION];
    if (action == google.picker.Action.PICKED) {
        var doc = data[google.picker.Response.DOCUMENTS][0];
        var id = doc[google.picker.Document.ID];
        google.script.run.withSuccessHandler(function(){
            google.script.run.showSidebar();
            google.script.host.close();
        }).setSpreadsheetId(id)

    }else if(action == google.picker.Action.CANCEL){
        google.script.host.close();
    }

}

function showError(message) {
    document.getElementById('snipper').innerHTML = 'Error: ' + message;
}

