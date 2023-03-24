import { Routes } from '@angular/router';
import { LunchesComponent } from './pages/lunches/lunches.component';

export const lunchesdRoutes: Routes = [
  {
    path: '',
    component: LunchesComponent,
  },
  {
    path: '**',
    redirectTo: '',
    pathMatch: 'full',
  },
];
