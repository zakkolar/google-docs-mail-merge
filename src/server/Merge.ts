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

    // Depth First Search
    const elements = [body];
        while(elements.length>0){
            const el = elements.shift();
            if(el.getNumChildren){
                const children = el.getNumChildren();
                for(let i=children-1; i>=0; i--){
                    elements.unshift(el.getChild(i));
                }
            }
            else{
                if(el.findText){
                    // @ts-ignore
                    if(el.findText(makeNextPlaceholder())){
                        if(mergeData.hasNext()){
                            data = mergeData.next();
                        }
                        else{
                            data = emptyField;
                        }
                        // @ts-ignore
                        el.replaceText(makeNextPlaceholder(),"");
                    }

                    // @ts-ignore
                    if(el.findText(makeNextHidenPlaceholder())){
                        if(mergeData.hasNext()){
                            data = mergeData.next();
                        }
                        else{
                            data = emptyField;
                        }
                        el.getParent().removeChild(el);
                    }
                }
                if(el.replaceText){
                    for(var i=0; i<fields.length; i++){
                        var field = fields[i];
                        // @ts-ignore
                        el.replaceText(makePlaceholder(field),data[field]);
                    }
                }
            }
        }



}


function addTemplate(body, template){
    // @ts-ignore
    body.appendParagraph(makeNextHidenPlaceholder());
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