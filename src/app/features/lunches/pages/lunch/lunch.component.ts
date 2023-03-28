import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { tap } from 'rxjs';
import { LunchesFacade } from '../../services/lunches.facade';

@Component({
  selector: 'app-lunch',
  templateUrl: './lunch.component.html',
  styleUrls: ['./lunch.component.scss'],
})
export class LunchComponent {
  lunch$ = this.lunchFacade
    .getLunch(this.activatedRoute.snapshot.params['lunchId'])
    .pipe(tap(() => (this.lunchLoading = false)));
  lunchLoading = false;

  constructor(private activatedRoute: ActivatedRoute, private lunchFacade: LunchesFacade) {}
}
