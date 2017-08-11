import {Component, OnInit} from "@angular/core";
import {CostsService} from "../../services/costs.service";

@Component({
    selector: 'costs-statistic',
    templateUrl: './costs-statistic.component.html',
    styleUrls: ['./costs-statistic.component.scss']
})
export class CostsStatisticComponent implements OnInit {

    startDay: string;
    endDay: string;
    addSummary: number;
    removeSummary: number;
    currentInterval: number;

    constructor(public costsService: CostsService) {

    }

    ngOnInit() {
        this.getStatistic();
    }

    getStatistic(options?: any) {
        this.costsService.getCostsStatistic(options).subscribe(
            data => {
                this.startDay = data['startDay'];
                this.endDay = data['endDay'];
                this.addSummary = data['addSummary'];
                this.removeSummary = data['removeSummary'];
                this.currentInterval = data['daysCount'];
            },
            err => {
                console.log(err);
            }
        )
    }
}
