import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { SystemService } from '@feat/system/system.service';
import { EquipmentService } from '@feat/equipment/equipment.service';
import { Equipment } from '@feat/equipment/equipment';
import { JsonResponse } from '@feat/utility/json-response';

@Component({
  selector: 'app-equipment-edit',
  templateUrl: './equipment-edit.component.html',
  styleUrls: ['./equipment-edit.component.css']
})
export class EquipmentEditComponent implements OnInit {

  pagetitle: string = "Equipment Edit";

  equipment: Equipment;

  save(): void {
    console.log("EquipmentEdit preupdate:", this.equipment);
    this.Equipmentsvc.change(this.equipment)
      .subscribe(rc => {
        console.log("EquipmentEdit rc:", rc);
        this.router.navigateByUrl("/equipment/list");
      });
  }

  constructor(
    private Equipmentsvc: EquipmentService,
    private syssvc: SystemService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    let id = this.route.snapshot.params.id;
    console.log("EquipmentGet id:", id);
    this.Equipmentsvc.get(+id)
      .subscribe(resp => {
        this.equipment = resp.Data;
        console.log("EquipmentGet:", this.equipment);
      });
  }

}
