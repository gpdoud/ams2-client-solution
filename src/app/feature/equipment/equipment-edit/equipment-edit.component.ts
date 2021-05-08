import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { SystemService } from '@feat/system/system.service';
import { EquipmentService } from '@feat/equipment/equipment.service';
import { Equipment } from '@feat/equipment/equipment';
import { JsonResponse } from '@feat/utility/json-response';
import { AssetTypes } from '@feat/asset/asset-types.enum';

@Component({
  selector: 'app-equipment-edit',
  templateUrl: './equipment-edit.component.html',
  styleUrls: ['./equipment-edit.component.css']
})
export class EquipmentEditComponent implements OnInit {

  pagetitle: string = "Equipment Edit";
  errormessage = "Ready";

  equipment: Equipment;
  assetType: AssetTypes = AssetTypes.Equipment;

  save(): void {
    console.log("EquipmentEdit preupdate:", this.equipment);
    this.Equipmentsvc.change(this.equipment)
      .subscribe(resp => {
        if(resp.code != 0) {
          console.log("EquipmentChange resp:", resp);
          this.errormessage = resp.formattedMessage;
        } else {
          this.router.navigateByUrl("/equipment/list");
        }      
      });
  }

  constructor(
    private Equipmentsvc: EquipmentService,
    private syssvc: SystemService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.syssvc.checkLogin();
    let id = this.route.snapshot.params.id;
    console.log("EquipmentGet id:", id);
    this.Equipmentsvc.get(+id)
      .subscribe(resp => {
        this.equipment = resp.data;
        console.log("EquipmentGet:", this.equipment);
      });
  }

}
