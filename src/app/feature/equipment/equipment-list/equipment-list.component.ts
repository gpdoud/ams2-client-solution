import { Component, OnInit } from '@angular/core';

import { EquipmentService } from '@equipment/equipment.service';
import { Equipment } from '@equipment/equipment';
import { SystemService } from '@system/system.service';
import { JsonResponse } from '@feat/utility/json-response';

@Component({
  selector: 'app-equipment-list',
  templateUrl: './equipment-list.component.html',
  styleUrls: ['./equipment-list.component.css']
})
export class EquipmentListComponent implements OnInit {

  pagetitle: string = "Equipment List";
  createlink: string = "/equipment/create";
  createlinkname: string = "Create New";

  equipments: Equipment[];

  searchfor: string = "";

  constructor(
    private equipmentsvc: EquipmentService,
    private syssvc: SystemService
  ) { }

  ngOnInit() {
    this.equipmentsvc.list()
      .subscribe(resp => {
        this.equipments = resp.Data;
        console.log("EquipmentList:", this.equipments);
      });
  }

}
