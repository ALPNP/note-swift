import {Component, OnInit} from '@angular/core';
import {CostsService} from "../../services/costs.service";

@Component({
    selector: 'costs-chart',
    templateUrl: 'costs-chart.component.html',
    styleUrls: ['costs-chart.component.scss']
})
export class CostsChartComponent implements OnInit {

    public barChartOptions: any = {
        scaleShowVerticalLines: true,
        responsive: true
    };
    public barChartType: string = 'line';
    public barChartLegend: boolean = true;

    // public barChartLabels:string[] = ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'];
    // public barChartLabels:string[] = ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье'];
    barChartLabels: string[] = [];
    barChartData: any[] = [];

    /////////////////////////////////////////////////
    /////////////////////////////////////////////////
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

            },
            err => {
                console.log(err);
            }
        );
    }

    // events
    public chartClicked(e: any): void {
        console.log(e);
    }

    public chartHovered(e: any): void {
        console.log(e);
    }
}
