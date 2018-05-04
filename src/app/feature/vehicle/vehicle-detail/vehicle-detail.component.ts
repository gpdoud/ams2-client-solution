import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { SystemService } from '@feat/system/system.service';
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

  showVerifyDelete: boolean = false;

  edit(): void {
    this.router.navigateByUrl("/vehicles/edit/"+this.vehicle.Id);
  }
  remove(): void {
    this.showVerifyDelete = !this.showVerifyDelete;
  }
  verify(): void {
    this.vehiclesvc.remove(this.vehicle)
      .subscribe(res => {
        console.log("UserRemove:", res);
        this.router.navigateByUrl("/vehicles/list");
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
      .subscribe(vehicle => {
        this.vehicle = vehicle;
        console.log("VehicleGet:", this.vehicle);
      });
  }

}
