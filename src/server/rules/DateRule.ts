import {FIELD_TYPE, Rule} from "./Rule";

export abstract class DateRule extends Rule{
    constructor(label: string) {
        super(FIELD_TYPE.Date, label);
    }
}