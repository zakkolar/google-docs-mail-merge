import {DateRule} from "./DateRule";

export class DateIsRule extends DateRule{
    rule(mergeField, comparison): boolean {
        return mergeField.getTime() === comparison.getTime();
    }

    constructor(){
        super("is date");
    }

}