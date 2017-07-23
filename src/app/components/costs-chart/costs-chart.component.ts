import {Component, OnInit} from '@angular/core';
import {CostsService} from "../../services/costs.service";
import * as _ from 'lodash';

@Component({
    selector: 'costs-chart',
    templateUrl: 'costs-chart.component.html',
    styleUrls: ['costs-chart.component.scss']
})
export class CostsChartComponent implements OnInit{
    // barChart params
    public barChartOptions:any = {
        scaleShowVerticalLines: true,
        responsive: true
    };
    public barChartType:string = 'line';
    public barChartLegend:boolean = true;
    //

    // public barChartLabels:string[] = ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'];
    // public barChartLabels:string[] = ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье'];
    barChartLabels: string[];

    public reverse: number[] = [65000, 63300, 43222, 12000, 6000, 5000, 120000].reverse();

    public barChartData:any[] = [
        {data: [65000, 63300, 43222, 12000, 6000, 5000, 120000], label: 'Доходы'},
        {data: this.reverse, label: 'Расходы'}
    ];

    /////////////////////////////////////////////////
    ////////////////////////////////////////////////
    currentWeekDays: any;
    currentDay: any;

    constructor(private costsService: CostsService) {

    }

    ngOnInit() {
        this.getChart();
    }

    getChart(options?: any) {
        this.costsService.getCostsChart(options).subscribe(
            data => {
                this.currentDay = data['currentDay'];
                this.currentWeekDays = data['currentWeekDays'];
                console.log(data);
                this.prepareChartData();
            },
            err => {
                console.log(err);
            }
        );
    }

    prepareChartData() {
        _.forEach(this.currentWeekDays, function (value) {
            console.log(value);
        });
    }

    // events
    public chartClicked(e:any):void {
        console.log(e);
    }

    public chartHovered(e:any):void {
        console.log(e);
    }
}
