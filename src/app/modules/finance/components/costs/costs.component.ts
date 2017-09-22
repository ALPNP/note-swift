import {Component, ViewChild} from "@angular/core";
import {CostsListComponent} from "../costs-list/costs-list.component";
import {CostsStatisticComponent} from "../costs-statistic/costs-statistic.component";
import {CostsControlPanelComponent} from "../costs-control-panel/costs-control-panel.component";

@Component({
    selector: 'costs',
    templateUrl: 'costs.component.html',
    styleUrls: ['costs.component.scss']
})
export class CostsComponent {
    @ViewChild(CostsListComponent) private costsListComponent: CostsListComponent;
    @ViewChild(CostsStatisticComponent) private costsStatisticComponent: CostsStatisticComponent;
    @ViewChild(CostsControlPanelComponent) private costsControlPanelComponent: CostsControlPanelComponent;

    constructor() {
    }

    requestModifiedData(): void {
        this.costsListComponent.getCosts();
        this.costsStatisticComponent.getStatistic();
        this.costsControlPanelComponent.updateChartLayout();
    }

    costsSearchEmitter(e): void {
        this.requestModifiedData();
    }
}
