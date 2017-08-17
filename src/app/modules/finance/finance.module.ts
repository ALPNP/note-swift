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
    MdListModule, MdChipsModule, DateAdapter
} from '@angular/material';
import {CommonModule} from "@angular/common";
import {ReactiveFormsModule} from "@angular/forms";
import {AddCostDialogComponent} from "./components/add-cost-dialog/add-cost-dialog.component";
import {EditCostDialogComponent} from "./components/edit-cost-dialog/edit-cost-dialog.component";
import {CostsStatisticComponent} from "./components/costs-statistic/costs-statistic.component";
import {CustomNativeDateAdapter} from "../../adapters/custom-native-date.adapter";

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
        MdChipsModule,
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
        CostsChartComponent,
        CostsStatisticComponent
    ],
    declarations: [
        CostsComponent,
        AddCostComponent,
        CostsComponent,
        CostsChartLayoutComponent,
        CostsListComponent,
        CostsChartComponent,
        Spinner,
        AddCostDialogComponent,
        EditCostDialogComponent,
        CostsStatisticComponent
    ],
    entryComponents: [
        Spinner,
        AddCostComponent,
        AddCostDialogComponent,
        EditCostDialogComponent
    ],
    providers: [
        CostsService,
        {provide: DateAdapter, useClass: CustomNativeDateAdapter}
    ]
})
export class FinanceModule {

}
