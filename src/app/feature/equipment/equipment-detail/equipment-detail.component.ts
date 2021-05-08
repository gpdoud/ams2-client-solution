import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { SystemService } from '@feat/system/system.service';
import { EquipmentService } from '@feat/equipment/equipment.service';
import { Equipment } from '@feat/equipment/equipment';
import { JsonResponse } from '@feat/utility/json-response';
import { AssetTypes } from '@feat/asset/asset-types.enum';

@Component({
  selector: 'app-equipment-detail',
  templateUrl: './equipment-detail.component.html',
  styleUrls: ['./equipment-detail.component.css']
})
export class EquipmentDetailComponent implements OnInit {

  pagetitle: string = "Equipment Detail";
  errormessage = "Ready";

  equipment: Equipment;
  assetType: AssetTypes = AssetTypes.Equipment;

  showVerifyDelete: boolean = false;

  edit(): void {
    this.router.navigateByUrl("/equipment/edit/"+this.equipment.id);
  }
  remove(): void {
    this.showVerifyDelete = !this.showVerifyDelete;
  }
  verify(): void {
    this.equipmentsvc.remove(this.equipment)
      .subscribe(resp => {
        if(resp.code != 0) {
          console.log("EquipmentRemove resp:", resp);
          this.errormessage = resp.formattedMessage;
          } else {
            this.router.navigateByUrl("/equipment/list");
          }
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
        this.equipment = resp.data;
        console.log("EquipmentGet:", this.equipment);
      });
  }

}
