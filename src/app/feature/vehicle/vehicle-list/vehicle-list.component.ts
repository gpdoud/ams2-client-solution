import { Component, OnInit } from '@angular/core';

import { VehicleService } from '@feat/vehicle/vehicle.service';
import { Vehicle } from '@feat/vehicle/vehicle';

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
      .subscribe(vehicles => {
        this.vehicles = vehicles;
        console.log("VehicleList:", this.vehicles);
      });
  }

}
