import {TextRule} from "./TextRule";

export class TextStartsWithRule extends TextRule{
    rule(mergeField: string, comparison: string): boolean {
        return mergeField.startsWith(comparison);
    }

    constructor(){
        super("starts with");
    }

}