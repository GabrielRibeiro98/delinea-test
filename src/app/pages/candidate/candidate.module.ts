import { TokenService } from './../../auth/services/token.service';
import { TableOptionsModule } from './../../shared/components/table-options/table-options.module';
import { EditCandidateComponent } from './edit-candidate/edit-candidate.component';
import { ListCandidateComponent } from './list-candidate/list-candidate.component';
import { ThemeModule } from './../../theme.module';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NetworkService } from 'src/app/shared/services/network.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    ListCandidateComponent,
    EditCandidateComponent
  ],
  imports: [
    CommonModule,
    ThemeModule,
    TableOptionsModule,
    ReactiveFormsModule,
    FormsModule
  ],
  exports: [
    ListCandidateComponent,
    EditCandidateComponent
  ],
  providers: [NetworkService, TokenService],
})
export class CandidateModule { }
