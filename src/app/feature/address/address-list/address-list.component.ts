import { Component, OnInit } from '@angular/core';

import { SystemService } from '@system/system.service';
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
  errormessage: string = "";

  addresses: Address[];


  searchfor: string = "";

  sortProperty: string = "Name";
  sortOrder: string = "asc";
  sort(sortBy: string): void {
    if(sortBy === this.sortProperty)
      this.sortOrder = this.sortOrder === 'asc' ? 'desc' : 'asc';
    else {
      this.sortProperty = sortBy;
      this.sortOrder = 'asc';
    }
  }

  constructor(
    private syssvc: SystemService,
    private addresssvc: AddressService
  ) { }

  ngOnInit() {
    this.syssvc.checkLogin();
    this.addresssvc.list()
      .subscribe(resp => {
        this.addresses = resp.data;
        console.log("AddressList:", this.addresses);
        this.errormessage = `${this.addresses.length} addresses`;
      });
  }

}
