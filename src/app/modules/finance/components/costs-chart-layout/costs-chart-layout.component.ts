import {Component, Output, EventEmitter} from "@angular/core";

@Component({
    selector: 'costs-chart-layout',
    templateUrl: 'costs-chart-layout.component.html',
    styleUrls: ['costs-chart-layout.component.scss']
})
export class CostsChartLayoutComponent {

    @Output() chartClick = new EventEmitter<boolean>();
    @Output() chartHover = new EventEmitter<boolean>();

    public intervalViewName: string = 'последние 7 дней';

    public chartDataSet: boolean = false;
    public chartData: Array<any> = [{data: []}];
    public chartLabels: Array<any> = [];

    public chartType: string = 'line';
    public chartLegend: boolean = true;

    constructor() {

    }

    setChartData(chartData) {
        this.chartData = chartData['chartData'];
        this.chartLabels = chartData['chartLabels'];
        this.chartDataSet = true;
    }

    switchChart(type) {
        this.chartType = type;
    }
}
