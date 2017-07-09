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

import {AppComponent} from './app.component';
import {MainMenuComponent} from './components/main-menu/main-menu.component';
import {CalendarComponent} from './components/calendar/calendar.component';
import {DashboardComponent} from './components/dashboard/dashboard.component';
import {LoginComponent} from './components/login/login.component';

import {routing} from './app.routing';

import 'hammerjs';

@NgModule({
    declarations: [
        AppComponent,
        CalendarComponent,
        MainMenuComponent,
        DashboardComponent,
        LoginComponent
    ],
    imports: [
        BrowserModule,
        HttpModule,
        BrowserAnimationsModule,
        ReactiveFormsModule,
        MdMenuModule,
        MdButtonModule,
        MdIconModule,
        MdGridListModule,
        MdCardModule,
        MdInputModule,
        routing
    ],
    providers: [
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
