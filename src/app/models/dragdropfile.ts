export class DragDropFile {
    public item: any;
    public url: any;

    constructor(data?: any) {
        this.item = data?.item;
        this.url = data?.url;
    }
}
