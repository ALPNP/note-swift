import {Component, ViewChild} from "@angular/core";
import {CostsChartComponent} from "../costs-chart/costs-chart.component";
import {CostsListComponent} from "../costs-list/costs-list.component";

@Component({
    selector: 'costs',
    templateUrl: 'costs.component.html',
    styleUrls: ['costs.component.scss']
})
export class CostsComponent {

    constructor(){
    }

    public options = {
        position: ["bottom", "right"],
        timeOut: 3000,
        lastOnBottom: true
    };

    @ViewChild(CostsListComponent) private costsListComponent: CostsListComponent;
    @ViewChild(CostsChartComponent) private costsChartComponent: CostsChartComponent;

    requestModifiedData() {
        this.costsListComponent.getCosts();
        this.costsChartComponent.getChart();
    }
}
