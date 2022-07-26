import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private userIsAuthenticated = false;

  constructor() {}

  get isAuthenticated() {
    return this.userIsAuthenticated;
  }
  login() {
    this.userIsAuthenticated = true;
  }

  logout() {
    this.userIsAuthenticated = false;
  }
}
