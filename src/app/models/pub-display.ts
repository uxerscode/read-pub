export class PubDisplay {
    public title: string = '';
    public method: string = '';
    public publishurl: string = '';
    public username: string = '';
    public userpwd: string = '';

    constructor(data?: any) {
        this.title = data?.title;
        this.method = data?.method;
        this.publishurl = data?.publishurl;
        this.username = data?.username;
        this.userpwd = data?.userpwd;
    }
}
