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
    this.usersvc.login(this.user.Username, this.user.Password)
      .subscribe(resp => {
        console.log("Login resp:", resp);
        if(resp.Code == 0) {
          this.router.navigateByUrl('/home');
        }
        this.message = resp.Message;
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
