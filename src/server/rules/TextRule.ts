import {FIELD_TYPE, Rule} from "./Rule";

export abstract class TextRule extends Rule {

    constructor(label: string) {
        super(FIELD_TYPE.String, label);
    }

}