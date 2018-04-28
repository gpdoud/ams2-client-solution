import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

import { Vehicle } from '@feat/vehicle/vehicle';

const url = "http://localhost:44444/api/Vehicles/";

@Injectable()
export class VehicleService {

  login(vehiclename: string, password: string): Observable<Vehicle> {
    return this.http.get(url+`Login?vehiclename=${vehiclename}&password=${password}`) as Observable<Vehicle>;
  }
  list(): Observable<Vehicle[]> {
    return this.http.get(url+"List") as Observable<Vehicle[]>;
  }
  get(id: number): Observable<Vehicle> {
    return this.http.get(url+"Get/"+id) as Observable<Vehicle>;
  }
  create(vehicle: Vehicle): Observable<boolean> {
    return this.http.post(url+"Create", vehicle) as Observable<boolean>;
  }
  change(vehicle: Vehicle): Observable<boolean> {
    return this.http.post(url+"Change", vehicle) as Observable<boolean>;
  }
  remove(vehicle: Vehicle): Observable<boolean> {
    return this.http.post(url+"Remove", vehicle) as Observable<boolean>;
  }

  constructor(private http: HttpClient) { }

}
