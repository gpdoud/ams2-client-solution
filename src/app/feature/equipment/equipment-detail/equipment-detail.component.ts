import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { SystemService } from '@feat/system/system.service';
import { EquipmentService } from '@feat/equipment/equipment.service';
import { Equipment } from '@feat/equipment/equipment';
import { JsonResponse } from '@feat/utility/json-response';

@Component({
  selector: 'app-equipment-detail',
  templateUrl: './equipment-detail.component.html',
  styleUrls: ['./equipment-detail.component.css']
})
export class EquipmentDetailComponent implements OnInit {

  pagetitle: string = "Equipment Detail";

  equipment: Equipment;

  showVerifyDelete: boolean = false;

  edit(): void {
    this.router.navigateByUrl("/equipment/edit/"+this.equipment.Id);
  }
  remove(): void {
    this.showVerifyDelete = !this.showVerifyDelete;
  }
  verify(): void {
    this.equipmentsvc.remove(this.equipment)
      .subscribe(resp => {
        console.log("UserRemove:", resp);
        this.router.navigateByUrl("/equipment/list");
      });
  }


  constructor(
    private equipmentsvc: EquipmentService,
    private syssvc: SystemService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.syssvc.checkLogin();
    let id = this.route.snapshot.params.id;
    this.equipmentsvc.get(+id)
      .subscribe(resp => {
        this.equipment = resp.Data;
        console.log("EquipmentGet:", this.equipment);
      });
  }

}
