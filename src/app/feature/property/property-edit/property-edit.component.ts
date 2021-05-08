import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { SystemService } from '@feat/system/system.service';
import { PropertyService } from '@feat/property/property.service';
import { Property } from '@feat/property/property';
import { JsonResponse } from '@feat/utility/json-response';
import { AssetTypes } from '@feat/asset/asset-types.enum';

@Component({
  selector: 'app-property-edit',
  templateUrl: './property-edit.component.html',
  styleUrls: ['./property-edit.component.css']
})
export class PropertyEditComponent implements OnInit {

  pagetitle: string = "Property Edit";
  errormessage = "Ready";

  property: Property;
  assetType: AssetTypes = AssetTypes.Property;

  save(): void {
    console.log("Property Edit:", this.property);
    this.propertysvc.change(this.property)
      .subscribe(resp => {
        if(resp.code != 0) {
          console.log("PropertyChange resp:", resp);
          this.errormessage = resp.formattedMessage;
        } else {
          this.router.navigateByUrl("/properties/list");
        }
      });
  }

  constructor(
    private propertysvc: PropertyService,
    private syssvc: SystemService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.syssvc.checkLogin();
    let id = this.route.snapshot.params.id;
    console.log("PropertyGet id:", id);
    this.propertysvc.get(+id)
      .subscribe(resp => {
        this.property = resp.data;
        console.log("PropertyGet:", this.property);
      });
  }

}
