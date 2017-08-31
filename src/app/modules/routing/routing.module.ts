import {Routes, RouterModule} from "@angular/router";
import {NgModule} from "@angular/core";
import {LoginComponent} from "../../components/login/login.component";
import {CalendarComponent} from "../../components/calendar/calendar.component";
import {CostsComponent} from "../finance/components/costs/costs.component";
import {DashboardComponent} from "../../components/dashboard/dashboard.component";
import {AuthGuard} from "../../guards/auth.guard";
import {CostsChartComponent} from "../finance/components/costs-chart/costs-chart.component";

const costsRoutes: Routes = [
    {path: 'chart', component: CostsChartComponent, canActivate: [AuthGuard]}
];

const appRoutes: Routes = [
    {
        path: 'login',
        component: LoginComponent
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
