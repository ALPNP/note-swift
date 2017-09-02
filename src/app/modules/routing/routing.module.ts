import {Routes, RouterModule} from "@angular/router";
import {NgModule} from "@angular/core";
import {LoginComponent} from "../../components/login/login.component";
import {CalendarComponent} from "../../components/calendar/calendar.component";
import {CostsComponent} from "../finance/components/costs/costs.component";
import {DashboardComponent} from "../../components/dashboard/dashboard.component";
import {AuthGuard} from "../../guards/auth.guard";
import {CostsChartComponent} from "../finance/components/costs-chart/costs-chart.component";
import {RegisterComponent} from "../../components/register/register.component";

const costsRoutes: Routes = [
    {path: 'chart', component: CostsChartComponent, canActivate: [AuthGuard]}
];

const loginRoutes: Routes = [
    {path: 'register', component: RegisterComponent}
];

const appRoutes: Routes = [
    {
        path: 'login',
        component: LoginComponent,
        children: loginRoutes
    },
    {
        path: 'calendar',
        component: CalendarComponent,
        canActivate: [AuthGuard]
    },
    {
        path: 'costs',
        component: CostsComponent,
        canActivate: [AuthGuard],
        children: costsRoutes
    },
    {
        path: '',
        component: DashboardComponent,
        canActivate: [AuthGuard]
    },
    {
        path: '**',
        redirectTo: ''
    }
];

@NgModule({
    imports: [
        RouterModule.forRoot(appRoutes)
    ],
    exports: [
        RouterModule
    ]
})
export class RoutingModule {
}
