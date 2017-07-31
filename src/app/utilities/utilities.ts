export class Utilities{
    public getMonthInfo() {
        let now = new Date();
        let monthInfo: any = {
            days: new Date(now.getFullYear(), now.getMonth() + 1, 0).getDate(),
            monthPosition: new Date(now.getFullYear(), now.getMonth() + 1, 0).getMonth() + 1
        };
        return monthInfo;
    }
}
