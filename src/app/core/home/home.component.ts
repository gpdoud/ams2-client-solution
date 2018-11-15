import { Component, OnInit } from '@angular/core';
import { SystemService } from '@system/system.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(
    private syssvc: SystemService
  ) { }

  ngOnInit() {
    this.syssvc.checkLogin();
  }

}
