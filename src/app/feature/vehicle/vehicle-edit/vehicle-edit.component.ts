import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { VehicleService } from '@feat/vehicle/vehicle.service';
import { Vehicle } from '@feat/vehicle/vehicle';

@Component({
  selector: 'app-vehicle-edit',
  templateUrl: './vehicle-edit.component.html',
  styleUrls: ['./vehicle-edit.component.css']
})
export class VehicleEditComponent implements OnInit {

  pagetitle: string = "Vehicle Edit";

  vehicle: Vehicle;

  save(): void {
    console.log("VehicleEdit preupdate:", this.vehicle);
    this.Vehiclesvc.change(this.vehicle)
      .subscribe(rc => {
        console.log("VehicleEdit rc:", rc);
        this.router.navigateByUrl("/vehicles/list");
      });
  }

  constructor(
    private Vehiclesvc: VehicleService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    let id = this.route.snapshot.params.id;
    console.log("VehicleGet id:", id);
    this.Vehiclesvc.get(+id)
      .subscribe(vehicle => {
        this.vehicle = vehicle;
        console.log("VehicleGet:", this.vehicle);
      });
  }

}
