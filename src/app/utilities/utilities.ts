import * as moment from 'moment';

moment.locale('ru');

export class Utilities{
    public getMonthInfo() {
        let now = new Date();
        let monthInfo: any = {
            days: new Date(now.getFullYear(), now.getMonth() + 1, 0).getDate(),
            monthPosition: new Date(now.getFullYear(), now.getMonth() + 1, 0).getMonth() + 1
        };
        return monthInfo;
    }

    public formatDateInArray(arr): any[] {
        for (let item of arr) {
            // console.log(moment(item['date']).format('L'));
            item['formatDate'] = moment(item['date']).format('L');
        }
        return arr;
    }
}
