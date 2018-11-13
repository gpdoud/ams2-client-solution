import { Component, OnInit } from '@angular/core';

import { UserService } from '../user.service';
import { User } from '../user';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent implements OnInit {

  user: User = new User();
  message: string = '';

  login(): void {
    console.log(`${this.user.Username} : ${this.user.Password}`);
    this.message = "Login successful!";
  }

  constructor() { }

  ngOnInit() {
  }

}
