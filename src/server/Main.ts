import MergeData from "./MergeData";
import {RuleList} from "./RuleList";

function onOpen() {
  Logger.log('hi');
  var ui = DocumentApp.getUi();
  ui.createMenu('Mail merge')
      .addItem('Setup merge', 'showSidebar')
      .addItem('Merge', 'merge')
      .addToUi();
}

// @ts-ignore
global.onOpen = onOpen;

function showSidebar() {
  var ui = HtmlService.createTemplateFromFile('ui/Sidebar').evaluate()
      .setTitle('Mail Merge');
  DocumentApp.getUi().showSidebar(ui);

}
// @ts-ignore
global.showSidebar = showSidebar;

function showSpreadsheetPicker(){
  var html = HtmlService.createTemplateFromFile('ui/PickSpreadsheet').evaluate()
        .setWidth(700)
        .setHeight(425)
        .setSandboxMode(HtmlService.SandboxMode.IFRAME);
    DocumentApp.getUi().showModalDialog(html, 'Pick spreadsheet');
}
// @ts-ignore
global.showSpreadsheetPicker = showSpreadsheetPicker;


function merge(){

  var templateDoc = DocumentApp.getActiveDocument();

  var templateFile = DriveApp.getFileById(templateDoc.getId());

  var mergedDoc = DocumentApp.openById(templateFile.makeCopy("Merged").getId());

  // @ts-ignore
  addMergeData(mergedDoc);

  var link = mergedDoc.getUrl();

}
// @ts-ignore
global.merge = merge;

function getProperty(prop){
  var documentProperties = PropertiesService.getDocumentProperties();
  return documentProperties.getProperty(prop) || null;
}

function setProperty(prop, val){
  var documentProperties = PropertiesService.getDocumentProperties();
  documentProperties.setProperty(prop, val);
}

