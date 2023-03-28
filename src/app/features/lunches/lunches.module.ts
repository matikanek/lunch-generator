import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/shared.module';
import { LunchesComponent } from './pages/lunches/lunches.component';
import { RouterModule } from '@angular/router';
import { lunchesdRoutes } from './lunches.routes';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { LunchesViewComponent } from './components/lunches-view/lunches-view.component';

@NgModule({
  declarations: [LunchesComponent, LunchesViewComponent],
  imports: [CommonModule, SharedModule, RouterModule.forChild(lunchesdRoutes), MatProgressSpinnerModule],
})
export class LunchesModule {}
