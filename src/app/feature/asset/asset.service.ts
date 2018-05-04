import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { SystemService } from '@feat/system/system.service';
import { Asset } from '@feat/asset/asset';

@Injectable()
export class AssetService {

  url = this.syssvc.settings.baseurl + "api/Assets/";

  list(): Observable<Asset[]> {
    return this.http.get(this.url+"List") as Observable<Asset[]>;
  }
  get(id: number): Observable<Asset> {
    return this.http.get(this.url+"Get/"+id) as Observable<Asset>;
  }
  create(asset: Asset): Observable<boolean> {
    return this.http.post(this.url+"Create", asset) as Observable<boolean>;
  }
  change(asset: Asset): Observable<boolean> {
    return this.http.post(this.url+"Change", asset) as Observable<boolean>;
  }
  remove(asset: Asset): Observable<boolean> {
    return this.http.post(this.url+"Remove", asset) as Observable<boolean>;
  }

  constructor(private http: HttpClient, private syssvc: SystemService) { }

}
