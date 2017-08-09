import {Component, ViewChild} from "@angular/core";
import {CostsChartComponent} from "../costs-chart/costs-chart.component";
import {CostsListComponent} from "../costs-list/costs-list.component";
import {CostsStatisticComponent} from "../costs-statistic/costs-statistic.component";

@Component({
    selector: 'costs',
    templateUrl: 'costs.component.html',
    styleUrls: ['costs.component.scss']
})
export class CostsComponent {

    constructor() {
    }

    @ViewChild(CostsListComponent) private costsListComponent: CostsListComponent;
    @ViewChild(CostsChartComponent) private costsChartComponent: CostsChartComponent;
    @ViewChild(CostsStatisticComponent) private costsStatisticComponent: CostsStatisticComponent;

    requestModifiedData() {
        this.costsListComponent.getCosts();
        this.costsChartComponent.getChart();
    }
}
