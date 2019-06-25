import {NumberRule} from "./NumberRule";

export class NumberEqualToRule extends NumberRule{
    rule(mergeField, comparison): boolean {
        return mergeField === comparison;
    }

    constructor(){
        super("is equal to");
    }

}