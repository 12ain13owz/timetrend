import { Injectable } from '@angular/core';
import {
  CanActivateChild,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  UrlTree,
  Router,
} from '@angular/router';
import { Observable } from 'rxjs';
import { LoginService } from '../login/login.service';

@Injectable({
  providedIn: 'root',
})
export class AdminGuard implements CanActivateChild {
  constructor(private router: Router, private ls: LoginService) {}

  canActivateChild(
    childRoute: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ) {
    return this.verifyLogin();
  }

  async verifyLogin() {
    await this.ls
      .getLogIn()
      .then((result: any) => this.ls.loggedIn.next(result.loggedIn))
      .catch((resError) => this.ls.loggedIn.next(false));

    if (!this.ls.loggedInValue) {
      this.router.navigate(['admin/login']);
      return false;
    } else return true;
  }
}
