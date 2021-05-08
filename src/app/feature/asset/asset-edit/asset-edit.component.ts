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
import { AssetTypes } from '@feat/asset/asset-types.enum';

@Component({
  selector: 'app-asset-edit',
  templateUrl: './asset-edit.component.html',
  styleUrls: ['./asset-edit.component.css']
})
export class AssetEditComponent implements OnInit {

  pagetitle: string = "Asset Edit";

  @Input() asset: Asset;
  @Input() assetType: AssetTypes;
  assetTypes = AssetTypes;

  addresses: Address[] = [];
  departments: Department[] = [];
  categories: Category[] = [];
  users: User[] = [];

  compareFn(id1: number, id2:number) {
    return id1 == id2 ? 0 : (id1 < id2 ? -1 : 1);
  }

  save(): void {
    console.log("AssetEdit preupdate:", this.asset);
    this.Assetsvc.change(this.asset)
      .subscribe(rc => {
        console.log("AssetEdit rc:", rc);
        this.router.navigateByUrl("/assets/list");
      });
  }

  constructor(
    private Assetsvc: AssetService,
    private Addresssvc: AddressService,
    private Departmentsvc: DepartmentService,
    private Categorysvc: CategoryService,
    private Usersvc: UserService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.Addresssvc.list()
      .subscribe(resp => {
        this.addresses = resp.data;
        console.log("AssetEdit Addrs:", this.addresses);
      });
    this.Departmentsvc.list()
      .subscribe(resp => {
        this.departments = resp.data;
        console.log("AssetEdit Departments:", this.departments);
      });
    this.Categorysvc.list()
      .subscribe(resp => {
        this.categories = resp.data;
        console.log("AssetEdit Categories:", this.categories);
      });
    this.Usersvc.list()
      .subscribe(resp => {
        this.users = resp.data;
        console.log("AssetEdit Addrs:", this.users);
      });
  }

}
