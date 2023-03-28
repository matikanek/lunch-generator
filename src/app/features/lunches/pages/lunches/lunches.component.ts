import { Component, OnDestroy } from '@angular/core';
import { finalize, tap } from 'rxjs';
import { LunchesFacade } from '../../services/lunches.facade';

@Component({
  selector: 'app-lunches',
  templateUrl: './lunches.component.html',
  styleUrls: ['./lunches.component.scss'],
})
export class LunchesComponent implements OnDestroy {
  lunches$ = this.lunchesFacade.getLunches().pipe(tap(() => (this.lunchesLoading = false)));
  lunchesLoading = false;

  constructor(private lunchesFacade: LunchesFacade) {}

  getRecipies(searchText: string): void {
    this.lunchesLoading = true;
    this.lunchesFacade.queryChange(searchText);
  }

  private _resetLunchFacadeStates(): void {
    this.lunchesFacade.queryChange('');
  }

  ngOnDestroy(): void {
    this._resetLunchFacadeStates();
  }
}
