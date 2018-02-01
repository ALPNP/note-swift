import {NgModule, LOCALE_ID} from "@angular/core";
import 'hammerjs';
import {
    MatButtonModule,
    MatIconModule,
    MatGridListModule,
    MatCardModule,
    MatInputModule,
    MatTooltipModule,
    MatDialogModule,
    MatMenuModule,
    MatTabsModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatSelectModule,
    MatToolbarModule,
    MatProgressSpinnerModule,
    MatTableModule,
    MatListModule,
    MatRadioModule,
    MatChipsModule,
    MatPaginatorModule,
    MatPaginatorIntl,
    DateAdapter
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
        MatButtonModule,
        MatIconModule,
        MatGridListModule,
        MatCardModule,
        MatInputModule,
        MatTooltipModule,
        MatDialogModule,
        MatMenuModule,
        MatTabsModule,
        MatDatepickerModule,
        MatNativeDateModule,
        MatSelectModule,
        MatToolbarModule,
        MatProgressSpinnerModule,
        MatTableModule,
        MatListModule,
        MatRadioModule,
        MatChipsModule,
        MatPaginatorModule,
        SimpleNotificationsModule.forRoot(),
        BrowserModule,
        HttpModule,
        BrowserAnimationsModule,
        RoutingModule,
        ReactiveFormsModule,
        ChartsModule
    ],
    exports: [
        MatButtonModule,
        MatIconModule,
        MatGridListModule,
        MatCardModule,
        MatInputModule,
        MatTooltipModule,
        MatDialogModule,
        MatMenuModule,
        MatTabsModule,
        MatDatepickerModule,
        MatNativeDateModule,
        MatSelectModule,
        MatToolbarModule,
        MatProgressSpinnerModule,
        MatTableModule,
        MatListModule,
        MatRadioModule,
        MatChipsModule,
        MatPaginatorModule,
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
        {provide: MatPaginatorIntl, useFactory: customMdPaginatorIntl},
    ]
})
export class SharedModule {
}
