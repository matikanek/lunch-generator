import { Component, Input } from '@angular/core';
import { Lunch } from '../../models/lunch';

@Component({
  selector: 'app-lunches-view',
  templateUrl: './lunches-view.component.html',
  styleUrls: ['./lunches-view.component.scss'],
})
export class LunchesViewComponent {
  @Input() lunches: Lunch[] | null = null;
  @Input() lunchesLoading: boolean = false;
}
