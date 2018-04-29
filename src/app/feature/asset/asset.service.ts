import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

import { Asset } from '@feat/asset/asset';

const url = "http://localhost:44444/api/Assets/";

@Injectable()
export class AssetService {

  list(): Observable<Asset[]> {
    return this.http.get(url+"List") as Observable<Asset[]>;
  }
  get(id: number): Observable<Asset> {
    return this.http.get(url+"Get/"+id) as Observable<Asset>;
  }
  create(asset: Asset): Observable<boolean> {
    return this.http.post(url+"Create", asset) as Observable<boolean>;
  }
  change(asset: Asset): Observable<boolean> {
    return this.http.post(url+"Change", asset) as Observable<boolean>;
  }
  remove(asset: Asset): Observable<boolean> {
    return this.http.post(url+"Remove", asset) as Observable<boolean>;
  }

  constructor(private http: HttpClient) { }

}
