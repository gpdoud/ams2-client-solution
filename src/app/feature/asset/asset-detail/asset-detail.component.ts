import { Component, OnInit, Input } from '@angular/core';

import { Asset } from '@feat/asset/asset';
import { AssetTypes } from '@feat/asset/asset-types.enum';

@Component({
  selector: 'app-asset-detail',
  templateUrl: './asset-detail.component.html',
  styleUrls: ['./asset-detail.component.css']
})
export class AssetDetailComponent implements OnInit {

  pagetitle: string = "Asset Detail";
  
  @Input() asset: Asset;
  @Input() assetType: AssetTypes;
  assetTypes: AssetTypes = AssetTypes;

  constructor(
  ) { }

  ngOnInit() {
  }

}
