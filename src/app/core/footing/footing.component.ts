import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footing',
  templateUrl: './footing.component.html',
  styleUrls: ['./footing.component.css']
})
export class FootingComponent implements OnInit {

  appname: string = "AMS2";
  version: string = "2.0.1";
  copyright: string = "Copyright (c) 2018 MAX Technical Training All rights reserved";

  constructor() { }

  ngOnInit() {
  }

}
