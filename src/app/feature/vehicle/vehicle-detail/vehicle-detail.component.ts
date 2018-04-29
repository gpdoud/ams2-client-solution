import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { VehicleService } from '@feat/vehicle/vehicle.service';
import { Vehicle } from '@feat/vehicle/vehicle';

@Component({
  selector: 'app-vehicle-detail',
  templateUrl: './vehicle-detail.component.html',
  styleUrls: ['./vehicle-detail.component.css']
})
export class VehicleDetailComponent implements OnInit {

  pagetitle: string = "Vehicle Detail";

  vehicle: Vehicle;

  constructor(
    private vehiclesvc: VehicleService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    let id = this.route.snapshot.params.id;
    this.vehiclesvc.get(+id)
      .subscribe(vehicle => {
        this.vehicle = vehicle;
        console.log("VehicleGet:", this.vehicle);
      });
  }

}
