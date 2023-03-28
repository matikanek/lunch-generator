import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-layout-sidenav',
  templateUrl: './layout-sidenav.component.html',
  styleUrls: ['./layout-sidenav.component.scss'],
})
export class LayoutSidenavComponent {
  @Output() routeChangeEvent = new EventEmitter<void>();

  routeChange(): void {
    this.routeChangeEvent.emit();
  }
}
