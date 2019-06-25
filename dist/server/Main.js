// @ts-ignore
function onOpen() {
}
// @ts-ignore
function showSidebar() {
}
// @ts-ignore
function showSpreadsheetPicker() {
}
// @ts-ignore
function merge() {
}
// @ts-ignore
function addField() {
}
// @ts-ignore
function setSpreadsheetId() {
}
// @ts-ignore
function setSheetName() {
}
// @ts-ignore
function getSettings() {
}
// @ts-ignore
function promptForSheet() {
}
// @ts-ignore
function include() {
}
// @ts-ignore
function getOAuthToken() {
}/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 7);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
var Rule_1 = __webpack_require__(2);
var TextRule = /** @class */ (function (_super) {
    __extends(TextRule, _super);
    function TextRule(label) {
        return _super.call(this, Rule_1.FIELD_TYPE.String, label) || this;
    }
    return TextRule;
}(Rule_1.Rule));
exports.TextRule = TextRule;


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
var Rule_1 = __webpack_require__(2);
var NumberRule = /** @class */ (function (_super) {
    __extends(NumberRule, _super);
    function NumberRule(label) {
        return _super.call(this, Rule_1.FIELD_TYPE.Number, label) || this;
    }
    return NumberRule;
}(Rule_1.Rule));
exports.NumberRule = NumberRule;


/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

exports.__esModule = true;
var Rule = /** @class */ (function () {
    function Rule(compareType, label) {
        this.showComparison = true;
        this.type = compareType;
        this.label = label;
    }
    Rule.prototype.serialize = function () {
        return {
            type: this.type.toString(),
            showComparison: this.showComparison,
            label: this.label
        };
    };
    Rule.prototype.formatField = function (field) {
        if (!field) {
            field = "";
        }
        switch (this.type) {
            case FIELD_TYPE.String:
                return field.toString();
            case FIELD_TYPE.Number:
                return parseFloat(field.toString());
            case FIELD_TYPE.Date:
                return new Date(field.toString());
            default:
                return null;
        }
    };
    Rule.prototype.test = function (mergeField, comparison) {
        if (comparison === void 0) { comparison = null; }
        mergeField = this.formatField(mergeField);
        comparison = this.formatField(comparison);
        return this.rule(mergeField, comparison);
    };
    return Rule;
}());
exports.Rule = Rule;
var FIELD_TYPE;
(function (FIELD_TYPE) {
    FIELD_TYPE["String"] = "Text";
    FIELD_TYPE["Number"] = "Number";
    FIELD_TYPE["Date"] = "Date";
})(FIELD_TYPE = exports.FIELD_TYPE || (exports.FIELD_TYPE = {}));


