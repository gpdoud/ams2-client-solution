import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

import { SystemService } from '../system/system.service';
import { Equipment } from '../equipment/equipment';
import { JsonResponse } from '../utility/json-response';

@Injectable()
export class EquipmentService {

  url = this.syssvc.settings.baseurl + "api/Equipments/";

  listByDept(id: number): Observable<JsonResponse> {
    return this.http.get(this.url+"ListByDepartment/"+id) as Observable<JsonResponse>;
  }

  list(): Observable<JsonResponse> {
    return this.http.get(this.url+"List") as Observable<JsonResponse>;
  }
  get(id: number): Observable<JsonResponse> {
    return this.http.get(this.url+"Get/"+id) as Observable<JsonResponse>;
  }
  create(equipment: Equipment): Observable<JsonResponse> {
    return this.http.post(this.url+"Create", equipment) as Observable<JsonResponse>;
  }
  change(equipment: Equipment): Observable<JsonResponse> {
    return this.http.post(this.url+"Change", equipment) as Observable<JsonResponse>;
  }
  remove(equipment: Equipment): Observable<JsonResponse> {
    return this.http.post(this.url+"Remove", equipment) as Observable<JsonResponse>;
  }

  constructor(
    private http: HttpClient
    ,private syssvc: SystemService
  ) {}

}
