import {Component, ViewChild} from "@angular/core";
import {CostsListComponent} from "../costs-list/costs-list.component";
import {CostsChartComponent} from "../costs-chart/costs-chart.component";

@Component({
    selector: 'costs',
    templateUrl: './costs.component.html',
    styleUrls: ['./costs.component.scss'],
})
export class CostsComponent {

    @ViewChild(CostsListComponent) private costsListComponent: CostsListComponent;
    @ViewChild(CostsChartComponent) private costsChartComponent: CostsChartComponent;

    costAdded(e: any) {
        this.costsListComponent.getCosts();
        this.costsChartComponent.getChart();
    }
}
