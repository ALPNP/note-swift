import {Component, ViewChild} from "@angular/core";
import {CostsListComponent} from "../costs-list/costs-list.component";

@Component({
    selector: 'costs',
    templateUrl: './costs.component.html',
    styleUrls: ['./costs.component.scss'],
})
export class CostsComponent {

    @ViewChild(CostsListComponent) private costsListComponent: CostsListComponent;

    costAdded(e: any) {
        this.costsListComponent.getCosts();
    }
}
