import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {ReactiveFormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';

import {MdMenuModule, MdTabsModule} from '@angular/material';
import {MdButtonModule} from '@angular/material';
import {MdIconModule} from '@angular/material';
import {MdGridListModule} from '@angular/material';
import {MdCardModule} from '@angular/material';
import {MdInputModule} from '@angular/material';

import {ChartsModule} from 'ng2-charts/ng2-charts';

import {SimpleNotificationsModule} from 'angular2-notifications';

import {AuthModule} from './modules';
import {AuthGuard} from './guards/auth.guard';
import {AuthenticationService} from './services/authentication.service';

import {AppComponent} from './app.component';
import {MainMenuComponent} from './components/main-menu/main-menu.component';
import {CalendarComponent} from './components/calendar/calendar.component';
import {DashboardComponent} from './components/dashboard/dashboard.component';
import {LoginComponent} from './components/login/login.component';
import {CostsComponent} from "./components/costs/costs.component";

import {routing} from './app.routing';

import 'hammerjs';
import {CostsWidgetComponent} from "./components/costs-widget/costs-widget.component";

@NgModule({
    declarations: [
        AppComponent,
        CalendarComponent,
        MainMenuComponent,
        DashboardComponent,
        LoginComponent,
        CostsComponent,
        CostsWidgetComponent
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
        MdCardModule,
        MdInputModule,
        routing,
        SimpleNotificationsModule.forRoot(),
        ChartsModule
    ],
    providers: [
        AuthGuard,
        AuthenticationService
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
