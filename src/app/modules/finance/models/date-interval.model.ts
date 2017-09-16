export class DateInterval {
    startDate: string;
    endDate: string;

    constructor(startDate?: string, endDate?: string) {
        this.startDate = startDate || null;
        this.endDate = endDate || null;
    }
}
