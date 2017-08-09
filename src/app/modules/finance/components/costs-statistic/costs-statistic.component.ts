import {Component, OnInit} from "@angular/core";

@Component({
    selector: 'costs-statistic',
    templateUrl: './costs-statistic.component.html',
    styleUrls: ['./costs-statistic.component.scss']
})
export class CostsStatisticComponent implements OnInit {

    firstDay: string;
    lastDay: string;
    statisticData: any;

    constructor() {

    }

    ngOnInit() {

    }
}
