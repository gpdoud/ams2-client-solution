import { Component, OnInit } from '@angular/core';
import { SystemService } from '@system/system.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  students: string[] = [
    "Michael Buchanan - .Net Bootcamp #4 'Fried Parrots'",
    "Marcus Fields - .Net Bootcamp #4 'Fried Parrots'"
  ];

  constructor(
    private syssvc: SystemService
  ) { }

  ngOnInit() {
    this.syssvc.checkLogin();
  }

}
