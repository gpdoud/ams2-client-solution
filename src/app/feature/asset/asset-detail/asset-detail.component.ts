import { Component, OnInit, Input } from '@angular/core';

import { Asset } from '@feat/asset/asset';

@Component({
  selector: 'app-asset-detail',
  templateUrl: './asset-detail.component.html',
  styleUrls: ['./asset-detail.component.css']
})
export class AssetDetailComponent implements OnInit {

  pagetitle: string = "Asset Detail";
  
  @Input() asset: Asset;

  constructor(
  ) { }

  ngOnInit() {
  }

}
