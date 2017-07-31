import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {ReactiveFormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';

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
    MdListModule,
    MdRadioModule
} from '@angular/material';

import {AuthModule} from './modules';
import {AuthGuard} from './guards/auth.guard';
import {AuthenticationService} from './services/authentication.service';
import {RootService} from "./services/root.service";

import {AppComponent} from './app.component';
import {MainMenuComponent} from './components/main-menu/main-menu.component';
import {CalendarComponent} from './components/calendar/calendar.component';
import {DashboardComponent} from './components/dashboard/dashboard.component';
import {LoginComponent} from './components/login/login.component';

import {routing} from './app.routing';

import 'hammerjs';
import {FinanceModule} from "./modules/finance/finance.module";

@NgModule({
    declarations: [
        AppComponent,
        CalendarComponent,
        MainMenuComponent,
        DashboardComponent,
        LoginComponent
    ],
    entryComponents: [
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
        MdRadioModule,
        routing,
        SimpleNotificationsModule.forRoot(),
        FinanceModule
    ],
    providers: [
        AuthGuard,
        AuthenticationService,
        RootService
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
