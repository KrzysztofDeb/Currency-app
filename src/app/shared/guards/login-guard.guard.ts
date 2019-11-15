import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable()
export class LoginGuardGuard implements CanActivate {

  private readonly isLogin: BehaviorSubject<boolean>;

  constructor(private router: Router) {
    this.isLogin = new BehaviorSubject<boolean>(false);
  }

  canActivate(): Observable<boolean> {
    if (sessionStorage.getItem('user') && sessionStorage.getItem('pass')) {
      this.isLogin.next(true);
    }
    if (!this.isLogin.getValue()) {
      this.router.navigate(['/login']);
    }

    return this.isLogin;
  }
}
