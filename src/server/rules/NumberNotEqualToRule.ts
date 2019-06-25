import {NumberRule} from "./NumberRule";

export class NumberNotEqualToRule extends NumberRule{
    rule(mergeField, comparison): boolean {
        return mergeField !== comparison;
    }

    constructor(){
        super("is not equal to");
    }

}