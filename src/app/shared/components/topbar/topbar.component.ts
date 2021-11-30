import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-topbar',
  templateUrl: './topbar.component.html',
  styleUrls: ['./topbar.component.css']
})
export class TopBarComponent {

  constructor(private router: Router) { }

  routerLogin() {
    this.router.navigate(['login']);
  }
}
