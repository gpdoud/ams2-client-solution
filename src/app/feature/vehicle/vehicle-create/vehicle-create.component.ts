import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { SystemService } from '@feat/system/system.service';
import { VehicleService } from '@feat/vehicle/vehicle.service';
import { Vehicle } from '@feat/vehicle/vehicle';
import { Asset } from '@feat/asset/asset';

@Component({
  selector: 'app-vehicle-create',
  templateUrl: './vehicle-create.component.html',
  styleUrls: ['./vehicle-create.component.css']
})
export class VehicleCreateComponent implements OnInit {

  pagetitle: string = "Vehicle Create";

  asset: Asset = new Asset(0, "", "", "", null, null, null, 0, null, null, null, null, 0);
  vehicle: Vehicle = new Vehicle(0, "", 0, this.asset, "", "", 0, "");

  save(): void {
    console.log("VehicleCreate preupdate:", this.vehicle);
    this.vehiclesvc.create(this.vehicle)
      .subscribe(rc => {
        console.log("VehicleCreate rc:", rc);
        this.router.navigateByUrl("/vehicles/list");
      });
  }

  constructor(
    private vehiclesvc: VehicleService,
    private syssvc: SystemService,
    private router: Router
  ) { }

  ngOnInit() {
  }

}
