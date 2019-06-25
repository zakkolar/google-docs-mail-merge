import {TextRule} from "./TextRule";

export class TextIsNotEmptyRule extends TextRule{
    constructor(){
        super("is not empty");
        this.showComparison = false;
    }

    rule(mergeField: String, comparison = null): boolean {
        return mergeField !== "";
    }
}