import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public userName: string;
  public password: string;
  constructor() { }

  ngOnInit() {
  }

  login() {
    console.log('aaaaa');
    localStorage.setItem('loggedIn', JSON.stringify(true));
  }

}
