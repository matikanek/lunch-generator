import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './layout.component';
import { RouterModule } from '@angular/router';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { LayoutSidenavComponent } from './components/layout-sidenav/layout-sidenav.component';

@NgModule({
  declarations: [LayoutComponent, LayoutSidenavComponent],
  exports: [LayoutComponent],
  imports: [CommonModule, RouterModule, MatSidenavModule, MatButtonModule, MatIconModule],
})
export class LayoutModule {}
