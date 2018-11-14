import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

import { AppInitService } from '../app-init/app-init.service';

import { User } from '../user/user';

const configFile = "assets/settings.json";

@Injectable()
export class SystemService {

  // get the settings from the app-init.service
  public settings: any = this.appinitsvc.settings;

  loggedInUser: User = null;
  setUser(user: User): void {
    this.loggedInUser = user;
  }
  clearUser(): void {
    this.setUser(null);
  }
  get isUserLoggedIn() { return this.loggedInUser != null; }
  checkLogin(): void {
    if(!this.isUserLoggedIn && this.settings.loginrequired) {
      this.router.navigateByUrl('/users/login');
    }
  }

  constructor(
    private appinitsvc: AppInitService,
    private router: Router
  ) {
  }

}