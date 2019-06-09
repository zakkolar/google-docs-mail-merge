function onOpen() {
  var ui = DocumentApp.getUi();

  ui.createMenu('Mail merge')
      .addItem('Setup merge', 'showSidebar')
      .addItem('Merge', 'merge')
      .addToUi();

}

function showSidebar() {

  var ui = HtmlService.createTemplateFromFile('ui/Sidebar').evaluate()
      .setTitle('Mail Merge');
  DocumentApp.getUi().showSidebar(ui);

}

function showSpreadsheetPicker(){
  var html = HtmlService.createTemplateFromFile('ui/PickSpreadsheet').evaluate()
        .setWidth(700)
        .setHeight(425)
        .setSandboxMode(HtmlService.SandboxMode.IFRAME);
    DocumentApp.getUi().showModalDialog(html, 'Pick spreadsheet');
}

function merge(){

  var templateDoc = DocumentApp.getActiveDocument();

  var templateFile = DriveApp.getFileById(templateDoc.getId());

  var mergedDoc = DocumentApp.openById(templateFile.makeCopy("Merged").getId());

  addMergeData(mergedDoc);

  var link = mergedDoc.getUrl();

}

function getProperty(prop){
  var documentProperties = PropertiesService.getDocumentProperties();
  return documentProperties.getProperty(prop) || null;
}

function setProperty(prop, val){
  var documentProperties = PropertiesService.getDocumentProperties();
  documentProperties.setProperty(prop, val);
}

var PLACEHOLDER =  {
  PREFIX: "{{",
  SUFFIX: "}}",
  NEXT: "NEXT_RECORD",
  NEXT_HIDDEN: "NEXT_RECORD_REMOVE_ELEMENT"
};


function getDefaultPlaceholders(){
  var defaultPlaceholders = [
    PLACEHOLDER.NEXT
  ];

  return defaultPlaceholders;
}


function makeNextPlaceholder(){
  return makePlaceholder(PLACEHOLDER.NEXT);
}

function makeNextHiddenPlaceholder(){
  return makePlaceholder(PLACEHOLDER.NEXT_HIDDEN);
}

function makePlaceholder(text){
  return PLACEHOLDER.PREFIX+text+PLACEHOLDER.SUFFIX;
}

function removePlaceholderTags(text){
  return text.replace(PLACEHOLDER.PREFIX,"").replace(PLACEHOLDER.SUFFIX,"");
}


function addField(field){
  field = makePlaceholder(field);
  var doc = DocumentApp.getActiveDocument();
  var cursor = doc.getCursor();
  var selection = doc.getSelection();
  if (cursor) {
    var newText = cursor.insertText(field);
    var position = doc.newPosition(newText, field.length);
    doc.setCursor(position);
  }
  else if(selection){
    var elements = selection.getRangeElements();
    var replace = true;
    for (var i = 0; i < elements.length; i++) {
      if (elements[i].isPartial()) {
        var element = elements[i].getElement().asText();
        var startIndex = elements[i].getStartOffset();
        var endIndex = elements[i].getEndOffsetInclusive();
        var text = element.getText().substring(startIndex, endIndex + 1);
        element.deleteText(startIndex, endIndex);
        if( replace ) {
          var newText = element.insertText(startIndex, field);
          var position = doc.newPosition(newText, field.length + startIndex);
          doc.setCursor(position);
          replace = false;
        }
      } else {
        var element = elements[i].getElement();
        if( replace && element.editAsText ) {
          element.clear().asText().setText(field);
          replace = false;
        } else {
          if( replace && i === elements.length -1 ) {
            var parent = element.getParent();
            parent[parent.insertText ? 'insertText' : 'insertParagraph'](parent.getChildIndex(element), field);
            replace = false; //not really necessary since it's the last one
          }
          element.removeFromParent();
        }
      }
    }
  }
  else {
    DocumentApp.getActiveDocument().getBody().appendParagraph(field);
  }

}


function getSpreadsheetId(){
  return getProperty('SPREADSHEET_ID');
  // return "1obr0qFmWUWJ15r7_kG4ggNOgtterytw2qYM2ttQ1iDA";
}

function setSpreadsheetId(id){
  setProperty("SPREADSHEET_ID",id);
}

function getSpreadsheet(){
  var sheetsID = getSpreadsheetId();
  return SpreadsheetApp.openById(sheetsID);
}

function getSheetName(){
  return getProperty("SHEET_NAME");
}

function setSheetName(name){
  return setProperty("SHEET_NAME", name);
}

function getSheet(){
  var spreadsheet = getSpreadsheet();
  if(spreadsheet){
    var sheet = spreadsheet.getSheetByName(getSheetName());
    if(sheet){
      return sheet;
    }
    else{
      return spreadsheet.getSheets()[0];
    }
  }

  return null;
}

function getDefaultRange(){
  var sheet = getSheet();
  var lastRow = Math.max(1,sheet.getLastRow());
  var lastCol = Math.max(1, sheet.getLastColumn());
  var range = sheet.getRange(1,1,lastRow,lastCol);
  return range.getA1Notation();
}

function getRangeA1Notation(){
  return getDefaultRange();
}

function getRange(){
  var sheet = getSheet();
  var range = sheet.getRange(getRangeA1Notation());
  return range;
}

function getColumnNames(){
  var range = getRange();
  var values = range.getValues();
  return values[0];
}

function getSpreadsheetUrl(){
  var spreadsheet = getSpreadsheet();
  if(spreadsheet){
    return spreadsheet.getUrl();
  }

  return null;
}

function getSheets(){
  var spreadsheet = getSpreadsheet();
  var sheets = spreadsheet.getSheets();
  var tabs = [];
  for(var i=0; i<sheets.length; i++){
    tabs.push(sheets[i].getName());

  }
  return tabs;

}

function getMergeValues(){
  var range = getRange();
  var values = range.getValues();
  var keys = values.shift();
  var mergeValues = [];
  for(var i=0; i<values.length; i++){
    var currentValues = values[i];
    var currentData = {};
    for(var j=0; j<keys.length; j++){
      currentData[keys[j]] = currentValues[j];
    }
    mergeValues.push(currentData);
  }
  return mergeValues;
}

function getSettings(){
  var spreadsheet = null;
  if(getSpreadsheetId()!=null){
    spreadsheet = {
      name: getSpreadsheet().getName(),
      sheets: getSheets(),
      sheet: getSheetName(),
      url: getSpreadsheetUrl(),
      columnNames: getColumnNames()
    }
  }
  return {
    spreadsheet: spreadsheet,
    defaultPlaceholders: getDefaultPlaceholders()
  };
}



function promptForSheet(){
  var ui = DocumentApp.getUi();
  var response = ui.prompt("Spreadsheet ID","What is the ID of your spreadsheet?", ui.ButtonSet.OK);
  return response.getResponseText();
}

/**
 * Include a partial file in an HTML template
 * @param filename The name of the file to be included (without the .html extension)
 * @returns Content from the HTML file
 */
function include(filename) {
  return HtmlService.createTemplateFromFile(filename).evaluate()
      .getContent();
}


/**
 * Get an OAuthToken for the UI to use for the Picker
 * @returns {any}
 */
function getOAuthToken() {
  return ScriptApp.getOAuthToken();
}