import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ErrorDetailComponent } from './utility/error-detail/error-detail.component';
import { AssetPrintComponent } from './asset/asset-print/asset-print.component';
import { AssetSelectComponent } from './asset/asset-select/asset-select.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [AssetSelectComponent],
})
export class FeatureModule { }
