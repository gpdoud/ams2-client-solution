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

export function startupServiceFactory(syssvc: feat.SystemService): Function {
  return () => syssvc.getSettings();
}

@NgModule({
  declarations: [
    AppComponent,
    core.AboutComponent, core.HomeComponent, 
    core.FootingComponent, core.HeadingComponent, 
    core.MenuComponent, core.MenuItemComponent,
    feat.AddressListComponent, feat.AddressDetailComponent, feat.AddressCreateComponent, feat.AddressEditComponent,
    feat.EquipmentListComponent, feat.EquipmentDetailComponent, feat.EquipmentCreateComponent, feat.EquipmentEditComponent,
    feat.UserListComponent, feat.UserDetailComponent, feat.UserCreateComponent, feat.UserEditComponent, feat.UserLoginComponent,
    feat.VehicleListComponent, feat.VehicleDetailComponent, feat.VehicleCreateComponent, feat.VehicleEditComponent,
    feat.AssetDetailComponent, feat.AssetEditComponent, feat.AssetCreateComponent
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
    feat.EquipmentService,
    feat.SystemService,
    {
      // provider for APP_INITIALIZER
      provide: APP_INITIALIZER,
      useFactory: startupServiceFactory,
      deps: [feat.SystemService],
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
