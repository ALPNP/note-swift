import {Component, Output, EventEmitter} from "@angular/core";

@Component({
    selector: 'costs-chart-layout',
    templateUrl: 'costs-chart-layout.component.html',
    styleUrls: ['costs-chart-layout.component.scss']
})
export class CostsChartLayoutComponent {

    @Output() chartClick = new EventEmitter<boolean>();
    @Output() chartHover = new EventEmitter<boolean>();

    public chartDataSet: boolean = false;
    public chartData: Array<any> = [{data: []}];
    public chartLabels: Array<any> = [];

    public chartType: string = 'line';
    public chartOptions: any = {responsive: true};
    public chartLegend: boolean = true;

    constructor() {

    }

    setChartData(chartData) {
        this.chartData = chartData['chartData'];
        this.chartLabels = chartData['chartLabels'];
        this.chartDataSet = true;
    }

    public chartClicked(e: any): void {
        this.chartClick.emit(e);
    }

    public chartHovered(e: any): void {
        this.chartHover.emit(e);
    }

    switchChart(type) {
        this.chartType = type;
    }
}