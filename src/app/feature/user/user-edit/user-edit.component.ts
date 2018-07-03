import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { UserService } from '@feat/user/user.service';
import { User } from '@feat/user/user';

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.css']
})
export class UserEditComponent implements OnInit {

  pagetitle: string = "User Edit";

  user: User;

  save(): void {
    console.log("UserEdit preupdate:", this.user);
    this.usersvc.change(this.user)
      .subscribe(rc => {
        console.log("UserEdit rc:", rc);
        this.router.navigateByUrl("/users/list");
      });
  }

  constructor(
    private usersvc: UserService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    let id = this.route.snapshot.params.id;
    console.log("UserGet id:", id);
    this.usersvc.get(+id)
      .subscribe(resp => {
        this.user = resp.Data;
        console.log("UserGet:", this.user);
      });
  }

}
