import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

const configFile = "assets/settings.json";

@Injectable()
export class AppInitService {

    public settings: any;

  constructor(
    private http: HttpClient
  ) {
  }

  getSettings(): Promise<any> {
    console.log("getSettings()");
    return this.http.get(configFile)
      .toPromise()
      .then((data: any) => {
          this.settings = data;
          console.log("Settings:", this.settings);
      });
  }

}