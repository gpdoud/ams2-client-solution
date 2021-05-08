import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { SystemService } from '@system/system.service';
import { UserService } from '@feat/user/user.service';
import { User } from '@feat/user/user';
import { DepartmentService } from '@department/department.service';
import { Department } from '@department/department'

@Component({
  selector: 'app-user-create',
  templateUrl: './user-create.component.html',
  styleUrls: ['./user-create.component.css']
})
export class UserCreateComponent implements OnInit {

  pagetitle: string = "User Create";

  user: User = new User();
  departments: Department[];

  save(): void {
    console.log("UserCreate preupdate:", this.user);
    this.usersvc.create(this.user)
      .subscribe(resp => {
        console.log("UserCreate resp:", resp);
        this.router.navigateByUrl("/users/list");
      });
  }

  constructor(
    private usersvc: UserService,
    private syssvc: SystemService,
    private deptsvc: DepartmentService,
    private router: Router
  ) { }

  ngOnInit() {
    this.syssvc.checkLogin();
    this.deptsvc.list()
      .subscribe(resp => {
        console.log("Dept resp:", resp);
        this.departments = resp.data;
      });
  }

}
