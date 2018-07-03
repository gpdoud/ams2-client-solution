import { Component, OnInit, Input } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { AssetService } from '@feat/asset/asset.service';
import { Asset } from '@feat/asset/asset';
import { AddressService } from '@feat/address/address.service';
import { Address } from '@feat/address/address';
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
    private router: Router
  ) { }

  ngOnInit() {
    this.addresssvc.list()
      .subscribe(resp => {
        this.addresses = resp.Data;
        console.log("AddressList:", this.addresses);
      })
  }

}
