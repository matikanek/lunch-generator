import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/shared.module';
import { GeneratorComponent } from './pages/generator/generator.component';
import { RouterModule } from '@angular/router';
import { generatorRoutes } from './generator.routes';

@NgModule({
  declarations: [GeneratorComponent],
  imports: [CommonModule, SharedModule, RouterModule.forChild(generatorRoutes)],
})
export class GeneratorModule {}
