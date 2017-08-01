export class Cost {
    date: Date;
    type: string;
    amount: number;
    description: string;
    username: string = (() => JSON.parse(localStorage.getItem('currentUser'))['username'])();

    constructor() {
    }
}
