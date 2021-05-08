import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { UserService } from '@feat/user/user.service';
import { User } from '@feat/user/user';
import { DepartmentService } from '@department/department.service';
import { Department } from '@department/department';
import { SystemService } from '@system/system.service';

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.css']
})
export class UserEditComponent implements OnInit {

  pagetitle: string = "User Edit";

  user: User;
  departments: Department[];

  save(): void {
    // if the department is changed; nullify the department instance
    if(this.user.department == null || this.user.departmentId != this.user.department.id)
      this.user.department = null;
    console.log("UserEdit preupdate:", this.user);
    this.usersvc.change(this.user)
      .subscribe(rc => {
        console.log("UserEdit rc:", rc);
        this.router.navigateByUrl("/users/list");
      });
  }

  constructor(
    private usersvc: UserService,
    private deptsvc: DepartmentService,
    private syssvc: SystemService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.syssvc.checkLogin();
    this.deptsvc.list()
      .subscribe(resp => {
        console.log("Dept resp:", resp);
        this.departments = resp.data;
      });
    let id = this.route.snapshot.params.id;
    console.log("UserGet id:", id);
    this.usersvc.get(+id)
      .subscribe(resp => {
        this.user = resp.data;
        console.log("UserGet:", this.user);
      });
  }

}
