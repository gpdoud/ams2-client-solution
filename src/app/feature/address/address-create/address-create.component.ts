import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { SystemService } from '@system/system.service';
import { AddressService } from '@feat/address/address.service';
import { Address } from '@feat/address/address';

@Component({
  selector: 'app-address-create',
  templateUrl: './address-create.component.html',
  styleUrls: ['./address-create.component.css']
})
export class AddressCreateComponent implements OnInit {

  pagetitle: string = "Address Create";

  address: Address = new Address(0, "", "", "", "", "", "", "", "", true);

  save(): void {
    console.log("AddressCreate preupdate:", this.address);
    this.addresssvc.create(this.address)
      .subscribe(resp => {
        console.log("AddressCreate resp:", resp);
        this.router.navigateByUrl("/addresses/list");
      });
  }

  constructor(
    private addresssvc: AddressService,
    private syssvc: SystemService,
    private router: Router
  ) { }

  ngOnInit() {
    this.syssvc.checkLogin();
  }

}
