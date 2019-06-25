import {NumberRule} from "./NumberRule";

export class NumberLessThanRuleOrEqualToRule extends NumberRule{
    rule(mergeField, comparison): boolean {
        return mergeField <= comparison;
    }

    constructor(){
        super("is less than or equal to");
    }

}