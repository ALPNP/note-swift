import {Component, ViewChild} from '@angular/core';
import {CostsChartLayoutComponent} from "../costs-chart-layout/costs-chart-layout.component";
import {CostsService} from "../../services/costs.service";

@Component({
    selector: 'costs-chart',
    templateUrl: 'costs-chart.component.html',
    styleUrls: ['costs-chart.component.scss']
})
export class CostsChartComponent {
    @ViewChild(CostsChartLayoutComponent) private costsChartLayoutComponent: CostsChartLayoutComponent;
    chartLayoutParams: any;

    constructor(public costsService: CostsService) {
            this.chartLayoutParams = {
                fetchMethod: 'getCostsChart'
            }
    }

    updateChart() {
        this.costsChartLayoutComponent.getChart();
    }

    chartClick(e: any) {
        console.log(e);
    }

    chartHover(e: any) {
        console.log(e);
    }
}
