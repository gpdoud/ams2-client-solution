import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { SystemService } from '../../system/system.service';
import { VehicleService } from '../../vehicle/vehicle.service';
import { Vehicle } from '../../vehicle/vehicle';
import { Asset } from '../../asset/asset';
import { JsonResponse } from '../../utility/json-response';
import { AssetTypes } from '../../asset/asset-types.enum';

@Component({
  selector: 'app-vehicle-create',
  templateUrl: './vehicle-create.component.html',
  styleUrls: ['./vehicle-create.component.css']
})
export class VehicleCreateComponent implements OnInit {

  pagetitle: string = "Vehicle Create";
  errormessage = "Ready";

  asset: Asset = new Asset(0, "", "", "", null, null, null, 0, null, null, null, null, 0);
  vehicle: Vehicle = new Vehicle(0, "", 0, this.asset, "", "", 0, "", "", "");
  assetType: AssetTypes = AssetTypes.Vehicle;

  save(): void {
    console.log("VehicleCreate preupdate:", this.vehicle);
    this.vehiclesvc.create(this.vehicle)
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
    private vehiclesvc: VehicleService,
    private syssvc: SystemService,
    private router: Router
  ) { }

  ngOnInit() {
  }

}
