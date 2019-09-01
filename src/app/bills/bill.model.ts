export class Bill {
    public title: string;
    public description: string;
    public amount: number;

    constructor(title: string, desc: string, amount: number) {
        this.title = title;
        this.description = desc;
        this.amount = amount;
    }
}