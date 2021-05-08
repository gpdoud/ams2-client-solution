import { Component, OnInit, SystemJsNgModuleLoader } from '@angular/core';
import { Router } from '@angular/router';

import { SystemService } from '@system/system.service'
import { UserService } from '../user.service';
import { User } from '../user';
import { JsonResponse } from '../../utility/json-response';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent implements OnInit {

  user: User = new User();
  message: string = '';

  login(): void {
    this.message = '';
    this.syssvc.clearUser();
    this.usersvc.login(this.user.username, this.user.password)
      .subscribe(resp => {
        console.log("Login resp:", resp);
        if(resp.code == 0) {
          this.syssvc.setUser(resp.data);
          this.router.navigateByUrl('/home');
        }
        this.message = resp.message;
      })
  }

  constructor(
    private usersvc: UserService,
    private syssvc: SystemService,
    private router: Router
  ) { }

  ngOnInit() {
    let loginrequired = this.syssvc.settings.loginrequired;
    console.log("loginrequired:", loginrequired);
    if(!loginrequired) {
      this.router.navigateByUrl('/home');
    }
  }

}
