import { Injectable } from '@angular/core';
import { BehaviorSubject, delay, Observable, of, switchMap, tap } from 'rxjs';
import { LunchFilters } from '../models/lunch-filters';
import { Lunch } from '../../../shared/models/lunch';
import { lunches } from '../../../shared/mocks/lunches';

@Injectable()
export class LunchesFacade {
  private _query = '';
  private _queryParams$ = new BehaviorSubject<LunchFilters>({
    query: this._query,
  });

  lunches$: Observable<Lunch[]> = this._queryParams$.pipe(
    delay(500),
    switchMap(params => of(lunches.filter(lunch => lunch.name.toLowerCase().includes(params.query)))),
  );

  queryChange(searchText: string): void {
    this._query = searchText;
    this._changeQueryParams();
  }

  private _changeQueryParams(): void {
    this._queryParams$.next({ query: this._query });
  }
}
