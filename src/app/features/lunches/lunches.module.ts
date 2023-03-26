import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/shared.module';
import { LunchesComponent } from './pages/lunches/lunches.component';
import { RouterModule } from '@angular/router';
import { lunchesdRoutes } from './lunches.routes';
import { LunchesFacade } from './services/lunches.facade';

@NgModule({
  declarations: [LunchesComponent],
  imports: [CommonModule, SharedModule, RouterModule.forChild(lunchesdRoutes)],
  providers: [LunchesFacade],
})
export class LunchesModule {}
