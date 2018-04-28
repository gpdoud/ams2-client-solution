import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { UserService } from '@feat/user/user.service';
import { User } from '@feat/user/user';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent implements OnInit {

  pagetitle: string = "User Detail";

  user: User;

  constructor(
    private usersvc: UserService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    let id = this.route.snapshot.params.id;
    this.usersvc.get(+id)
      .subscribe(user => {
        this.user = user;
        console.log("UserGet:", this.user);
      });
  }

}
