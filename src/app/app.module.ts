import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import {MdMenuModule} from '@angular/material';
import {MdButtonModule} from '@angular/material';
import {MdIconModule} from '@angular/material';

import {AppComponent} from './app.component';
import {MainMenuComponent} from './components/main-menu/main-menu.component';
import {CalendarComponent} from './components/calendar/calendar.component';

import 'hammerjs';

@NgModule({
    declarations: [
        AppComponent,
        CalendarComponent,
        MainMenuComponent
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        MdMenuModule,
        MdButtonModule,
        MdIconModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
