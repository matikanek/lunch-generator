import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputComponent } from './components/input/input.component';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { ReactiveFormsModule } from '@angular/forms';

const components = [InputComponent];

@NgModule({
  declarations: [...components],
  exports: [...components],
  imports: [CommonModule, MatInputModule, MatIconModule, MatProgressSpinnerModule, ReactiveFormsModule],
})
export class SharedModule {}
