import { Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class SystemService implements OnInit {

  getConfig(): void {
  }

  constructor(private http: HttpClient) {
  }

  ngOnInit() {

  }

}