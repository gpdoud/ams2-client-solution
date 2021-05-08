
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
  errormessage: string = "";

  users: User[];

  searchfor: string = "";

  sortProperty: string = "Lastname";
  sortOrder: string = "asc";
  sort(sortBy: string): void {
    if(sortBy === this.sortProperty)
      this.sortOrder = this.sortOrder === 'asc' ? 'desc' : 'asc';
    else {
      this.sortProperty = sortBy;
      this.sortOrder = 'asc';
    }
  }

  constructor(
    private usersvc: UserService,
    private syssvc: SystemService
  ) { }

  ngOnInit() {
    this.syssvc.checkLogin();
    this.usersvc.list()
      .subscribe(resp => {
        this.users = resp.data;
        console.log("UserList:", this.users);
        this.errormessage = `${this.users.length} users`;
        for(let u of this.users) {
          if(u.departmentId == null) {
            u.departmentName = "Unassigned";
          } else {
          u.departmentName = u.department.name;
        }}
      });
  }
}
