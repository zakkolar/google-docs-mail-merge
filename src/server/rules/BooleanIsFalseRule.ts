import {BooleanRule} from "./BooleanRule";

export class BooleanIsFalseRule extends BooleanRule{
    constructor(){
        super("is false");
        this.showComparison = false;
    }


    rule(mergeField, comparison = null): boolean {
        return !mergeField;
    }
}