function deleteProperty(prop){
  var documentProperties = PropertiesService.getDocumentProperties();
  documentProperties.deleteProperty(prop);
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
    // @ts-ignore
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
          // @ts-ignore
          var position = doc.newPosition(newText, field.length + startIndex);
          doc.setCursor(position);
          replace = false;
        }
      } else {
        // @ts-ignore
        var element = elements[i].getElement();
        if( replace && element.editAsText ) {
          // @ts-ignore
          element.clear().asText().setText(field);
          replace = false;
        } else {
          if( replace && i === elements.length -1 ) {
            var parent = element.getParent();
            // @ts-ignore
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

// @ts-ignore
global.addField = addField;


function getSpreadsheetId(){
  return getProperty('SPREADSHEET_ID');
}

function setSpreadsheetId(id){
  setProperty("SPREADSHEET_ID",id);
  clearSheetInfo();
}
// @ts-ignore
global.setSpreadsheetId = setSpreadsheetId;

function clearSheetInfo(){
  deleteProperty("SHEET_NAME");
}

function getSpreadsheet(){
  var sheetsID = getSpreadsheetId();
  return SpreadsheetApp.openById(sheetsID);
}

function getSheetName(){
  var sheetName = getProperty("SHEET_NAME");
  if(!sheetName){
    var spreadsheet = getSpreadsheet();
    if(spreadsheet){
      sheetName = spreadsheet.getSheets()[0].getName();
    }
  }
  return sheetName;
}

function setSheetName(name){
  return setProperty("SHEET_NAME", name);
}
// @ts-ignore
global.setSheetName = setSheetName;

function getSheet(){
  var spreadsheet = getSpreadsheet();
  if(spreadsheet){
    var sheet = spreadsheet.getSheetByName(getSheetName());
    return sheet;
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
      // @ts-ignore
      currentData[keys[j]] = currentValues[j];
    }
    mergeValues.push(currentData);
  }
  return mergeValues;
}

function getRuleList(){
  return RuleList;
}

function getRuleUiList(){
  const ruleList = getRuleList();
  const ids = Object.getOwnPropertyNames(ruleList);

  const rules = [];

  ids.forEach((id)=>{
    const rule = ruleList[id].serialize();
    rule["id"] = id;
    rules.push(rule);
  });

  return rules;
}

function getRuleModes(){
  return ["any","all"];
}

function getRuleMode(){
  return "all";
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
    defaultPlaceholders: getDefaultPlaceholders(),
    ruleList: getRuleUiList(),
    ruleModeList: getRuleModes(),
    ruleMode: getRuleMode()
  };
}
// @ts-ignore
global.getSettings = getSettings;



function promptForSheet(){
  var ui = DocumentApp.getUi();
  var response = ui.prompt("Spreadsheet ID","What is the ID of your spreadsheet?", ui.ButtonSet.OK);
  return response.getResponseText();
}
// @ts-ignore
global.promptForSheet = promptForSheet;

/**
 * Include a partial file in an HTML template
 * @param filename The name of the file to be included (without the .html extension)
 * @returns Content from the HTML file
 */
function include(filename) {
  return HtmlService.createTemplateFromFile(filename).evaluate()
      .getContent();
}

// @ts-ignore
global.include = include;


/**
 * Get an OAuthToken for the UI to use for the Picker
 * @returns {any}
 */
function getOAuthToken() {
  return ScriptApp.getOAuthToken();
}
// @ts-ignore
global.getOAuthToken = getOAuthToken;

function addMergeData(doc){
  const body = doc.getBody();

  const bodyCopy = body.copy();

  // @ts-ignore
  const fields = getColumnNames();

  // @ts-ignore
  const allData = getMergeValues();

  // @ts-ignore
  const mergeData = new MergeData(allData, fields);

  const bodyText = body.getText();

  // @ts-ignore
  const skips = bodyText.split(makeNextPlaceholder()).length;

  const numRepeats = Math.ceil(allData.length / skips) - 1;

  const emptyField = {};
  for(var i=0; i<fields.length; i++){
    // @ts-ignore
    emptyField[fields[i]] = "";
  }


  for(var i=0; i<numRepeats; i++){
    addTemplate(body, bodyCopy);
  }

  let data = mergeData.next();

  const searchPattern = "\{\{.[^\}]*\}\}";
  while(body.findText(searchPattern)){
    const range = body.findText(searchPattern);

    const start = range.getStartOffset();
    const end = range.getEndOffsetInclusive();
    const placeholder = range.getElement().getText().substring(start, end + 1);

    // @ts-ignore
    if(placeholder == makeNextPlaceholder()) {
      if (mergeData.hasNext()) {
        data = mergeData.next();
      } else {
        data = emptyField;
      }
      replaceTextInEl(range.getElement(), start, end, "");
    }
    // @ts-ignore
    else if(placeholder == makeNextHiddenPlaceholder()) {
      if (mergeData.hasNext()) {
        data = mergeData.next();
      } else {
        data = emptyField;
      }
      //remove or text stays hidden in document??
      replaceTextInEl(range.getElement(), start, end, "");
      range.getElement().getParent().removeChild(range.getElement());
    }
    // @ts-ignore
    else if(fields.indexOf(removePlaceholderTags(placeholder))>-1){
      // @ts-ignore
      replaceTextInEl(range.getElement(), start, end, data[removePlaceholderTags(placeholder)]);
    }
    else{
      // @ts-ignore
      replaceTextInEl(range.getElement(), start, end, "UNKNOWN PLACEHOLDER: "+removePlaceholderTags(placeholder));
    }

  }
}

function replaceTextInEl(el, start, end, replace){
  el.deleteText(start,end);
  el.insertText(start, replace);
}



function addTemplate(body, template){
  // @ts-ignore
  body.appendParagraph(makeNextHiddenPlaceholder());
  body.appendPageBreak();
  for(var j =0; j<template.getNumChildren(); j++){
    var element = template.getChild(j).copy();
    var type = element.getType();
    if( type == DocumentApp.ElementType.PARAGRAPH )
      body.appendParagraph(element);
    else if( type == DocumentApp.ElementType.TABLE )
      body.appendTable(element);
    else if( type == DocumentApp.ElementType.LIST_ITEM )
      body.appendListItem(element);
    else
      throw new Error("Unknown element type: "+type);

  }
}


function elContainsPlaceholderFromList(list, el){
  for(var i=0; i<list.length; i++){
    if(!el.findText){
      throw("Element does not contain text");
    }

    // @ts-ignore
    if(el.findText(makePlaceholder(list[i]))){
      return true;
    }
  }

  return false;
}