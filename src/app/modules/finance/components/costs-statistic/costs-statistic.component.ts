import {Component, OnInit} from "@angular/core";
import {CostsService} from "../../services/costs.service";
import {CostStatistic} from "../../models/cost-statistic.model";
import * as moment from 'moment';
import {Utilities} from "../../../../utilities/utilities";

moment.locale('ru');

@Component({
    selector: 'costs-statistic',
    templateUrl: './costs-statistic.component.html',
    styleUrls: ['./costs-statistic.component.scss']
})
export class CostsStatisticComponent implements OnInit {
    costStatistic: CostStatistic;
    loading: boolean;

    constructor(public costsService: CostsService) {
        this.costStatistic = new CostStatistic();
        this.loading = false;
    }

    ngOnInit() {
        this.getStatistic();
    }

    getStatistic(options?: any) {
        this.loading = true;
        this.costsService.getCostsStatisticByInterval(options)
            .finally(() => this.loading = false)
            .subscribe(
                data => this.costStatistic = new CostStatistic(data),
                err => console.log(err),
                () => {
                    this.costStatistic['formatCurrentDay'] = moment(this.costStatistic.currentDay).format('LL');
                    let currentDayName: string = moment(this.costStatistic.currentDay).format('dddd');
                    this.costStatistic['currentDayName'] = Utilities.capitaliseFirstLetter(currentDayName);
                }
            )
    }
}
