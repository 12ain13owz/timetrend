import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { environment } from 'src/environments/environment';
import { FormService } from '../auth/shared/services/form.service';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  constructor(
    private router: Router,
    private http: HttpClient,
    private fs: FormService
  ) {
    this.loggedIn = new BehaviorSubject<boolean>(false);
  }

  loggedIn: BehaviorSubject<boolean>;

  getLogIn() {
    return this.http
      .get(`${environment.apiUrl}login`, { withCredentials: true })
      .toPromise();
  }

  requesLogIn(body) {
    return this.http
      .post(`${environment.apiUrl}login`, body, { withCredentials: true })
      .subscribe(
        (result: any) => {
          this.loggedIn.next(true);
          this.fs.onNotifier('Login', 'Login success', 'success');
          this.router.navigate(['admin/auth']);
        },
        (resError) => {
          this.fs.onNotifier('Error', resError.error, 'error');
        }
      );
  }

  requestLogOut() {
    this.http
      .post(`${environment.apiUrl}logout`, {}, { withCredentials: true })
      .subscribe(() => {
        this.loggedIn.next(false);
        this.router.navigate(['admin/login']);
      });
  }

  get loggedInValue() {
    return this.loggedIn.value;
  }
}
