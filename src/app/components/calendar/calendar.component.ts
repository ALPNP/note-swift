import {Component, OnInit} from '@angular/core';

import {Month} from '../../models/month.model';
import {Day} from '../../models/day.model';
import {Utilities} from '../../utilities/utilities';

@Component({
    selector: 'calendar',
    templateUrl: 'calendar.component.html',
    styleUrls: ['./calendar.component.scss']
})
export class CalendarComponent implements OnInit{

    currentMonth: Month;
    currentDaysOfMonth: Day[] = [];
    utilities: Utilities = new Utilities();

    constructor(){}

    ngOnInit() {
        let params: any = this.utilities.getMonthInfo();
        this.currentMonth = new Month(params);
        this.createDays();
        console.log(this.currentDaysOfMonth);
    }

    private createDays() {
        let maxDays = this.currentMonth.days;
        console.log(maxDays);
        for (let i = 1; i <= maxDays; i++) {
            console.log(i);
            let day: Day = new Day(i, 'Понедельник', 1, 1, "DDBDF1");
            this.currentDaysOfMonth.push(day);
        }
    }
}
