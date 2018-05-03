import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class SystemService {

  getData(): Observable<any> {
    return this.http.get("assets/ams2.json") as Observable<any>;
  }

  constructor(private http: HttpClient) {
  }

}