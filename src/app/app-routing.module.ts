import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { CoreModule } from './core/core.module';
import * as core from './core';
import { FeatureModule } from './feature/feature.module';
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
  { path: 'assets/select', component: feat.AssetSelectComponent },
  // Categories
  { path: 'categories/list', component: feat.CategoryListComponent },
  { path: 'categories/detail/:id', component: feat.CategoryDetailComponent },
  { path: 'categories/edit/:id', component: feat.CategoryEditComponent },
  { path: 'categories/create', component: feat.CategoryCreateComponent },
  // Department
  { path: 'departments/list', component: feat.DepartmentListComponent },
  { path: 'departments/detail/:id', component: feat.DepartmentDetailComponent },
  { path: 'departments/edit/:id', component: feat.DepartmentEditComponent },
  { path: 'departments/create', component: feat.DepartmentCreateComponent },
  { path: 'departments/assets/:id/:name', component: feat.DepartmentByAssetComponent},
  // Equiment
  { path: 'equipment/list', component: feat.EquipmentListComponent },
  { path: 'equipment/detail/:id', component: feat.EquipmentDetailComponent },
  { path: 'equipment/edit/:id', component: feat.EquipmentEditComponent },
  { path: 'equipment/create', component: feat.EquipmentCreateComponent },
  // Property
  { path: 'properties/list', component: feat.PropertyListComponent },
  { path: 'properties/detail/:id', component: feat.PropertyDetailComponent },
  { path: 'properties/edit/:id', component: feat.PropertyEditComponent },
  { path: 'properties/create', component: feat.PropertyCreateComponent },
  // User
  { path: 'users/list', component: feat.UserListComponent },
  { path: 'users/detail/:id', component: feat.UserDetailComponent },
  { path: 'users/edit/:id', component: feat.UserEditComponent },
  { path: 'users/create', component: feat.UserCreateComponent },
  { path: 'users/login', component: feat.UserLoginComponent },
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