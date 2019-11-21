import { Component, OnInit } from '@angular/core';
import { timer } from 'rxjs';
import { JwtHelperService } from '@auth0/angular-jwt';

@Component({
  selector: 'app-access-screen',
  templateUrl: './access-screen.component.html',
  styleUrls: ['./access-screen.component.scss']
})
export class AccessScreenComponent implements OnInit {

  public toRegister = false;
  public register = false;
  public toLogin = false;
  public login = true;
  constructor() { }

  ngOnInit() {

  }

  displayRegister() {
    this.toRegister = true;
    timer(500).subscribe(() => {
      this.login = false;
      this.register = true;
      this.toRegister = false;
    });
  }

  displayLogin() {
    this.toLogin = true;
    timer(500).subscribe(() => {
      this.login = true;
      this.register = false;
      this.toLogin = false;
    });
  }
}
