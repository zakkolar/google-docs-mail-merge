export default class MergeData{
    currentRow: number;
    data;
    columns;
    constructor(data, columns){
        this.data = data;
        this.currentRow = -1;
        this.columns = columns;
    }

    getColumns(){
        return this.columns;
    }

    hasNext(){
        return this.data.length>this.currentRow+1;
    }

    next(){
        this.currentRow++;
        return this.data[this.currentRow];
    }
}