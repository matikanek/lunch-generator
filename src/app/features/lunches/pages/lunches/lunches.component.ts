import { Component } from '@angular/core';
import { finalize, tap } from 'rxjs';
import { LunchesFacade } from '../../services/lunches.facade';

@Component({
  selector: 'app-lunches',
  templateUrl: './lunches.component.html',
  styleUrls: ['./lunches.component.scss'],
  providers: [LunchesFacade],
})
export class LunchesComponent {
  lunches$ = this.lunchesFacade.lunches$.pipe(tap(() => (this.lunchesLoading = false)));
  lunchesLoading = false;

  constructor(private lunchesFacade: LunchesFacade) {}

  getRecipies(searchText: string): void {
    this.lunchesLoading = true;
    this.lunchesFacade.queryChange(searchText);
  }
}
