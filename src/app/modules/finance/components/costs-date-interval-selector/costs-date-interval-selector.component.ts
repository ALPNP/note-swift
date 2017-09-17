import {Component, OnInit} from "@angular/core";
import {FormGroup, FormControl, Validators} from "@angular/forms";
import {DateInterval} from "../../models/date-interval.model";
import * as moment from 'moment';
import {CostsService} from "../../services/costs.service";

moment.locale('ru');

function datePickerValidation (input: FormControl) {
    const dateRegExp = /(\d+)(-|\.)(\d+)(?:-|\.)(?:(\d+)\s+(\d+):(\d+)(?::(\d+))?(?:\.(\d+))?)?/;
    const parsedInputValue = moment(input.value).format('L');

    return dateRegExp.test(parsedInputValue) ? null : {invalidDate: true};
}

@Component({
    selector: 'costs-date-interval-selector',
    templateUrl: './costs-date-interval-selector.component.html',
    styleUrls: ['./costs-date-interval-selector.component.scss']
})
export class CostsDateIntervalSelector implements OnInit {
    dateInterval: DateInterval;
    dateIntervalForm: FormGroup;
    searchRunning: boolean;

    constructor(private costsService: CostsService) {
        this.dateInterval = new DateInterval();
        this.searchRunning = false;
    }

    ngOnInit() {
        this.dateIntervalFormInit();
    }

    dateIntervalFormInit(): void {
        this.dateIntervalForm = new FormGroup({
            startDate: new FormControl(this.dateInterval.startDate, [Validators.required, datePickerValidation]),
            endDate: new FormControl(this.dateInterval.endDate)
        })
    }

    startDateHandler(e) {
        if (e.value) {
            // console.log(e.value);
        }
    }

    endDateHandler(e) {
        if (e.value) {
            // console.log(e.value);
        }
    }

    dateIntervalFormSubmit(e) {
        console.log(this.dateInterval);
        this.searchRunning = true;
        this.costsService.searchCostsByDateInterval(this.dateInterval)
            .finally(() => this.searchRunning = false)
            .subscribe(
                data => {
                    console.log(data);
                },
                err => {
                    console.log(err);
                }
            )

    }
}
