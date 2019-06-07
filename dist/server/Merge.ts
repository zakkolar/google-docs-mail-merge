import MergeData from "./MergeData";

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