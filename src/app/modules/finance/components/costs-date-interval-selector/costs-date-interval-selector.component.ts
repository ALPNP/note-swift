import {Component, OnInit, Output, EventEmitter} from "@angular/core";
import {FormGroup, FormControl, Validators} from "@angular/forms";
import {DateInterval} from "../../models/date-interval.model";
import * as moment from 'moment';
import {CostsService} from "../../services/costs.service";

moment.locale('ru');

function datePickerValidator (input: FormControl) {
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
    @Output() costsSearchEmitter: EventEmitter<any> = new EventEmitter<any>();

    constructor(private costsService: CostsService) {
    }

    ngOnInit() {
        this.dateInterval = new DateInterval();
        this.searchRunning = false;
        this.dateIntervalFormInit();
        this.costsStreamObserver();
    }

    costsStreamObserver(): void {
        this.costsService.costsFetched$.subscribe(data => this.searchRunning = false);
    }

    dateIntervalFormInit(): void {
        this.dateIntervalForm = new FormGroup({
            startDate: new FormControl(this.dateInterval.startDate, [Validators.required, datePickerValidator]),
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
        this.searchRunning = true;
        this.costsService.setDateInterval(this.dateInterval);
        this.costsSearchEmitter.emit();
    }

    clearDateInterval(e): void {
        this.costsService.clearDateInterval();
        this.dateIntervalForm.reset();
        this.costsSearchEmitter.emit();
    }
}
