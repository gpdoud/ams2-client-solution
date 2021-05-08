import { Component, OnInit } from '@angular/core';
import { EquipmentService } from '../equipment.service';
import { Equipment } from '../equipment';
import { SystemService } from '../../system/system.service';
import { JsonResponse } from '../../utility/json-response';
import { e } from '@angular/core/src/render3';

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

  sortProperty: string = "Code";
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
        resp.data.sort((a, b) : number => {
          if (a.Asset.code > b.Asset.code) {return 1}
          else if (a.Asset.code < b.Asset.code) {return -1}
          else if (a.SerialNumber > b.SerialNumber) {return 1}
          return -1;
        })
        this.equipments = resp.data;
        console.log("EquipmentList:", this.equipments);
        this.errormessage = `${this.equipments.length} equipments`;
      });
  }

}
