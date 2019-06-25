import {TextRule} from "./TextRule";

export class TextEndsWithRule extends TextRule{
    rule(mergeField: string, comparison: string): boolean {
        return mergeField.endsWith(comparison);
    }

    constructor(){
        super("ends with");
    }

}