import {Component, ViewChild} from "@angular/core";
import {CostsChartComponent} from "../costs-chart/costs-chart.component";

@Component({
    selector: 'costs-control-panel',
    templateUrl: './costs-control-panel.component.html',
    styleUrls: ['./costs-control-panel.component.scss']
})
export class CostsControlPanelComponent {
    showChartStatus: boolean = false;
    @ViewChild(CostsChartComponent) private costsChartComponent: CostsChartComponent;

    constructor() {
    }

    toggleChart(e): void {
        this.showChartStatus = !this.showChartStatus;
    }

    updateChartLayout(): void {
        if (this.showChartStatus) {
            this.costsChartComponent.updateChart();
        }
    }
}
