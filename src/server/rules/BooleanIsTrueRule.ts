import {BooleanRule} from "./BooleanRule";

export class BooleanIsTrueRule extends BooleanRule{
    constructor(){
        super("is true");
        this.showComparison = false;
    }


    rule(mergeField, comparison = null): boolean {
        return !!mergeField;
    }
}