import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { CoreModule } from './core/core.module';
import * as core from './core';
import { FeatureModule } from './feature/feature.module';
import * as feat from './feature';

import { AppComponent } from './app.component';


@NgModule({
  declarations: [
    AppComponent,
    core.AboutComponent, core.HomeComponent, 
    core.FootingComponent, core.HeadingComponent, 
    core.MenuComponent, core.MenuItemComponent,
    feat.UserListComponent, feat.UserDetailComponent, feat.UserCreateComponent, feat.UserEditComponent
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
    feat.UserService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
