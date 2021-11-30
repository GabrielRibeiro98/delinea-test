import { EditCandidateComponent } from './pages/candidate/edit-candidate/edit-candidate.component';
import { ListCandidateComponent } from './pages/candidate/list-candidate/list-candidate.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'candidate', component: ListCandidateComponent },
  { path: 'edit-candidate/:id', component: EditCandidateComponent },
  { path: 'register-candidate', component: EditCandidateComponent },

   {path: '', pathMatch: 'full', redirectTo: 'candidate'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
