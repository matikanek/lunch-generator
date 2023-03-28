import { Routes } from '@angular/router';
import { LunchComponent } from './pages/lunch/lunch.component';
import { LunchesComponent } from './pages/lunches/lunches.component';

export const lunchesdRoutes: Routes = [
  {
    path: '',
    component: LunchesComponent,
  },
  {
    path: ':lunchId',
    component: LunchComponent,
  },
  {
    path: '**',
    redirectTo: '',
    pathMatch: 'full',
  },
];
