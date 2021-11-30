import { TableOptionsDirective } from './table-options.directive';
import { TableOptionsComponent } from './table-options.component';
import { ThemeModule } from './../../../theme.module';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

@NgModule({
  declarations: [
    TableOptionsComponent,
    TableOptionsDirective
  ],
  imports: [
    CommonModule,
    ThemeModule
  ],
  exports: [
    TableOptionsComponent,
    TableOptionsDirective
  ],
  providers: [],
})
export class TableOptionsModule { }
