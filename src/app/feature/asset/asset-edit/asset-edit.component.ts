import { Component, OnInit, Input } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { AssetService } from '@feat/asset/asset.service';
import { Asset } from '@feat/asset/asset';
import { AddressService } from '@feat/address/address.service';
import { Address } from '@feat/address/address';
import { JsonResponse } from '@feat/utility/json-response';

@Component({
  selector: 'app-asset-edit',
  templateUrl: './asset-edit.component.html',
  styleUrls: ['./asset-edit.component.css']
})
export class AssetEditComponent implements OnInit {

  pagetitle: string = "Asset Edit";

  @Input() asset: Asset;

  addresses: Address[] = [];

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
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.Addresssvc.list()
      .subscribe(resp => {
        this.addresses = resp.Data;
        console.log("AssetEdit Addrs:", this.addresses);
      });
  }

}
