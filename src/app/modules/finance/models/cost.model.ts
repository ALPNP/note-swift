export class Cost {
    date: string;
    formatDate: string;
    type: string;
    amount: number;
    description: string;
    username: string = (() => JSON.parse(localStorage.getItem('currentUser'))['username'])();

    constructor() {
    }
}
