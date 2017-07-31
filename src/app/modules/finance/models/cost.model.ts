export class Cost {
    date: Date;
    type: string;
    amount: number;
    username: string = (() => JSON.parse(localStorage.getItem('currentUser'))['username'])();

    constructor() {
    }
}
