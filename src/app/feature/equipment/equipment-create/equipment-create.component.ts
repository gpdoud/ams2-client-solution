import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { SystemService } from '@feat/system/system.service';
import { EquipmentService } from '@feat/equipment/equipment.service';
import { Equipment } from '@feat/equipment/equipment';
import { Asset } from '@feat/asset/asset';
import { JsonResponse } from '@feat/utility/json-response';
import { AssetTypes } from '@feat/asset/asset-types.enum';

@Component({
  selector: 'app-equipment-create',
  templateUrl: './equipment-create.component.html',
  styleUrls: ['./equipment-create.component.css']
})
export class EquipmentCreateComponent implements OnInit {

  pagetitle: string = "Equipment Create";
  errormessage = "Ready";

  asset: Asset = new Asset(0, "", "", "", null, null, null, 0, null, null, null, null, 0);
  equipment: Equipment = new Equipment(0, 0, this.asset, "", "", true);
  assetType: AssetTypes = AssetTypes.Equipment;

  save(): void {
    console.log("EquipmentCreate preupdate:", this.equipment);
    this.equipmentsvc.create(this.equipment)
      .subscribe(resp => {
        if(resp.code != 0) {
        console.log("EquipmentCreate resp:", resp);
        this.errormessage = resp.formattedMessage;
        } else {
          this.router.navigateByUrl("/equipment/list");
        }
      });
  }

  constructor(
    private equipmentsvc: EquipmentService,
    private syssvc: SystemService,
    private router: Router
  ) { }

  ngOnInit() {
    this.syssvc.checkLogin();
  }

}
