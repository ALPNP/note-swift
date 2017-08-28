export class Utilities{
    public getMonthInfo() {
        let now = new Date();
        let monthInfo: any = {
            days: new Date(now.getFullYear(), now.getMonth() + 1, 0).getDate(),
            monthPosition: new Date(now.getFullYear(), now.getMonth() + 1, 0).getMonth() + 1
        };
        return monthInfo;
    }

    static capitaliseFirstLetter(string: string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }
}
