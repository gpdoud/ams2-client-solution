import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { SystemService } from '@system/system.service';
import { AddressService } from '@feat/address/address.service';
import { Address } from '@feat/address/address';

@Component({
  selector: 'app-address-edit',
  templateUrl: './address-edit.component.html',
  styleUrls: ['./address-edit.component.css']
})
export class AddressEditComponent implements OnInit {

  pagetitle: string = "Address Edit";

  address: Address;

  save(): void {
    console.log("AddressEdit preupdate:", this.address);
    this.addresssvc.change(this.address)
      .subscribe(rc => {
        console.log("AddressEdit rc:", rc);
        this.router.navigateByUrl("/addresses/list");
      });
  }

  constructor(
    private addresssvc: AddressService,
    private syssvc: SystemService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.syssvc.checkLogin();
    let id = this.route.snapshot.params.id;
    console.log("AddressGet id:", id);
    this.addresssvc.get(+id)
      .subscribe(resp => {
        this.address = resp.data;
        console.log("AddressGet:", this.address);
      });
  }

}
