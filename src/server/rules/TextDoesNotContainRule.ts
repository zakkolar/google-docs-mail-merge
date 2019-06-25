import {TextRule} from "./TextRule";

export class TextDoesNotContainRule extends TextRule{
    rule(mergeField: string, comparison: string): boolean {
        return mergeField.indexOf(comparison)==-1;
    }

    constructor(){
        super("does not contain");
    }

}