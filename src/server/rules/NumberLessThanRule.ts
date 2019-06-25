import {NumberRule} from "./NumberRule";

export class NumberLessThanRule extends NumberRule{
    rule(mergeField, comparison): boolean {
        return mergeField < comparison;
    }

    constructor(){
        super("is less than");
    }

}