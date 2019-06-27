import { Component, OnInit } from '@angular/core';

import { VehicleService } from '../../vehicle/vehicle.service';
import { EquipmentService } from '../../equipment/equipment.service';
import { Vehicle } from '../../vehicle/vehicle';
import { Equipment } from '../../equipment/equipment';

@Component({
  selector: 'app-asset-print',
  templateUrl: './asset-print.component.html',
  styleUrls: ['./asset-print.component.css']
})
export class AssetPrintComponent implements OnInit {

  pagetitle: string = "Asset Print";

  vehicles: Vehicle[];
  equipment: Equipment[];

  constructor(
    private vehicleSvc: VehicleService,
    private equipmentSvc: EquipmentService
  ) { }
    
  ngOnInit() {
    this.vehicleSvc.list()
      .subscribe(resp => {
        console.log("Resp:", resp);
        this.vehicles = resp.Data;
      });
    this.equipmentSvc.list()
      .subscribe(resp => {
        console.log("Resp:", resp);
        this.equipment = resp.Data;
      });
  }

}
