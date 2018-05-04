import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

import { SystemService } from '@feat/system/system.service';

import { Equipment } from '@feat/equipment/equipment';

@Injectable()
export class EquipmentService {

  url = this.syssvc.settings.baseurl + "api/Equipments/";

  list(): Observable<Equipment[]> {
    return this.http.get(this.url+"List") as Observable<Equipment[]>;
  }
  get(id: number): Observable<Equipment> {
    return this.http.get(this.url+"Get/"+id) as Observable<Equipment>;
  }
  create(equipment: Equipment): Observable<boolean> {
    return this.http.post(this.url+"Create", equipment) as Observable<boolean>;
  }
  change(equipment: Equipment): Observable<boolean> {
    return this.http.post(this.url+"Change", equipment) as Observable<boolean>;
  }
  remove(equipment: Equipment): Observable<boolean> {
    return this.http.post(this.url+"Remove", equipment) as Observable<boolean>;
  }

  constructor(
    private http: HttpClient
    ,private syssvc: SystemService
  ) {}

}
