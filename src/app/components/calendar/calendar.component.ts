import {Component, OnInit} from '@angular/core';

import { Month } from '../../models/month.model';

@Component({
    selector: 'calendar',
    templateUrl: 'calendar.component.html'
})
export class CalendarComponent implements OnInit{

    currentMonth: Month;

    constructor(){}

    ngOnInit() {
        let params: any = this.getMonthInfo();
        this.currentMonth = new Month(params);
    }

    private getMonthInfo() {
        let now = new Date();
        let monthInfo: any = {
            days: new Date(now.getFullYear(), now.getMonth() + 1, 0).getDate(),
            monthPosition: new Date(now.getFullYear(), now.getMonth() + 1, 0).getMonth() + 1
        };
        return monthInfo;
    }
}
