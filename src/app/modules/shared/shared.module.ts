import {NgModule, LOCALE_ID} from "@angular/core";
import 'hammerjs';
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
    MdRadioModule,
    MdChipsModule,
    DateAdapter,
    MdPaginatorModule,
    MdPaginatorIntl
} from '@angular/material';
import {SimpleNotificationsModule} from "angular2-notifications";
import {BrowserModule} from "@angular/platform-browser";
import {HttpModule} from "@angular/http";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {ReactiveFormsModule} from "@angular/forms";
import {CustomNativeDateAdapter} from "../../adapters/custom-native-date.adapter";
import {ChartsModule} from "ng2-charts";
import {RoutingModule} from "../routing/routing.module";
import {customMdPaginatorIntl} from "./custom-md-paginator-intl";

@NgModule({
    imports: [
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
        MdPaginatorModule,
        MdSelectModule,
        MdChipsModule,
        MdToolbarModule,
        MdProgressSpinnerModule,
        MdTableModule,
        MdListModule,
        MdRadioModule,
        SimpleNotificationsModule.forRoot(),
        BrowserModule,
        HttpModule,
        BrowserAnimationsModule,
        RoutingModule,
        ReactiveFormsModule,
        ChartsModule
    ],
    exports: [
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
        MdChipsModule,
        MdPaginatorModule,
        MdToolbarModule,
        MdProgressSpinnerModule,
        MdTableModule,
        MdListModule,
        MdRadioModule,
        SimpleNotificationsModule,
        BrowserModule,
        HttpModule,
        BrowserAnimationsModule,
        RoutingModule,
        ReactiveFormsModule,
        ChartsModule
    ],
    providers: [
        {provide: DateAdapter, useClass: CustomNativeDateAdapter},
        {provide: LOCALE_ID, useValue: 'ru'},
        {provide: MdPaginatorIntl, useFactory: customMdPaginatorIntl},
    ]
})
export class SharedModule {
}
