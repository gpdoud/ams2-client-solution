import { Component, OnInit } from '@angular/core';

import { UserService } from '@user/user.service';
import { User } from '@user/user';
import { SystemService } from '@system/system.service'

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  pagetitle: string = "User List";
  createlink: string = "/users/create";
  createlinkname: string = "Create New";

  users: User[];

  constructor(
    private usersvc: UserService,
    private syssvc: SystemService
  ) { }

  ngOnInit() {
    this.usersvc.list()
      .subscribe(users => {
        this.users = users;
        console.log("UserList:", this.users);
      });
  }

}
