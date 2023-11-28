// auth.guard.ts
import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { AuthService } from './auth.service';
import { LoginService } from './modules/login/login.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private router: Router) {}

  canActivate(): boolean {
    const authToken = localStorage.getItem('token');
    if (authToken) {
      return true;
    } else {
      this.router.navigate(['/login']);
      return false;
    }
  }
}
