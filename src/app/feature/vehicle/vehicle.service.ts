import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { SystemService } from '@feat/system/system.service';
import { Vehicle } from '@feat/vehicle/vehicle';

@Injectable()
export class VehicleService {

  url = this.syssvc.settings.baseurl + "api/Vehicles/";

  list(): Observable<Vehicle[]> {
    return this.http.get(this.url+"List") as Observable<Vehicle[]>;
  }
  get(id: number): Observable<Vehicle> {
    return this.http.get(this.url+"Get/"+id) as Observable<Vehicle>;
  }
  create(vehicle: Vehicle): Observable<boolean> {
    return this.http.post(this.url+"Create", vehicle) as Observable<boolean>;
  }
  change(vehicle: Vehicle): Observable<boolean> {
    return this.http.post(this.url+"Change", vehicle) as Observable<boolean>;
  }
  remove(vehicle: Vehicle): Observable<boolean> {
    return this.http.post(this.url+"Remove", vehicle) as Observable<boolean>;
  }

  constructor(private http: HttpClient, private syssvc: SystemService) { }

}
