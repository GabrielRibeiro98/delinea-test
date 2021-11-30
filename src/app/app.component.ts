import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'DelineaTest';
  currentUrl: string = ''

  constructor(private router: Router) {
    /*this.router.events.filter(event => event instanceof NavigationEnd)
          .subscribe(event =>
           {
              this.currentRoute = event.url;
              console.log(event);
           });
    }*/
  }

  ngOnInit() {
this.router.events.subscribe(event => {
        if (event instanceof NavigationEnd) {
            this.currentUrl = event.url
        }
    });
  }

  telaLogin() {
    return this.currentUrl === "/login"
  }
}
