import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { CoreModule } from './core/core.module';
import * as core from './core';

import { AppComponent } from './app.component';


@NgModule({
  declarations: [
    AppComponent,
    core.AboutComponent, core.FootingComponent, core.HeadingComponent, core.HomeComponent, 
    core.MenuComponent, core.MenuItemComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule,
    AppRoutingModule,
    CoreModule
  ],
  exports: [
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
