import { Component, OnInit } from '@angular/core';

import { VehicleService } from '@feat/vehicle/vehicle.service';
import { Vehicle } from '@feat/vehicle/vehicle';
import { JsonResponse } from '@feat/utility/json-response';

@Component({
  selector: 'app-vehicle-list',
  templateUrl: './vehicle-list.component.html',
  styleUrls: ['./vehicle-list.component.css']
})
export class VehicleListComponent implements OnInit {

  pagetitle: string = "Vehicle List";
  createlink: string = "/vehicles/create";
  createlinkname: string = "Create New";

  vehicles: Vehicle[];

  constructor(private vehiclesvc: VehicleService) { }

  ngOnInit() {
    this.vehiclesvc.list()
      .subscribe(resp => {
        this.vehicles = resp.Data;
        console.log("VehicleList:", this.vehicles);
      });
  }

}
