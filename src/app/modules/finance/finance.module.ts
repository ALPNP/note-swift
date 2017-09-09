import {NgModule} from "@angular/core";
import {CostsComponent} from "./components/costs/costs.component";
import {Spinner} from "../../components/spinner/spinner.component";
import {AddCostComponent} from "./components/add-cost/add-cost.component";
import {CostsChartLayoutComponent} from "./components/costs-chart-layout/costs-chart-layout.component";
import {CostsListComponent} from "./components/costs-list/costs-list.component";
import {CostsChartComponent} from "./components/costs-chart/costs-chart.component";
import {CostsService} from "./services/costs.service";
import {CommonModule} from "@angular/common";
import {AddCostDialogComponent} from "./components/add-cost-dialog/add-cost-dialog.component";
import {EditCostDialogComponent} from "./components/edit-cost-dialog/edit-cost-dialog.component";
import {CostsStatisticComponent} from "./components/costs-statistic/costs-statistic.component";
import {SharedModule} from "../shared/shared.module";
import {CostsControlPanelComponent} from "./components/costs-control-panel/costs-control-panel.component";

@NgModule({
    imports: [
        SharedModule,
        CommonModule
    ],
    declarations: [
        CostsComponent,
        AddCostComponent,
        CostsChartLayoutComponent,
        CostsListComponent,
        CostsChartComponent,
        Spinner,
        AddCostDialogComponent,
        EditCostDialogComponent,
        CostsStatisticComponent,
        CostsControlPanelComponent
    ],
    entryComponents: [
        Spinner,
        AddCostComponent,
        AddCostDialogComponent,
        EditCostDialogComponent
    ],
    providers: [
        CostsService
    ]
})
export class FinanceModule {

}
