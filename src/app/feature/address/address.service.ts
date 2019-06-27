import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { SystemService } from '../system/system.service';
import { Address } from '../address/address';
import { JsonResponse } from '../utility/json-response';

@Injectable()
export class AddressService {

  url = this.syssvc.settings.baseurl + "api/Addresses/";

  list(): Observable<JsonResponse> {
    return this.http.get(this.url+"List") as Observable<JsonResponse>;
  }
  get(id: number): Observable<JsonResponse> {
    return this.http.get(this.url+"Get/"+id) as Observable<JsonResponse>;
  }
  create(address: Address): Observable<JsonResponse> {
    return this.http.post(this.url+"Create", address) as Observable<JsonResponse>;
  }
  change(address: Address): Observable<JsonResponse> {
    return this.http.post(this.url+"Change", address) as Observable<JsonResponse>;
  }
  remove(address: Address): Observable<JsonResponse> {
    return this.http.post(this.url+"Remove", address) as Observable<JsonResponse>;
  }

  constructor(private http: HttpClient, private syssvc: SystemService) { }

}
