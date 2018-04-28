import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { CoreModule } from '@core/core.module';
import * as core from './core';

const approutes: Routes = [
  { path: '', redirectTo: '/', pathMatch: 'full' },
  // core
  { path: 'about', component: core.AboutComponent },
  { path: 'home', component: core.HomeComponent },
  // main
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