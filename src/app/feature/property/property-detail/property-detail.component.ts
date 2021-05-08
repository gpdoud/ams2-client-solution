import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { SystemService } from '@feat/system/system.service';
import { PropertyService } from '@feat/property/property.service';
import { Property } from '@feat/property/property';
import { JsonResponse } from '@feat/utility/json-response';
import { AssetTypes } from '@feat/asset/asset-types.enum';

@Component({
  selector: 'app-property-detail',
  templateUrl: './property-detail.component.html',
  styleUrls: ['./property-detail.component.css']
})
export class PropertyDetailComponent implements OnInit {

  pagetitle: string = "Property Detail";
  errormessage = "Ready";

  property: Property;

  showVerifyDelete: boolean = false;

  assetType: AssetTypes = AssetTypes.Property;

  edit(): void {
    this.router.navigateByUrl("/properties/edit/"+this.property.id);
  }
  remove(): void {
    this.showVerifyDelete = !this.showVerifyDelete;
  }
  verify(): void {
    this.propertysvc.remove(this.property)
      .subscribe(resp => {
        if(resp.code != 0) {
          console.log("PropertyRemove resp:", resp);
          this.errormessage = resp.formattedMessage;
        } else {
          this.router.navigateByUrl("/properties/list");
        }      });
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
    this.propertysvc.get(+id)
      .subscribe(resp => {
        this.property = resp.data;
        console.log("PropertyGet:", this.property);
      });
  }

}
