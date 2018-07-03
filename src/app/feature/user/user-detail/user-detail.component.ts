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

  showVerifyDelete: boolean = false;

  edit(): void {
    this.router.navigateByUrl("/users/edit/"+this.user.Id);
  }
  remove(): void {
    this.showVerifyDelete = !this.showVerifyDelete;
  }
  verify(): void {
    this.usersvc.remove(this.user)
      .subscribe(res => {
        console.log("UserRemove:", res);
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
    this.usersvc.get(+id)
      .subscribe(resp => {
        this.user = resp.Data;
        console.log("UserGet:", this.user);
      });
  }

}
