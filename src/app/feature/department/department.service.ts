import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

import { SystemService } from '@feat/system/system.service';
import { Department } from '@feat/department/department';
import { JsonResponse } from '@feat/utility/json-response';

@Injectable()
export class DepartmentService {

  url = this.syssvc.settings.baseurl + "api/Departments/";

  list(): Observable<JsonResponse> {
    return this.http.get(this.url+"List") as Observable<JsonResponse>;
  }
  get(id: number): Observable<JsonResponse> {
    return this.http.get(this.url+"Get/"+id) as Observable<JsonResponse>;
  }
  create(department: Department): Observable<JsonResponse> {
    return this.http.post(this.url+"Create", department) as Observable<JsonResponse>;
  }
  change(department: Department): Observable<JsonResponse> {
    return this.http.post(this.url+"Change", department) as Observable<JsonResponse>;
  }
  remove(department: Department): Observable<JsonResponse> {
    return this.http.post(this.url+"Remove", department) as Observable<JsonResponse>;
  }

  constructor(
    private http: HttpClient
    ,private syssvc: SystemService
  ) {}

}
