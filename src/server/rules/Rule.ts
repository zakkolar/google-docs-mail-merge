import { deflate, Serialize } from 'serialazy';
export abstract class Rule{
    type: FIELD_TYPE;
    showComparison: boolean = true;
    label: string;

    constructor(compareType: FIELD_TYPE, label: string){
        this.type = compareType;
        this.label = label;
    }

    serialize(){
        return {
            type: this.type.toString(),
            showComparison: this.showComparison,
            label: this.label
        }
    }

    formatField(field: string){
        if(!field){
            field = "";
        }
        switch(this.type){
            case FIELD_TYPE.String:
                return field.toString();
            case FIELD_TYPE.Number:
                return parseFloat(field.toString());
            case FIELD_TYPE.Date:
                return new Date(field.toString());
            default:
                return null;
        }
    }

    abstract rule(mergeField, comparison): boolean;

    test(mergeField, comparison = null): boolean{
        mergeField = this.formatField(mergeField);
        comparison = this.formatField(comparison);

        return this.rule(mergeField,comparison);
    }
}

export enum FIELD_TYPE {
    String = "Text",
    Number = "Number",
    Date = "Date"
}