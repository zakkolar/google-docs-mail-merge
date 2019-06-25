import {NumberRule} from "./NumberRule";

export class NumberGreaterThanRule extends NumberRule{
    rule(mergeField, comparison): boolean {
        return mergeField > comparison;
    }

    constructor(){
        super("is greater than");
    }

}