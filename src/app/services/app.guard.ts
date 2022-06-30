import { Injectable } from '@angular/core';
import { CanActivate, CanLoad } from '@angular/router';

@Injectable()
export class AuthGuard implements CanLoad, CanActivate {
  public user = { login: 'admin', isAdmin: true, isLogged: true }

  canLoad(): boolean {
    return this.user.isAdmin;
  }

  canActivate(): boolean {
    return this.user.isLogged;
  }
}
