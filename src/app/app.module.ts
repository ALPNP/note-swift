import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {ReactiveFormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';

import {MdMenuModule} from '@angular/material';
import {MdButtonModule} from '@angular/material';
import {MdIconModule} from '@angular/material';
import {MdGridListModule} from '@angular/material';
import {MdCardModule} from '@angular/material';
import {MdInputModule} from '@angular/material';

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

@NgModule({
    declarations: [
        AppComponent,
        CalendarComponent,
        MainMenuComponent,
        DashboardComponent,
        LoginComponent,
        CostsComponent
    ],
    imports: [
        BrowserModule,
        HttpModule,
        AuthModule,
        BrowserAnimationsModule,
        ReactiveFormsModule,
        MdMenuModule,
        MdButtonModule,
        MdIconModule,
        MdGridListModule,
        MdCardModule,
        MdInputModule,
        routing,
        SimpleNotificationsModule.forRoot()
    ],
    providers: [
        AuthGuard,
        AuthenticationService
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
