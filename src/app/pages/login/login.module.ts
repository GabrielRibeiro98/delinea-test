import { TokenService } from './../../auth/services/token.service';
import { ThemeModule } from './../../theme.module';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NetworkService } from 'src/app/shared/services/network.service';
import { LoginComponent } from './login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [LoginComponent],
  imports: [
    CommonModule,
    ThemeModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [LoginComponent],
  providers: [NetworkService, TokenService],
})
export class LoginModule { }
