export class PubDisplay {
    public title: string = '';
    public method: string = '';
    public publishurl: string = '';

    constructor(data?: any) {
        this.title = data?.title;
        this.method = data?.method;
        this.publishurl = data?.publishurl;
    }
}
