import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Lunch } from '../../../../shared/models/lunch';

@Component({
  selector: 'app-lunches-view',
  templateUrl: './lunches-view.component.html',
  styleUrls: ['./lunches-view.component.scss'],
})
export class LunchesViewComponent {
  @Input() lunches: Lunch[] | null = null;
  @Input() lunchesLoading: boolean = false;

  constructor(private router: Router) {}

  preview(lunchId: number): void {
    this.router.navigate([`lunches/${lunchId}`]);
  }
}
