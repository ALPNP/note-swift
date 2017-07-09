import {Routes, RouterModule} from '@angular/router';

import {CalendarComponent} from './components/calendar/calendar.component';
import {DashboardComponent} from './components/dashboard/dashboard.component';

const appRoutes: Routes = [
    {path: 'calendar', component: CalendarComponent},
    {path: '', component: DashboardComponent}
];

export const routing = RouterModule.forRoot(appRoutes);

