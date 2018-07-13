import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { SystemService } from '@feat/system/system.service';
import { JsonResponse } from '@feat/utility/json-response';

import { Category } from '@feat/category/category';

@Injectable()
export class CategoryService {

  url = this.syssvc.settings.baseurl + "api/Categories/";
  
  list(): Observable<JsonResponse> {
    return this.http.get(this.url+"List") as Observable<JsonResponse>;
  }
  get(id: number): Observable<JsonResponse> {
    return this.http.get(this.url+"Get/"+id) as Observable<JsonResponse>;
  }
  create(category: Category): Observable<JsonResponse> {
    return this.http.post(this.url+"Create", category) as Observable<JsonResponse>;
  }
  change(category: Category): Observable<JsonResponse> {
    return this.http.post(this.url+"Change", category) as Observable<JsonResponse>;
  }
  remove(category: Category): Observable<JsonResponse> {
    return this.http.post(this.url+"Remove", category) as Observable<JsonResponse>;
  }

  constructor(private http: HttpClient, private syssvc: SystemService) { }

}

