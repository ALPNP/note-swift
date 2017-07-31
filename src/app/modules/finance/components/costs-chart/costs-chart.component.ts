import {Component, OnInit, ViewChild} from '@angular/core';
import {CostsChartLayoutComponent} from "../costs-chart-layout/costs-chart-layout.component";
import {CostsService} from "../../services/costs.service";

@Component({
    selector: 'costs-chart',
    templateUrl: 'costs-chart.component.html',
    styleUrls: ['costs-chart.component.scss']
})
export class CostsChartComponent implements OnInit {

    @ViewChild(CostsChartLayoutComponent) private costsChartLayoutComponent: CostsChartLayoutComponent;
    public currentDay: string;

    constructor(private costsService: CostsService) {

    }

    ngOnInit() {
        this.getChart();
    }

    getChart(options?: any) {
        this.costsService.getCostsChart(options).subscribe(
            data => {
                this.currentDay = data['currentDay'];
                this.costsChartLayoutComponent.setChartData(data['chart']);
            },
            err => {
                console.log(err);
            }
        );
    }
}
