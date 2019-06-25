import {NumberRule} from "./NumberRule";

export class NumberGreaterThanOrEqualToRuleRule extends NumberRule{
    rule(mergeField, comparison): boolean {
        return mergeField >= comparison;
    }

    constructor(){
        super("is greater than or equal to");
    }

}