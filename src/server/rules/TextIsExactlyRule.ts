import {TextRule} from "./TextRule";

export class TextIsExactlyRule extends TextRule{

    rule(mergeField: String, comparison: String): boolean {
        return mergeField === comparison;
    }

    constructor(){
        super("is exactly");
    }

}