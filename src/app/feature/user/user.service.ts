import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { SystemService } from '@feat/system/system.service';
import { User } from '@feat/user/user';
import { JsonResponse } from '@feat/utility/json-response';


@Injectable()
export class UserService {

  url = this.syssvc.settings.baseurl + "api/Users/";
  
  login(username: string, password: string): Observable<JsonResponse> {
    return this.http.get(this.url+`Login/${username}/${password}`) as Observable<JsonResponse>;
  }
  list(): Observable<JsonResponse> {
    return this.http.get(this.url+"List") as Observable<JsonResponse>;
  }
  get(id: number): Observable<JsonResponse> {
    return this.http.get(this.url+"Get/"+id) as Observable<JsonResponse>;
  }
  create(user: User): Observable<JsonResponse> {
    return this.http.post(this.url+"Create", user) as Observable<JsonResponse>;
  }
  change(user: User): Observable<JsonResponse> {
    return this.http.post(this.url+"Change", user) as Observable<JsonResponse>;
  }
  remove(user: User): Observable<JsonResponse> {
    return this.http.post(this.url+"Remove", user) as Observable<JsonResponse>;
  }

  constructor(private http: HttpClient, private syssvc: SystemService) { }

}
