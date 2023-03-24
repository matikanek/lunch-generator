import { Routes } from '@angular/router';
import { GeneratorComponent } from './pages/generator/generator.component';

export const generatorRoutes: Routes = [
  {
    path: '',
    component: GeneratorComponent,
  },
  {
    path: '**',
    redirectTo: '',
    pathMatch: 'full',
  },
];
