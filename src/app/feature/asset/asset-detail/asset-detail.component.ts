import { Component, OnInit, Input } from '@angular/core';

import { Asset } from '../../asset/asset';
import { AssetTypes } from '../../asset/asset-types.enum';

@Component({
  selector: 'app-asset-detail',
  templateUrl: './asset-detail.component.html',
  styleUrls: ['./asset-detail.component.css']
})
export class AssetDetailComponent implements OnInit {

  pagetitle: string = "Asset Detail";
  
  @Input() asset: Asset;
  @Input() assetType: AssetTypes;
  assetTypes = AssetTypes;

  constructor(
  ) { }

  ngOnInit() {
  }

}
