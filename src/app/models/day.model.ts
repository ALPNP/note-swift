export class Day {
    color: string;

    constructor(public dayOfMonth: number,
                public dayOfWeek: string,
                public cols: number,
                public rows: number,
                color: string) {
        this.color =  '#' + color;
    }
}
