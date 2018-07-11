import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { CoreModule } from '@core/core.module';
import * as core from './core';
import { FeatureModule } from '@feat/feature.module';
import * as feat from './feature';

const approutes: Routes = [
  { path: '', redirectTo: '/', pathMatch: 'full' },
  // core
  { path: 'about', component: core.AboutComponent },
  { path: 'home', component: core.HomeComponent },
  // Address
  { path: 'addresses/list', component: feat.AddressListComponent },
  { path: 'addresses/detail/:id', component: feat.AddressDetailComponent },
  { path: 'addresses/edit/:id', component: feat.AddressEditComponent },
  { path: 'addresses/create', component: feat.AddressCreateComponent },
  // Asset
  { path: 'assets/print', component: feat.AssetPrintComponent },
  // Equiment
  { path: 'equipment/list', component: feat.EquipmentListComponent },
  { path: 'equipment/detail/:id', component: feat.EquipmentDetailComponent },
  { path: 'equipment/edit/:id', component: feat.EquipmentEditComponent },
  { path: 'equipment/create', component: feat.EquipmentCreateComponent },
  // User
  { path: 'users/list', component: feat.UserListComponent },
  { path: 'users/detail/:id', component: feat.UserDetailComponent },
  { path: 'users/edit/:id', component: feat.UserEditComponent },
  { path: 'users/create', component: feat.UserCreateComponent },
  // User
  { path: 'vehicles/list', component: feat.VehicleListComponent },
  { path: 'vehicles/detail/:id', component: feat.VehicleDetailComponent },
  { path: 'vehicles/edit/:id', component: feat.VehicleEditComponent },
  { path: 'vehicles/create', component: feat.VehicleCreateComponent },
  // Catch-all
  { path: '**', component: core.HomeComponent }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(approutes, { enableTracing: false })
  ],
  exports: []
})

export class AppRoutingModule {}