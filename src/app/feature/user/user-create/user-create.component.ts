import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { UserService } from '@feat/user/user.service';
import { User } from '@feat/user/user';

@Component({
  selector: 'app-user-create',
  templateUrl: './user-create.component.html',
  styleUrls: ['./user-create.component.css']
})
export class UserCreateComponent implements OnInit {

  pagetitle: string = "User Create";

  user: User = new User(0, '', '', '', '', '', '', true);

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
    private router: Router
  ) { }

  ngOnInit() {
  }

}
