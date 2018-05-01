import { Component, OnInit } from '@angular/core';

import { AddressService } from '@feat/address/address.service';
import { Address } from '@feat/address/address';

@Component({
  selector: 'app-address-list',
  templateUrl: './address-list.component.html',
  styleUrls: ['./address-list.component.css']
})
export class AddressListComponent implements OnInit {

  pagetitle: string = "Address List";
  createlink: string = "/addresses/create";
  createlinkname: string = "Create New";

  addresses: Address[];

  constructor(private addresssvc: AddressService) { }

  ngOnInit() {
    this.addresssvc.list()
      .subscribe(addresses => {
        this.addresses = addresses;
        console.log("AddressList:", this.addresses);
      });
  }

}
