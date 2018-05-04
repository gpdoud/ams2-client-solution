import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { SystemService } from '@feat/system/system.service';
import { Address } from '@feat/address/address';

@Injectable()
export class AddressService {

  url = this.syssvc.settings.baseurl + "api/Addresses/";

  list(): Observable<Address[]> {
    return this.http.get(this.url+"List") as Observable<Address[]>;
  }
  get(id: number): Observable<Address> {
    return this.http.get(this.url+"Get/"+id) as Observable<Address>;
  }
  create(address: Address): Observable<boolean> {
    return this.http.post(this.url+"Create", address) as Observable<boolean>;
  }
  change(address: Address): Observable<boolean> {
    return this.http.post(this.url+"Change", address) as Observable<boolean>;
  }
  remove(address: Address): Observable<boolean> {
    return this.http.post(this.url+"Remove", address) as Observable<boolean>;
  }

  constructor(private http: HttpClient, private syssvc: SystemService) { }

}
