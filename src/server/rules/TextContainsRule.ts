import {TextRule} from "./TextRule";

export class TextContainsRule extends TextRule{
    rule(mergeField: string, comparison: string): boolean {
        return mergeField.indexOf(comparison)>-1;
    }

    constructor(){
        super("contains");
    }

}