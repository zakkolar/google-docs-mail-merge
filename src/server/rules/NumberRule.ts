import {FIELD_TYPE, Rule} from "./Rule";

export abstract class NumberRule extends Rule{
    constructor(label: string) {
        super(FIELD_TYPE.Number, label);
    }
}