import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { AccessService } from '../../Services/access.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { timer } from 'rxjs';
import { DisplaySnackBarService } from '../../Services/display-snack-bar.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  public form: FormGroup;
  public userName: string;
  public password: string;
  public role: string;
  public profilePic: File = null;
  public registering = false;
  public recaptcha = false;
  @Output() SuccessfulRegister = new EventEmitter();
  constructor(private access: AccessService, private snack: DisplaySnackBarService) { }

  ngOnInit() {
    this.form = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', Validators.required),
      role: new FormControl('', Validators.required)
    });
  }

  getProfilePic($event) {
    this.profilePic = $event;
  }

  register() {
    this.registering = true;
    const REQUEST = new FormData();
    REQUEST.append('email', this.form.controls['email'].value);
    REQUEST.append('password', this.form.controls['password'].value);
    REQUEST.append('type', this.form.controls['role'].value);
    REQUEST.append('foto', this.profilePic);
    this.access.register(REQUEST).subscribe((response) => {
        this.registering = false;
        this.snack.openSnackBar('Usuario creado con exito.', 'success', 3);
        this.SuccessfulRegister.emit();
      }, (err) => {
      timer(1000).subscribe(() => {
        this.registering = false;
        this.snack.openSnackBar(err.error, 'error', 1);
      });
    });
  }

  resolvedCaptcha($event) {
    this.recaptcha = true;
  }
}
