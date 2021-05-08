import { Component, OnInit } from '@angular/core';

import { VehicleService } from '../../vehicle/vehicle.service';
import { EquipmentService } from '../../equipment/equipment.service';
import { Vehicle } from '../../vehicle/vehicle';
import { Equipment } from '../../equipment/equipment';
import { DepartmentService } from '@feat/department/department.service';
import { Department } from '@feat/department/department';

@Component({
  selector: 'app-asset-print',
  templateUrl: './asset-print.component.html',
  styleUrls: ['./asset-print.component.css']
})
export class AssetPrintComponent implements OnInit {

  pagetitle: string = "Asset Print";

  depts: Department[] = [];

  constructor(
    private deptSvc: DepartmentService
  ) { }
    
  ngOnInit() {
    this.deptSvc.list().subscribe(
      res => { this.depts = res.data; console.debug("Depts:", this.depts); },
      err => { console.error(err); }
    );
  }

}
