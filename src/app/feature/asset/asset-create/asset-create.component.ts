import { Component, OnInit, Input } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { AssetService } from '@feat/asset/asset.service';
import { Asset } from '@feat/asset/asset';
import { AddressService } from '@feat/address/address.service';
import { Address } from '@feat/address/address';
import { DepartmentService } from '@feat/department/department.service';
import { Department } from '@feat/department/department';
import { CategoryService } from '@feat/category/category.service';
import { Category } from '@feat/category/category';
import { UserService } from '@feat/user/user.service';
import { User } from '@feat/user/user'
import { JsonResponse } from '@feat/utility/json-response';

@Component({
  selector: 'app-asset-create',
  templateUrl: './asset-create.component.html',
  styleUrls: ['./asset-create.component.css']
})
export class AssetCreateComponent implements OnInit {

  pagetitle: string = "Asset Create";

  @Input() asset: Asset;

  addresses: Address[];
  departments: Department[] = [];
  categories: Category[] = [];
  users: User[] = [];

  // save(): void {
  //   console.log("AssetCreate preupdate:", this.asset);
  //   this.assetsvc.create(this.asset)
  //     .subscribe(rc => {
  //       console.log("AssetCreate rc:", rc);
  //       this.router.navigateByUrl("/assets/list");
  //     });
  // }

  constructor(
    private assetsvc: AssetService,
    private addresssvc: AddressService,
    private Departmentsvc: DepartmentService,
    private Categorysvc: CategoryService,
    private Usersvc: UserService,
    private router: Router
  ) { }

  ngOnInit() {
    this.addresssvc.list()
      .subscribe(resp => {
        this.addresses = resp.Data;
        console.log("AddressList:", this.addresses);
      })
    this.Departmentsvc.list()
      .subscribe(resp => {
        this.departments = resp.Data;
        console.log("AssetEdit Departments:", this.departments);
      });
    this.Categorysvc.list()
      .subscribe(resp => {
        this.categories = resp.Data;
        console.log("AssetEdit Categories:", this.categories);
      });
    this.Usersvc.list()
      .subscribe(resp => {
        this.users = resp.Data;
        console.log("AssetEdit Addrs:", this.users);
      });
  }

}
