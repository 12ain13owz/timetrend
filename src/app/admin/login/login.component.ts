import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Login } from './login.model';
import { LoginService } from './login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  constructor(private fb: FormBuilder, private ls: LoginService) {
    this.createLoginForm();
  }

  loginForm: FormGroup;
  loading = false;

  ngOnInit(): void {}

  onLogin() {
    if (this.invalid) return;

    this.loading = true;
    const body: Login = {
      username: this.username.value,
      password: this.password.value,
    };
    this.ls.requesLogIn(body).add(() => {
      this.loading = false;
    });
  }

  private createLoginForm() {
    this.loginForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  get username() {
    return this.loginForm.get('username');
  }

  get password() {
    return this.loginForm.get('password');
  }

  get invalid() {
    return this.loginForm.invalid;
  }
}
