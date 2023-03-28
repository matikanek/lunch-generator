import { Component, Input, OnInit } from '@angular/core';
import { Size } from '../../models/size';

@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.scss'],
})
export class LoaderComponent implements OnInit {
  @Input() size: Size = 'small';
  diameter: number = 0;

  ngOnInit(): void {
    switch (this.size) {
      case 'small':
        this.diameter = 24;
        break;
      case 'big':
        this.diameter = 64;
    }
  }
}
