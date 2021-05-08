import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { SystemService } from '@feat/system/system.service';
import { VehicleService } from '@feat/vehicle/vehicle.service';
import { Vehicle } from '@feat/vehicle/vehicle';
import { JsonResponse } from '@feat/utility/json-response';
import { AssetTypes } from '@feat/asset/asset-types.enum';

@Component({
  selector: 'app-vehicle-edit',
  templateUrl: './vehicle-edit.component.html',
  styleUrls: ['./vehicle-edit.component.css']
})
export class VehicleEditComponent implements OnInit {

  pagetitle: string = "Vehicle Edit";
  errormessage = "Ready";

  vehicle: Vehicle;
  assetType: AssetTypes = AssetTypes.Vehicle;

  save(): void {
    console.log("VehicleEdit preupdate:", this.vehicle);
    this.Vehiclesvc.change(this.vehicle)
      .subscribe(resp => {
        if(resp.code != 0) {
          console.error("VehicleEdit resp:", resp);
          this.errormessage = resp.formattedMessage;
        } else {
          this.router.navigateByUrl("/vehicles/list");
        }
      });
  }

  constructor(
    private Vehiclesvc: VehicleService,
    private syssvc: SystemService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    let id = this.route.snapshot.params.id;
    console.log("VehicleGet id:", id);
    this.Vehiclesvc.get(+id)
      .subscribe(resp => {
        this.vehicle = resp.data;
        console.log("VehicleGet:", this.vehicle);
      });
  }

}
