import { Routes } from '@angular/router';
import { LayoutComponent } from './core/layout/layout.component';

export const appRoutes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: 'lunches',
        loadChildren: () => import('./features/lunches/lunches.module').then(m => m.LunchesModule),
      },
      {
        path: 'generator',
        loadChildren: () => import('./features/generator/generator.module').then(m => m.GeneratorModule),
      },
      {
        path: '**',
        redirectTo: 'lunches',
        pathMatch: 'full',
      },
    ],
  },
  {
    path: '**',
    redirectTo: '',
    pathMatch: 'full',
  },
];
