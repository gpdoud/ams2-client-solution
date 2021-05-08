import { Component, OnInit, SystemJsNgModuleLoader } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { SystemService } from '@system/system.service';
import { UserService } from '@feat/user/user.service';
import { User } from '@feat/user/user';
import { JsonResponse } from '@feat/utility/json-response';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent implements OnInit {

  resp: JsonResponse; // = new JsonResponse(-200, "MessageValue", "DataValue", "ErrorValue");

  pagetitle: string = "User Detail";

  user: User;

  showVerifyDelete: boolean = false;

  edit(): void {
    this.router.navigateByUrl("/users/edit/"+this.user.id);
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
    private syssvc: SystemService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.syssvc.checkLogin();
    let id = this.route.snapshot.params.id;
    this.usersvc.get(+id)
      .subscribe(resp => {
        this.user = resp.data;
        console.log("UserGet:", this.user);
      });
  }

}
