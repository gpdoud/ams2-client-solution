import { Component, OnInit } from '@angular/core';
import { SystemService } from '../../feature/system/system.service';

@Component({
  selector: 'app-footing',
  templateUrl: './footing.component.html',
  styleUrls: ['./footing.component.css']
})
export class FootingComponent implements OnInit {

  appname: string = "AMS2";
  version: string = "2.0.1 - Next";
  copyright: string = "Copyright (c) 2018 MAX Technical Training All rights reserved";

  constructor(
    private syssvc: SystemService
  ) { }

  ngOnInit() {
    let settings = this.syssvc.settings;
    this.appname = settings.appname;
    this.version = settings.version;
    this.copyright = settings.copyright;
  }

}
