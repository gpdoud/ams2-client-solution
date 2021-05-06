import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { SystemService } from '@feat/system/system.service';
import { Vehicle } from '@feat/vehicle/vehicle';
import { JsonResponse } from '@feat/utility/json-response';
import { VehiclePrint } from './vehicle-print';

@Injectable()
export class VehicleService {

  url = this.syssvc.settings.baseurl + "api/Vehicles/";

  listByDept(id: number): Observable<JsonResponse> {
    return this.http.get(this.url+"ListByDepartment/"+id) as Observable<JsonResponse>
  }

  list(): Observable<JsonResponse> {
    console.log("URL:", this.url);
    return this.http.get(this.url+"List") as Observable<JsonResponse>;
  }
  get(id: number): Observable<JsonResponse> {
    return this.http.get(this.url+"Get/"+id) as Observable<JsonResponse>;
  }
  create(vehicle: Vehicle): Observable<JsonResponse> {
    return this.http.post(this.url+"Create", vehicle) as Observable<JsonResponse>;
  }
  change(vehicle: Vehicle): Observable<JsonResponse> {
    return this.http.post(this.url+"Change", vehicle) as Observable<JsonResponse>;
  }
  remove(vehicle: Vehicle): Observable<JsonResponse> {
    return this.http.post(this.url+"Remove", vehicle) as Observable<JsonResponse>;
  }

  constructor(private http: HttpClient, private syssvc: SystemService) { }

}
