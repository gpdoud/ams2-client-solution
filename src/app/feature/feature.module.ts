import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ErrorDetailComponent } from './utility/error-detail/error-detail.component';
import { AssetPrintComponent } from './asset/asset-print/asset-print.component';
import { DepartmentListComponent } from './department/department-list/department-list.component';
import { DepartmentDetailComponent } from './department/department-detail/department-detail.component';
import { DepartmentCreateComponent } from './department/department-create/department-create.component';
import { DepartmentEditComponent } from './department/department-edit/department-edit.component';

@NgModule({
  imports: [
    CommonModule
  ]
})
export class FeatureModule { }
