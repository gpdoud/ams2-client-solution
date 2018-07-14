import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

import { SystemService } from '@feat/system/system.service';
import { Property } from '@feat/property/property';
import { JsonResponse } from '@feat/utility/json-response';

@Injectable()
export class PropertyService {

  url = this.syssvc.settings.baseurl + "api/Properties/";

  list(): Observable<JsonResponse> {
    return this.http.get(this.url+"List") as Observable<JsonResponse>;
  }
  get(id: number): Observable<JsonResponse> {
    return this.http.get(this.url+"Get/"+id) as Observable<JsonResponse>;
  }
  create(property: Property): Observable<JsonResponse> {
    return this.http.post(this.url+"Create", property) as Observable<JsonResponse>;
  }
  change(property: Property): Observable<JsonResponse> {
    return this.http.post(this.url+"Change", property) as Observable<JsonResponse>;
  }
  remove(property: Property): Observable<JsonResponse> {
    return this.http.post(this.url+"Remove", property) as Observable<JsonResponse>;
  }

  constructor(
    private http: HttpClient
    ,private syssvc: SystemService
  ) {}

}
