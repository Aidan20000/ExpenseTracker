export class Expense {
    private id: Number;
    private description: string;
    private amountInCents: Number;
    private category: string;
    private date: string;
    private allowedCategories = new Set(["Food", "Transportation", "Entertainment"]);

    constructor(id: Number, description: string, amountInCents: Number, category: string, date: string) {
        this.id = id;
        this.description = description;
        this.amountInCents = amountInCents;
        this.category = category;
        this.date = date;
    }
}