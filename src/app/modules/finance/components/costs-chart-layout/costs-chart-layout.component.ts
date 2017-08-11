import {Component, Output, EventEmitter, OnInit, Input} from "@angular/core";

@Component({
    selector: 'costs-chart-layout',
    templateUrl: 'costs-chart-layout.component.html',
    styleUrls: ['costs-chart-layout.component.scss']
})
export class CostsChartLayoutComponent implements OnInit {
    @Input() service: any;
    @Input() params: any;
    @Input() chartOptions: any;
    @Input() chartColors: any[];
    @Output() chartClick = new EventEmitter<boolean>();
    @Output() chartHover = new EventEmitter<boolean>();
    public chartDataSet: boolean = false;
    public chartData: Array<any> = [{data: []}];
    public chartLabels: Array<any> = [];
    public chartType: string = 'line';
    public chartLegend: boolean = true;
    public currentDay: string;

    constructor() {

    }

    ngOnInit() {
        this.getChart();
    }

    getChart(options?: any) {
        let fetchMethod = 'fetch';

        if (this.params && this.params['fetchMethod']) {
            fetchMethod = this.params['fetchMethod'];
        }

        this.service[fetchMethod](options).subscribe(
            data => {
                this.currentDay = data['currentDay'];
                this.setChartData(data['chart']);
            },
            err => {
                console.log(err);
            }
        );
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
