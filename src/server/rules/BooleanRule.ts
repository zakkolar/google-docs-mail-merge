import {FIELD_TYPE, Rule} from "./Rule";

export abstract class BooleanRule extends Rule {

    constructor(label: string) {
        super(FIELD_TYPE.Boolean, label);
    }

}