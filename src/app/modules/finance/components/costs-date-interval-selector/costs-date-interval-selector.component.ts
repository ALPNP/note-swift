import {Component, OnInit} from "@angular/core";
import {FormGroup, FormControl, Validators} from "@angular/forms";
import {DateInterval} from "../../models/date-interval.model";

@Component({
    selector: 'costs-date-interval-selector',
    templateUrl: './costs-date-interval-selector.component.html',
    styleUrls: ['./costs-date-interval-selector.component.scss']
})
export class CostsDateIntervalSelector implements OnInit {
    dateInterval: DateInterval;
    dateIntervalForm: FormGroup;

    constructor() {
        this.dateInterval = new DateInterval();
    }

    ngOnInit() {
        this.dateIntervalFormInit();
    }

    dateIntervalFormInit(): void {
        this.dateIntervalForm = new FormGroup({
            startDate: new FormControl(this.dateInterval.startDate),
            endDate: new FormControl(this.dateInterval.endDate)
        })
    }

    startDateHandler(e): void {
        console.log(e);
    }

    endDateHandler(e): void {
        console.log(e);
    }
}
