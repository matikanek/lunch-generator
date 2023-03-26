import { Component } from '@angular/core';
import { ValidatorFn, Validators } from '@angular/forms';
import { LunchesFacade } from '../../services/lunches.facade';

@Component({
  selector: 'app-lunches',
  templateUrl: './lunches.component.html',
  styleUrls: ['./lunches.component.scss'],
})
export class LunchesComponent {
  searchValidators: ValidatorFn[] = [Validators.minLength(2)];

  constructor(private lunchesFacade: LunchesFacade) {}

  getRecipies(searchText: string): void {
    console.log(searchText);
  }
}
