import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { SystemService } from '../../system/system.service';
import { VehicleService } from '../../vehicle/vehicle.service';
import { Vehicle } from '../../vehicle/vehicle';
import { JsonResponse } from '../../utility/json-response';
import { AssetTypes } from '../../asset/asset-types.enum';

@Component({
  selector: 'app-vehicle-detail',
  templateUrl: './vehicle-detail.component.html',
  styleUrls: ['./vehicle-detail.component.css']
})
export class VehicleDetailComponent implements OnInit {

  pagetitle: string = "Vehicle Detail";
  errormessage = "Ready";

  vehicle: Vehicle;
  assetType: AssetTypes = AssetTypes.Vehicle;

  showVerifyDelete: boolean = false;

  edit(): void {
    this.router.navigateByUrl("/vehicles/edit/"+this.vehicle.id);
  }
  remove(): void {
    this.showVerifyDelete = !this.showVerifyDelete;
  }
  verify(): void {
    this.vehiclesvc.remove(this.vehicle)
      .subscribe(resp => {
        if(resp.code != 0) {
          console.log("UserRemove:", resp);
          this.errormessage = resp.formattedMessage;
        } else {
          this.router.navigateByUrl("/vehicles/list");
        }
      });
  }


  constructor(
    private vehiclesvc: VehicleService,
    private syssvc: SystemService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    let id = this.route.snapshot.params.id;
    this.vehiclesvc.get(+id)
      .subscribe(resp => {
        this.vehicle = resp.data;
        console.log("VehicleGet:", this.vehicle);
      });
  }

}
