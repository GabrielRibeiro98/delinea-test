import { BASE_URL } from './../../controller/staticValues';
import { FormBuilder, FormGroup } from '@angular/forms';
import { TokenService } from './../../auth/services/token.service';
import { MessageService } from 'primeng/api';
import { NetworkService } from 'src/app/shared/services/network.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  form: FormGroup
  username: ''
  password: ''


  constructor(private tokenService: TokenService, private formBuilder: FormBuilder, private networkService: NetworkService, private route: Router) {

  }

  fazerLogin() {
    this.networkService.post(BASE_URL, 'o/token', { username: this.username, password: this.password }).subscribe((value: any) => {
      this.tokenService.salvaToken(value.token)
      this.route.navigate(['candidate']);
    })
  }

}
