import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent {
  @Input() lunchId!: number;
  @Input() cardTitle: string = '';
  @Input() cardSubtitle: string = '';
  @Input() cardPhoto: string = 'https://picsum.photos/300/200';
  @Output() previewEvent = new EventEmitter<number>();

  preview(): void {
    this.previewEvent.emit(this.lunchId);
  }
}
