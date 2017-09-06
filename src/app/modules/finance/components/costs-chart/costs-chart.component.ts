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
    chartLayoutParams: any = {
        fetchMethod: 'getCostsChart',
        switchable: true
    };

    chartLayoutOptions: any = {
        responsive: true
    };

    chartLayoutColors: any[] = [
        {
            backgroundColor: 'rgba(164,251,166,0.6)',
            borderColor: 'rgb(74,229,74)',
            pointBackgroundColor: 'rgb(164,251,166)',
            pointBorderColor: 'rgb(74,229,74)',
            pointHoverBackgroundColor: '#30CB00',
            pointHoverBorderColor: '#006203'
        },
        {
            backgroundColor: 'rgba(250,88,88,0.6)',
            borderColor: 'rgb(184,0,0)',
            pointBackgroundColor: 'rgb(250,88,88)',
            pointBorderColor: 'rgb(184,0,0)',
            pointHoverBackgroundColor: '#FF4081',
            pointHoverBorderColor: '#FF4081'
        }
    ];

    constructor(public costsService: CostsService) {
    }

    chartClick(e: any): void {
        console.log(e);
    }

    chartHover(e: any): void {
        console.log(e);
    }
}
