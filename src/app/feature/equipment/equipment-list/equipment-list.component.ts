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
  errormessage: string = "";

  equipments: Equipment[];


  searchfor: string = "";

  sortProperty: string = "SerialNumber";
  sortOrder: string = "asc";

  sort(sortBy: string): void {
    if(sortBy === this.sortProperty)
      this.sortOrder = this.sortOrder === 'asc' ? 'desc' : 'asc';
    else {
      this.sortProperty = sortBy;
      this.sortOrder = 'asc';
    }
  }

  constructor(
    private equipmentsvc: EquipmentService,
    private syssvc: SystemService
  ) { }

  ngOnInit() {
    this.syssvc.checkLogin();
    this.equipmentsvc.list()
      .subscribe(resp => {
        this.equipments = resp.Data;
        console.log("EquipmentList:", this.equipments);
        this.errormessage = `${this.equipments.length} equipments`;
      });
  }

}
