import {Component} from '@angular/core';

@Component({
    selector: 'costs-chart',
    templateUrl: 'costs-chart.component.html',
    styleUrls: ['costs-chart.component.scss']
})
export class CostsChartComponent{
    public barChartOptions:any = {
        scaleShowVerticalLines: false,
        responsive: true
    };
    public barChartLabels:string[] = ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'];
    public barChartType:string = 'bar';
    public barChartLegend:boolean = true;

    public reverse: number[] = [65000, 63300, 43222, 12000, 6000, 5000, 120000, 100000, 5000, 3000, 2000, 20000].reverse();

    public barChartData:any[] = [
        {data: [65000, 63300, 43222, 12000, 6000, 5000, 120000, 100000, 5000, 3000, 2000, 20000], label: 'Доходы'},
        {data: this.reverse, label: 'Расходы'}
    ];

    // events
    public chartClicked(e:any):void {
        console.log(e);
    }

    public chartHovered(e:any):void {
        console.log(e);
    }
}
