import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-heading',
  templateUrl: './heading.component.html',
  styleUrls: ['./heading.component.css']
})
export class HeadingComponent implements OnInit {

  branding: string = "Deerfield Township Administration";

  constructor() { }

  ngOnInit() {
  }

}
