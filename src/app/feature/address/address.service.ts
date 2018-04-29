import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

import { Address } from '@feat/address/address';

const url = "http://localhost:44444/api/Addresses/";

@Injectable()
export class AddressService {

  list(): Observable<Address[]> {
    return this.http.get(url+"List") as Observable<Address[]>;
  }
  get(id: number): Observable<Address> {
    return this.http.get(url+"Get/"+id) as Observable<Address>;
  }
  create(address: Address): Observable<boolean> {
    return this.http.post(url+"Create", address) as Observable<boolean>;
  }
  change(address: Address): Observable<boolean> {
    return this.http.post(url+"Change", address) as Observable<boolean>;
  }
  remove(address: Address): Observable<boolean> {
    return this.http.post(url+"Remove", address) as Observable<boolean>;
  }

  constructor(private http: HttpClient) { }

}
