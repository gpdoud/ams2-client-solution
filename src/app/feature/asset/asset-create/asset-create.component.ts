import { Component, OnInit, Input } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { AssetService } from '../../asset/asset.service';
import { Asset } from '../../asset/asset';
import { AddressService } from '../../address/address.service';
import { Address } from '../../address/address';
import { DepartmentService } from '../../department/department.service';
import { Department } from '../../department/department';
import { CategoryService } from '../../category/category.service';
import { Category } from '../../category/category';
import { UserService } from '../../user/user.service';
import { User } from '../../user/user'
import { JsonResponse } from '../../utility/json-response';
import { AssetTypes } from '../../asset/asset-types.enum';

@Component({
  selector: 'app-asset-create',
  templateUrl: './asset-create.component.html',
  styleUrls: ['./asset-create.component.css']
})
export class AssetCreateComponent implements OnInit {

  pagetitle: string = "Asset Create";

  @Input() asset: Asset;
  @Input() assetType: AssetTypes;
  assetTypes = AssetTypes;

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
        this.addresses = resp.data;
        console.log("AddressList:", this.addresses);
      })
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
