import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { NgModule, APP_INITIALIZER } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { CoreModule } from './core/core.module';
import * as core from './core';
import { FeatureModule } from './feature/feature.module';
import * as feat from './feature';

import { AppComponent } from './app.component';

export function startupServiceFactory(appinitsvc: feat.AppInitService): Function {
  return () => appinitsvc.getSettings();
}

@NgModule({
  declarations: [
    AppComponent, core.SortPipe, core.SearchPipe,
    core.AboutComponent, core.HomeComponent, 
    core.FootingComponent, core.HeadingComponent, 
    core.MenuComponent, core.MenuItemComponent,
    feat.AddressListComponent, feat.AddressDetailComponent, feat.AddressCreateComponent, feat.AddressEditComponent,
    feat.AssetPrintComponent,
    feat.CategoryListComponent, feat.CategoryDetailComponent, feat.CategoryCreateComponent, feat.CategoryEditComponent, feat.DepartmentByAssetComponent,
    feat.DepartmentListComponent, feat.DepartmentDetailComponent, feat.DepartmentCreateComponent, feat.DepartmentEditComponent,
    feat.EquipmentListComponent, feat.EquipmentDetailComponent, feat.EquipmentCreateComponent, feat.EquipmentEditComponent,
    feat.PropertyListComponent, feat.PropertyDetailComponent, feat.PropertyCreateComponent, feat.PropertyEditComponent,
    feat.UserListComponent, feat.UserDetailComponent, feat.UserCreateComponent, feat.UserEditComponent, feat.UserLoginComponent,
    feat.VehicleListComponent, feat.VehicleDetailComponent, feat.VehicleCreateComponent, feat.VehicleEditComponent,
    feat.AssetDetailComponent, feat.AssetEditComponent, feat.AssetCreateComponent,
    feat.ErrorDetailComponent,
    feat.AssetSelectComponent, feat.AssetPrintDepartmentComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    CommonModule,
    RouterModule,
    HttpClientModule,
    AppRoutingModule,
    CoreModule
  ],
  exports: [
  ],
  providers: [
    feat.AddressService, feat.AssetService, feat.UserService, feat.VehicleService, 
    feat.EquipmentService, feat.CategoryService, feat.DepartmentService, feat.PropertyService,
    feat.SystemService, feat.AppInitService,
    {
      // provider for APP_INITIALIZER
      provide: APP_INITIALIZER,
      useFactory: startupServiceFactory,
      deps: [feat.AppInitService],
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
