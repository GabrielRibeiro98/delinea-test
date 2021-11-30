import { ThemeModule } from './../../../theme.module';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { TopBarComponent } from './topbar.component';

@NgModule({
  declarations: [
    TopBarComponent
  ],
  imports: [
    CommonModule,
    ThemeModule
  ],
  exports: [
      TopBarComponent
  ],
  providers: [],
})
export class TopBarModule { }
