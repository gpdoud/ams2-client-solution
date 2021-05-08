import { Component, Input, OnInit } from '@angular/core';
import { Department } from '@feat/department/department';
import { EquipmentPrint } from '@feat/equipment/equipment-print';
import { EquipmentService } from '@feat/equipment/equipment.service';
import { VehiclePrint } from '@feat/vehicle/vehicle-print';
import { VehicleService } from '@feat/vehicle/vehicle.service';

@Component({
  selector: 'app-asset-print-department',
  templateUrl: './asset-print-department.component.html',
  styleUrls: ['./asset-print-department.component.css']
})
export class AssetPrintDepartmentComponent implements OnInit {

  @Input() dept: Department;
  vps: VehiclePrint[] = [];
  eps: EquipmentPrint[] = [];

  constructor(
    private vehSvc: VehicleService,
    private equipSvc: EquipmentService
  ) { }

  ngOnInit() {
    this.vehSvc.listByDept(this.dept.id).subscribe(
      res => {
        this.vps = res.data;
        console.debug(this.vps);
      }, 
      err => console.error(err)
    );
    this.equipSvc.listByDept(this.dept.id).subscribe(
      res => {
        this.eps = res.data;
        console.debug(this.eps);
      }, 
      err => console.error(err)
    );
  }

}
