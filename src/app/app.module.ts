import { NavigationEnd } from '@angular/router';
import { LoginModule } from './pages/login/login.module';
import { TableOptionsModule } from './shared/components/table-options/table-options.module';
import { CandidateModule } from './pages/candidate/candidate.module';
import { ThemeModule } from './theme.module';
import { TopBarModule } from './shared/components/topbar/topbar.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ConfirmationService, MessageService } from 'primeng/api';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { AuthInterceptor } from './auth/auth.interceptor';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    TopBarModule,
    ThemeModule,
    CandidateModule,
    TableOptionsModule,
    HttpClientModule,
    LoginModule
  ],
  providers: [
    ConfirmationService, MessageService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true,
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
