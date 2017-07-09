import {Routes, RouterModule} from '@angular/router';

import {CalendarComponent} from './components/calendar/calendar.component';
import {DashboardComponent} from './components/dashboard/dashboard.component';
import {LoginComponent} from './components/login/login.component';

const appRoutes: Routes = [
    {path: 'login', component: LoginComponent},
    {path: 'calendar', component: CalendarComponent},
    {path: '', component: DashboardComponent},
    {path: '**', redirectTo: ''}
];

export const routing = RouterModule.forRoot(appRoutes);
