import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { JwtHelperService } from '@auth0/angular-jwt';
import { timer } from 'rxjs';
import { User } from '../../Classes/user';
import { AccessService } from '../../Services/access.service';
import { DisplaySnackBarService } from '../../Services/display-snack-bar.service';
import { StorageService } from '../../Services/storage.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public users: User[];
  public type = 'password';
  public saveUser = false;
  public form: FormGroup;
  public registering = false;
  private jwt: JwtHelperService = new JwtHelperService();
  constructor(private access: AccessService, private snack: DisplaySnackBarService,
              private storage: StorageService, private router: Router) { }

  ngOnInit() {
    if (!this.jwt.isTokenExpired(localStorage.getItem('token'))) {
      this.processToken(localStorage.getItem('token'));
      this.router.navigate(['Home']);
    }
    this.form = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', Validators.required)
    });
    this.access.getEmployees().subscribe((response) => {
      this.users = response;
    });
  }

  login() {
    this.registering = true;
    this.access.login(this.form.controls.email.value, this.form.controls.password.value).subscribe((token) => {
      timer(1000).subscribe(() => {
        this.registering = false;
        this.processToken(token);
        this.router.navigate(['Home']);
      });
    },
    (err) => {
      timer(1000).subscribe(() => {
        this.registering = false;
        this.snack.openSnackBar(err.error, 'error', 1);
      });
    });
  }

  showPassword()  {
    if (this.type === 'password') {
      this.type = 'text';
    } else {
      this.type = 'password';
    }
  }

  quickLoginSelection(user: User) {
    this.form.get('email').setValue(user.email);
    this.form.get('password').setValue(user.password);
  }

  processToken(token: string) {
    const DECODED_TOKEN = this.jwt.decodeToken(token).data;
    const STORAGE_DATA = {
      id: DECODED_TOKEN.id,
      email: DECODED_TOKEN.email,
      role: DECODED_TOKEN.role,
      token
    };
    console.log(STORAGE_DATA);
    this.storage.setSessionStorage('data', STORAGE_DATA);
    if (this.saveUser) {
      this.storage.setLocalStorage('data', STORAGE_DATA);
    }
  }
}
