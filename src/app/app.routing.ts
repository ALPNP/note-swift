import {Routes, RouterModule} from '@angular/router';

import {CalendarComponent} from './components/calendar/calendar.component';
import {DashboardComponent} from './components/dashboard/dashboard.component';
import {LoginComponent} from './components/login/login.component';
import {CostsComponent} from "./modules/finance/components/costs/costs.component";

import {AuthGuard} from './guards/auth.guard';

const appRoutes: Routes = [
    {path: 'login', component: LoginComponent},
    {path: 'calendar', component: CalendarComponent, canActivate: [AuthGuard]},
    {path: 'costs', component: CostsComponent, canActivate: [AuthGuard]},
    {path: '', component: DashboardComponent, canActivate: [AuthGuard]},
    {path: '**', redirectTo: ''}
];

export const routing = RouterModule.forRoot(appRoutes);
