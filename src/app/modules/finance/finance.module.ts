import {NgModule} from "@angular/core";
import {ChartsModule} from "ng2-charts";
import {SimpleNotificationsModule} from "angular2-notifications";
import {CostsComponent} from "./components/costs/costs.component";
import {Spinner} from "../../components/spinner/spinner.component";
import {AddCostComponent} from "./components/add-cost/add-cost.component";
import {CostsChartLayoutComponent} from "./components/costs-chart-layout/costs-chart-layout.component";
import {CostsListComponent} from "./components/costs-list/costs-list.component";
import {CostsChartComponent} from "./components/costs-chart/costs-chart.component";
import {CostsService} from "./services/costs.service";

import {
    MdButtonModule,
    MdIconModule,
    MdCardModule,
    MdInputModule,
    MdTooltipModule,
    MdDialogModule,
    MdDatepickerModule,
    MdNativeDateModule,
    MdSelectModule,
    MdGridListModule,
    MdProgressSpinnerModule,
    MdListModule
} from '@angular/material';
import {CommonModule} from "@angular/common";
import {ReactiveFormsModule} from "@angular/forms";
import {AddCostDialogComponent} from "./components/add-cost-dialog/add-cost-dialog.component";

@NgModule({
    imports: [
        MdListModule,
        MdDatepickerModule,
        MdNativeDateModule,
        MdSelectModule,
        MdProgressSpinnerModule,
        MdButtonModule,
        MdDialogModule,
        MdGridListModule,
        MdCardModule,
        MdInputModule,
        MdTooltipModule,
        MdIconModule,
        ChartsModule,
        SimpleNotificationsModule.forRoot(),
        CommonModule,
        ReactiveFormsModule
    ],
    exports: [
        CostsComponent,
        AddCostComponent,
        CostsComponent,
        CostsChartLayoutComponent,
        CostsListComponent,
        CostsChartComponent
    ],
    declarations: [
        CostsComponent,
        AddCostComponent,
        CostsComponent,
        CostsChartLayoutComponent,
        CostsListComponent,
        CostsChartComponent,
        Spinner,
        AddCostDialogComponent
    ],
    entryComponents: [
        Spinner,
        AddCostComponent,
        AddCostDialogComponent
    ],
    providers: [
        CostsService
    ]
})
export class FinanceModule {

}
