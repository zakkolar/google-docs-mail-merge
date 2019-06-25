import {TextRule} from "./TextRule";

export class TextIsEmptyRule extends TextRule{
    constructor(){
        super("is empty");
        this.showComparison = false;
    }


    rule(mergeField: String, comparison = null): boolean {
        return mergeField === "";
    }
}