/***/ }),
/* 3 */,
/* 4 */,
/* 5 */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || new Function("return this")();
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),
/* 6 */,
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {
exports.__esModule = true;
var MergeData_1 = __webpack_require__(8);
var RuleList_1 = __webpack_require__(9);
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
function showSpreadsheetPicker() {
    var html = HtmlService.createTemplateFromFile('ui/PickSpreadsheet').evaluate()
        .setWidth(700)
        .setHeight(425)
        .setSandboxMode(HtmlService.SandboxMode.IFRAME);
    DocumentApp.getUi().showModalDialog(html, 'Pick spreadsheet');
}
// @ts-ignore
global.showSpreadsheetPicker = showSpreadsheetPicker;
function merge() {
    var templateDoc = DocumentApp.getActiveDocument();
    var templateFile = DriveApp.getFileById(templateDoc.getId());
    var mergedDoc = DocumentApp.openById(templateFile.makeCopy("Merged").getId());
    // @ts-ignore
    addMergeData(mergedDoc);
    var link = mergedDoc.getUrl();
}
// @ts-ignore
global.merge = merge;
function getProperty(prop) {
    var documentProperties = PropertiesService.getDocumentProperties();
    return documentProperties.getProperty(prop) || null;
}
function setProperty(prop, val) {
    var documentProperties = PropertiesService.getDocumentProperties();
    documentProperties.setProperty(prop, val);
}
function deleteProperty(prop) {
    var documentProperties = PropertiesService.getDocumentProperties();
    documentProperties.deleteProperty(prop);
}
var PLACEHOLDER = {
    PREFIX: "{{",
    SUFFIX: "}}",
    NEXT: "NEXT_RECORD",
    NEXT_HIDDEN: "NEXT_RECORD_REMOVE_ELEMENT"
};
function getDefaultPlaceholders() {
    var defaultPlaceholders = [
        PLACEHOLDER.NEXT
    ];
    return defaultPlaceholders;
}
function makeNextPlaceholder() {
    return makePlaceholder(PLACEHOLDER.NEXT);
}
function makeNextHiddenPlaceholder() {
    return makePlaceholder(PLACEHOLDER.NEXT_HIDDEN);
}
function makePlaceholder(text) {
    return PLACEHOLDER.PREFIX + text + PLACEHOLDER.SUFFIX;
}
function removePlaceholderTags(text) {
    return text.replace(PLACEHOLDER.PREFIX, "").replace(PLACEHOLDER.SUFFIX, "");
}
function addField(field) {
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
    else if (selection) {
        var elements = selection.getRangeElements();
        var replace = true;
        for (var i = 0; i < elements.length; i++) {
            if (elements[i].isPartial()) {
                var element = elements[i].getElement().asText();
                var startIndex = elements[i].getStartOffset();
                var endIndex = elements[i].getEndOffsetInclusive();
                var text = element.getText().substring(startIndex, endIndex + 1);
                element.deleteText(startIndex, endIndex);
                if (replace) {
                    var newText = element.insertText(startIndex, field);
                    // @ts-ignore
                    var position = doc.newPosition(newText, field.length + startIndex);
                    doc.setCursor(position);
                    replace = false;
                }
            }
            else {
                // @ts-ignore
                var element = elements[i].getElement();
                if (replace && element.editAsText) {
                    // @ts-ignore
                    element.clear().asText().setText(field);
                    replace = false;
                }
                else {
                    if (replace && i === elements.length - 1) {
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
function getSpreadsheetId() {
    return getProperty('SPREADSHEET_ID');
}
function setSpreadsheetId(id) {
    setProperty("SPREADSHEET_ID", id);
    clearSheetInfo();
}
// @ts-ignore
global.setSpreadsheetId = setSpreadsheetId;
function clearSheetInfo() {
    deleteProperty("SHEET_NAME");
}
function getSpreadsheet() {
    var sheetsID = getSpreadsheetId();
    return SpreadsheetApp.openById(sheetsID);
}
function getSheetName() {
    var sheetName = getProperty("SHEET_NAME");
    if (!sheetName) {
        var spreadsheet = getSpreadsheet();
        if (spreadsheet) {
            sheetName = spreadsheet.getSheets()[0].getName();
        }
    }
    return sheetName;
}
function setSheetName(name) {
    return setProperty("SHEET_NAME", name);
}
// @ts-ignore
global.setSheetName = setSheetName;
function getSheet() {
    var spreadsheet = getSpreadsheet();
    if (spreadsheet) {
        var sheet = spreadsheet.getSheetByName(getSheetName());
        return sheet;
    }
    return null;
}
function getDefaultRange() {
    var sheet = getSheet();
    var lastRow = Math.max(1, sheet.getLastRow());
    var lastCol = Math.max(1, sheet.getLastColumn());
    var range = sheet.getRange(1, 1, lastRow, lastCol);
    return range.getA1Notation();
}
function getRangeA1Notation() {
    return getDefaultRange();
}
function getRange() {
    var sheet = getSheet();
    var range = sheet.getRange(getRangeA1Notation());
    return range;
}
function getColumnNames() {
    var range = getRange();
    var values = range.getValues();
    return values[0];
}
function getSpreadsheetUrl() {
    var spreadsheet = getSpreadsheet();
    if (spreadsheet) {
        return spreadsheet.getUrl();
    }
    return null;
}
function getSheets() {
    var spreadsheet = getSpreadsheet();
    var sheets = spreadsheet.getSheets();
    var tabs = [];
    for (var i = 0; i < sheets.length; i++) {
        tabs.push(sheets[i].getName());
    }
    return tabs;
}
function getMergeValues() {
    var range = getRange();
    var values = range.getValues();
    var keys = values.shift();
    var mergeValues = [];
    for (var i = 0; i < values.length; i++) {
        var currentValues = values[i];
        var currentData = {};
        for (var j = 0; j < keys.length; j++) {
            // @ts-ignore
            currentData[keys[j]] = currentValues[j];
        }
        mergeValues.push(currentData);
    }
    return mergeValues;
}
function getRuleList() {
    return RuleList_1.RuleList;
}
function getRuleUiList() {
    var ruleList = getRuleList();
    var ids = Object.getOwnPropertyNames(ruleList);
    var rules = [];
    ids.forEach(function (id) {
        var rule = ruleList[id].serialize();
        rule["id"] = id;
        rules.push(rule);
    });
    return rules;
}
function getRuleModes() {
    return ["any", "all"];
}
function getRuleMode() {
    return "all";
}
function getSettings() {
    var spreadsheet = null;
    if (getSpreadsheetId() != null) {
        spreadsheet = {
            name: getSpreadsheet().getName(),
            sheets: getSheets(),
            sheet: getSheetName(),
            url: getSpreadsheetUrl(),
            columnNames: getColumnNames()
        };
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
function promptForSheet() {
    var ui = DocumentApp.getUi();
    var response = ui.prompt("Spreadsheet ID", "What is the ID of your spreadsheet?", ui.ButtonSet.OK);
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
function addMergeData(doc) {
    var body = doc.getBody();
    var bodyCopy = body.copy();
    // @ts-ignore
    var fields = getColumnNames();
    // @ts-ignore
    var allData = getMergeValues();
    // @ts-ignore
    var mergeData = new MergeData_1["default"](allData, fields);
    var bodyText = body.getText();
    // @ts-ignore
    var skips = bodyText.split(makeNextPlaceholder()).length;
    var numRepeats = Math.ceil(allData.length / skips) - 1;
    var emptyField = {};
    for (var i = 0; i < fields.length; i++) {
        // @ts-ignore
        emptyField[fields[i]] = "";
    }
    for (var i = 0; i < numRepeats; i++) {
        addTemplate(body, bodyCopy);
    }
    var data = mergeData.next();
    var searchPattern = "\{\{.[^\}]*\}\}";
    while (body.findText(searchPattern)) {
        var range = body.findText(searchPattern);
        var start = range.getStartOffset();
        var end = range.getEndOffsetInclusive();
        var placeholder = range.getElement().getText().substring(start, end + 1);
        // @ts-ignore
        if (placeholder == makeNextPlaceholder()) {
            if (mergeData.hasNext()) {
                data = mergeData.next();
            }
            else {
                data = emptyField;
            }
            replaceTextInEl(range.getElement(), start, end, "");
        }
        // @ts-ignore
        else if (placeholder == makeNextHiddenPlaceholder()) {
            if (mergeData.hasNext()) {
                data = mergeData.next();
            }
            else {
                data = emptyField;
            }
            //remove or text stays hidden in document??
            replaceTextInEl(range.getElement(), start, end, "");
            range.getElement().getParent().removeChild(range.getElement());
        }
        // @ts-ignore
        else if (fields.indexOf(removePlaceholderTags(placeholder)) > -1) {
            // @ts-ignore
            replaceTextInEl(range.getElement(), start, end, data[removePlaceholderTags(placeholder)]);
        }
        else {
            // @ts-ignore
            replaceTextInEl(range.getElement(), start, end, "UNKNOWN PLACEHOLDER: " + removePlaceholderTags(placeholder));
        }
    }
}
function replaceTextInEl(el, start, end, replace) {
    el.deleteText(start, end);
    el.insertText(start, replace);
}
function addTemplate(body, template) {
    // @ts-ignore
    body.appendParagraph(makeNextHiddenPlaceholder());
    body.appendPageBreak();
    for (var j = 0; j < template.getNumChildren(); j++) {
        var element = template.getChild(j).copy();
        var type = element.getType();
        if (type == DocumentApp.ElementType.PARAGRAPH)
            body.appendParagraph(element);
        else if (type == DocumentApp.ElementType.TABLE)
            body.appendTable(element);
        else if (type == DocumentApp.ElementType.LIST_ITEM)
            body.appendListItem(element);
        else
            throw new Error("Unknown element type: " + type);
    }
}
function elContainsPlaceholderFromList(list, el) {
    for (var i = 0; i < list.length; i++) {
        if (!el.findText) {
            throw ("Element does not contain text");
        }
        // @ts-ignore
        if (el.findText(makePlaceholder(list[i]))) {
            return true;
        }
    }
    return false;
}

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(5)))

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

exports.__esModule = true;
var MergeData = /** @class */ (function () {
    function MergeData(data, columns) {
        this.data = data;
        this.currentRow = -1;
        this.columns = columns;
    }
    MergeData.prototype.getColumns = function () {
        return this.columns;
    };
    MergeData.prototype.hasNext = function () {
        return this.data.length > this.currentRow + 1;
    };
    MergeData.prototype.next = function () {
        this.currentRow++;
        return this.data[this.currentRow];
    };
    return MergeData;
}());
exports["default"] = MergeData;


/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

exports.__esModule = true;
var TextIsEmptyRule_1 = __webpack_require__(10);
var TextIsNotEmptyRule_1 = __webpack_require__(23);
var TextContainsRule_1 = __webpack_require__(24);
var TextDoesNotContainRule_1 = __webpack_require__(25);
var TextStartsWithRule_1 = __webpack_require__(26);
var TextEndsWithRule_1 = __webpack_require__(27);
var TextIsExactlyRule_1 = __webpack_require__(28);
var NumberGreaterThanRule_1 = __webpack_require__(29);
var NumberGreaterThanOrEqualToRule_1 = __webpack_require__(30);
var NumberLessThanRule_1 = __webpack_require__(31);
var NumberLessThanRuleOrEqualToRule_1 = __webpack_require__(32);
var NumberEqualToRule_1 = __webpack_require__(33);
var NumberNotEqualToRule_1 = __webpack_require__(34);
exports.RuleList = {
    isEmpty: new TextIsEmptyRule_1.TextIsEmptyRule(),
    isNotEmpty: new TextIsNotEmptyRule_1.TextIsNotEmptyRule(),
    textContains: new TextContainsRule_1.TextContainsRule(),
    textDoesNotContain: new TextDoesNotContainRule_1.TextDoesNotContainRule(),
    textStartsWith: new TextStartsWithRule_1.TextStartsWithRule(),
    textEndsWith: new TextEndsWithRule_1.TextEndsWithRule(),
    textIsExactly: new TextIsExactlyRule_1.TextIsExactlyRule(),
    greaterThan: new NumberGreaterThanRule_1.NumberGreaterThanRule(),
    greaterThanOrEqualTo: new NumberGreaterThanOrEqualToRule_1.NumberGreaterThanOrEqualToRuleRule(),
    lessThan: new NumberLessThanRule_1.NumberLessThanRule(),
    lessThanOrEqualTo: new NumberLessThanRuleOrEqualToRule_1.NumberLessThanRuleOrEqualToRule(),
    equalTo: new NumberEqualToRule_1.NumberEqualToRule(),
    notEqualTo: new NumberNotEqualToRule_1.NumberNotEqualToRule(),
};


/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
var TextRule_1 = __webpack_require__(0);
var TextIsEmptyRule = /** @class */ (function (_super) {
    __extends(TextIsEmptyRule, _super);
    function TextIsEmptyRule() {
        var _this = _super.call(this, "is empty") || this;
        _this.showComparison = false;
        return _this;
    }
    TextIsEmptyRule.prototype.rule = function (mergeField, comparison) {
        if (comparison === void 0) { comparison = null; }
        return mergeField === "";
    };
    return TextIsEmptyRule;
}(TextRule_1.TextRule));
exports.TextIsEmptyRule = TextIsEmptyRule;


/***/ }),
/* 11 */,
/* 12 */,
/* 13 */,
/* 14 */,
/* 15 */,
/* 16 */,
/* 17 */,
/* 18 */,
/* 19 */,
/* 20 */,
/* 21 */,
/* 22 */,
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
var TextRule_1 = __webpack_require__(0);
var TextIsNotEmptyRule = /** @class */ (function (_super) {
    __extends(TextIsNotEmptyRule, _super);
    function TextIsNotEmptyRule() {
        var _this = _super.call(this, "is not empty") || this;
        _this.showComparison = false;
        return _this;
    }
    TextIsNotEmptyRule.prototype.rule = function (mergeField, comparison) {
        if (comparison === void 0) { comparison = null; }
        return mergeField !== "";
    };
    return TextIsNotEmptyRule;
}(TextRule_1.TextRule));
exports.TextIsNotEmptyRule = TextIsNotEmptyRule;


/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
var TextRule_1 = __webpack_require__(0);
var TextContainsRule = /** @class */ (function (_super) {
    __extends(TextContainsRule, _super);
    function TextContainsRule() {
        return _super.call(this, "contains") || this;
    }
    TextContainsRule.prototype.rule = function (mergeField, comparison) {
        return mergeField.indexOf(comparison) > -1;
    };
    return TextContainsRule;
}(TextRule_1.TextRule));
exports.TextContainsRule = TextContainsRule;


/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
var TextRule_1 = __webpack_require__(0);
var TextDoesNotContainRule = /** @class */ (function (_super) {
    __extends(TextDoesNotContainRule, _super);
    function TextDoesNotContainRule() {
        return _super.call(this, "does not contain") || this;
    }
    TextDoesNotContainRule.prototype.rule = function (mergeField, comparison) {
        return mergeField.indexOf(comparison) == -1;
    };
    return TextDoesNotContainRule;
}(TextRule_1.TextRule));
exports.TextDoesNotContainRule = TextDoesNotContainRule;


/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
var TextRule_1 = __webpack_require__(0);
var TextStartsWithRule = /** @class */ (function (_super) {
    __extends(TextStartsWithRule, _super);
    function TextStartsWithRule() {
        return _super.call(this, "starts with") || this;
    }
    TextStartsWithRule.prototype.rule = function (mergeField, comparison) {
        return mergeField.startsWith(comparison);
    };
    return TextStartsWithRule;
}(TextRule_1.TextRule));
exports.TextStartsWithRule = TextStartsWithRule;


/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
var TextRule_1 = __webpack_require__(0);
var TextEndsWithRule = /** @class */ (function (_super) {
    __extends(TextEndsWithRule, _super);
    function TextEndsWithRule() {
        return _super.call(this, "ends with") || this;
    }
    TextEndsWithRule.prototype.rule = function (mergeField, comparison) {
        return mergeField.endsWith(comparison);
    };
    return TextEndsWithRule;
}(TextRule_1.TextRule));
exports.TextEndsWithRule = TextEndsWithRule;


/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
var TextRule_1 = __webpack_require__(0);
var TextIsExactlyRule = /** @class */ (function (_super) {
    __extends(TextIsExactlyRule, _super);
    function TextIsExactlyRule() {
        return _super.call(this, "is exactly") || this;
    }
    TextIsExactlyRule.prototype.rule = function (mergeField, comparison) {
        return mergeField === comparison;
    };
    return TextIsExactlyRule;
}(TextRule_1.TextRule));
exports.TextIsExactlyRule = TextIsExactlyRule;


/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
var NumberRule_1 = __webpack_require__(1);
var NumberGreaterThanRule = /** @class */ (function (_super) {
    __extends(NumberGreaterThanRule, _super);
    function NumberGreaterThanRule() {
        return _super.call(this, "is greater than") || this;
    }
    NumberGreaterThanRule.prototype.rule = function (mergeField, comparison) {
        return mergeField > comparison;
    };
    return NumberGreaterThanRule;
}(NumberRule_1.NumberRule));
exports.NumberGreaterThanRule = NumberGreaterThanRule;


/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
var NumberRule_1 = __webpack_require__(1);
var NumberGreaterThanOrEqualToRuleRule = /** @class */ (function (_super) {
    __extends(NumberGreaterThanOrEqualToRuleRule, _super);
    function NumberGreaterThanOrEqualToRuleRule() {
        return _super.call(this, "is greater than or equal to") || this;
    }
    NumberGreaterThanOrEqualToRuleRule.prototype.rule = function (mergeField, comparison) {
        return mergeField >= comparison;
    };
    return NumberGreaterThanOrEqualToRuleRule;
}(NumberRule_1.NumberRule));
exports.NumberGreaterThanOrEqualToRuleRule = NumberGreaterThanOrEqualToRuleRule;


/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
var NumberRule_1 = __webpack_require__(1);
var NumberLessThanRule = /** @class */ (function (_super) {
    __extends(NumberLessThanRule, _super);
    function NumberLessThanRule() {
        return _super.call(this, "is less than") || this;
    }
    NumberLessThanRule.prototype.rule = function (mergeField, comparison) {
        return mergeField < comparison;
    };
    return NumberLessThanRule;
}(NumberRule_1.NumberRule));
exports.NumberLessThanRule = NumberLessThanRule;


/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
var NumberRule_1 = __webpack_require__(1);
var NumberLessThanRuleOrEqualToRule = /** @class */ (function (_super) {
    __extends(NumberLessThanRuleOrEqualToRule, _super);
    function NumberLessThanRuleOrEqualToRule() {
        return _super.call(this, "is less than or equal to") || this;
    }
    NumberLessThanRuleOrEqualToRule.prototype.rule = function (mergeField, comparison) {
        return mergeField <= comparison;
    };
    return NumberLessThanRuleOrEqualToRule;
}(NumberRule_1.NumberRule));
exports.NumberLessThanRuleOrEqualToRule = NumberLessThanRuleOrEqualToRule;


/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
var NumberRule_1 = __webpack_require__(1);
var NumberEqualToRule = /** @class */ (function (_super) {
    __extends(NumberEqualToRule, _super);
    function NumberEqualToRule() {
        return _super.call(this, "is equal to") || this;
    }
    NumberEqualToRule.prototype.rule = function (mergeField, comparison) {
        return mergeField === comparison;
    };
    return NumberEqualToRule;
}(NumberRule_1.NumberRule));
exports.NumberEqualToRule = NumberEqualToRule;


/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
var NumberRule_1 = __webpack_require__(1);
var NumberNotEqualToRule = /** @class */ (function (_super) {
    __extends(NumberNotEqualToRule, _super);
    function NumberNotEqualToRule() {
        return _super.call(this, "is not equal to") || this;
    }
    NumberNotEqualToRule.prototype.rule = function (mergeField, comparison) {
        return mergeField !== comparison;
    };
    return NumberNotEqualToRule;
}(NumberRule_1.NumberRule));
exports.NumberNotEqualToRule = NumberNotEqualToRule;


/***/ })
/******/ ]);