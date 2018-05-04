import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

const configFile = "assets/settings.json";

@Injectable()
export class SystemService {

  public settings: any;

  constructor(private http: HttpClient) {
  }

  getSettings(): Promise<any> {
    console.log("getSettings()");
    return this.http.get(configFile)
      .toPromise()
      .then((data: any) => this.settings = data);
  }

}