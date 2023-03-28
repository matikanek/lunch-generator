import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/shared.module';
import { LunchesComponent } from './pages/lunches/lunches.component';
import { RouterModule } from '@angular/router';
import { lunchesdRoutes } from './lunches.routes';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { LunchesViewComponent } from './components/lunches-view/lunches-view.component';
import { LunchComponent } from './pages/lunch/lunch.component';
import { LunchesFacade } from './services/lunches.facade';

@NgModule({
  declarations: [LunchesComponent, LunchesViewComponent, LunchComponent],
  imports: [CommonModule, SharedModule, RouterModule.forChild(lunchesdRoutes), MatProgressSpinnerModule],
  providers: [LunchesFacade],
})
export class LunchesModule {}
