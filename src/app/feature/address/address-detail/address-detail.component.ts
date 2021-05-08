import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { SystemService } from '@system/system.service';
import { AddressService } from '@feat/address/address.service';
import { Address } from '@feat/address/address'

@Component({
  selector: 'app-address-detail',
  templateUrl: './address-detail.component.html',
  styleUrls: ['./address-detail.component.css']
})
export class AddressDetailComponent implements OnInit {

  pagetitle: string = "Address Detail";

  address: Address;

  showVerifyDelete: boolean = false;

  edit(): void {
    this.router.navigateByUrl("/addresses/edit/"+this.address.id);
  }
  remove(): void {
    this.showVerifyDelete = !this.showVerifyDelete;
  }
  verify(): void {
    this.addresssvc.remove(this.address)
      .subscribe(res => {
        console.log("AddressRemove:", res);
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
    this.addresssvc.get(+id)
      .subscribe(resp => {
        this.address = resp.data;
        console.log("AddressGet:", this.address);
      });
  }

}
