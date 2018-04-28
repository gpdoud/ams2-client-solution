import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VehicleListComponent } from './vehicle/vehicle-list/vehicle-list.component';
import { VehicleDetailComponent } from './vehicle/vehicle-detail/vehicle-detail.component';
import { VehicleEditComponent } from './vehicle/vehicle-edit/vehicle-edit.component';
import { VehicleCreateComponent } from './vehicle/vehicle-create/vehicle-create.component';
import { UserLoginComponent } from './user/user-login/user-login.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [VehicleListComponent, VehicleDetailComponent, VehicleEditComponent, VehicleCreateComponent, UserLoginComponent]
})
export class FeatureModule { }
