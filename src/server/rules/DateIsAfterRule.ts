import {DateRule} from "./DateRule";

export class DateIsAfterRule extends DateRule{
    rule(mergeField, comparison): boolean {
        return mergeField.getTime() > comparison.getTime();
    }

    constructor(){
        super("is after");
    }

}