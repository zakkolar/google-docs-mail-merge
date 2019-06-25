import {TextRule} from "./TextRule";

export class TextIsExactlyRule extends TextRule{

    rule(mergeField: String, comparison: String): boolean {
        return mergeField === comparison;
    }

    constructor(){
        super("is exactly");
    }

    formatField(field: string) {

        field = super.formatField(field).toString();

        const lower = field.toLowerCase();
        if(lower === "true" || lower === "false"){
            return lower;
        }

        return field;
    }

}