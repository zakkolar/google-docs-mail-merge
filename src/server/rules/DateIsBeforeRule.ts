import {DateRule} from "./DateRule";

export class DateIsBeforeRule extends DateRule{
    rule(mergeField, comparison): boolean {
        return mergeField.getTime() < comparison.getTime();
    }

    constructor(){
        super("is before");
    }

}