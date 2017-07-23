import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {ReactiveFormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';

import {ChartsModule} from 'ng2-charts/ng2-charts';
import {SimpleNotificationsModule} from 'angular2-notifications';

import {
    MdButtonModule,
    MdIconModule,
    MdGridListModule,
    MdCardModule,
    MdInputModule,
    MdTooltipModule,
    MdDialogModule,
    MdMenuModule,
    MdTabsModule,
    MdDatepickerModule,
    MdNativeDateModule,
    MdSelectModule,
    MdToolbarModule,
    MdProgressSpinnerModule,
    MdTableModule,
    MdListModule
} from '@angular/material';

import {AuthModule} from './modules';
import {AuthGuard} from './guards/auth.guard';
import {AuthenticationService} from './services/authentication.service';
import {RootService} from "./services/root.service";
import {CostsService} from "./services/costs.service";

import {AppComponent} from './app.component';
import {MainMenuComponent} from './components/main-menu/main-menu.component';
import {CalendarComponent} from './components/calendar/calendar.component';
import {DashboardComponent} from './components/dashboard/dashboard.component';
import {LoginComponent} from './components/login/login.component';
import {CostsComponent} from "./components/costs/costs.component";
import {CostsChartComponent} from "./components/costs-chart/costs-chart.component";
import {AddCostComponent} from './components/add-cost/add-cost.component';
import {CostsListComponent} from "./components/costs-list/costs-list.component";
import {AddCostDialogComponent} from "./components/add-cost-dialog/add-cost-dialog.component";

import {routing} from './app.routing';

import 'hammerjs';
import {Spinner} from "./components/spinner/spinner.component";

@NgModule({
    declarations: [
        AppComponent,
        CalendarComponent,
        MainMenuComponent,
        DashboardComponent,
        LoginComponent,
        CostsComponent,
        CostsChartComponent,
        AddCostComponent,
        CostsListComponent,
        AddCostDialogComponent,
        Spinner
    ],
    entryComponents: [
        AddCostDialogComponent,
        Spinner
    ],
    imports: [
        BrowserModule,
        HttpModule,
        AuthModule,
        BrowserAnimationsModule,
        ReactiveFormsModule,
        MdMenuModule,
        MdTabsModule,
        MdButtonModule,
        MdIconModule,
        MdGridListModule,
        MdListModule,
        MdCardModule,
        MdInputModule,
        MdTooltipModule,
        MdDialogModule,
        MdTableModule,
        MdProgressSpinnerModule,
        MdToolbarModule,
        MdDatepickerModule,
        MdNativeDateModule,
        MdSelectModule,
        routing,
        SimpleNotificationsModule.forRoot(),
        ChartsModule
    ],
    providers: [
        AuthGuard,
        AuthenticationService,
        RootService,
        CostsService
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
