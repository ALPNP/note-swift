import {NgModule} from '@angular/core';
import {AuthGuard} from './guards/auth.guard';
import {AuthenticationService} from './services/authentication.service';
import {RootService} from "./services/root.service";
import {AppComponent} from './app.component';
import {MainMenuComponent} from './components/main-menu/main-menu.component';
import {CalendarComponent} from './components/calendar/calendar.component';
import {DashboardComponent} from './components/dashboard/dashboard.component';
import {LoginComponent} from './components/login/login.component';
import {routing} from './app.routing';
import {FinanceModule} from "./modules";
import {SharedModule} from './modules';
import {AuthModule} from './modules';

@NgModule({
    declarations: [
        AppComponent,
        CalendarComponent,
        MainMenuComponent,
        DashboardComponent,
        LoginComponent
    ],
    imports: [
        SharedModule,
        AuthModule,
        routing,
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
