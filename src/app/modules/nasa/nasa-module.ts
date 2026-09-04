import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NasaRoutingModule } from './nasa-routing-module';
import { NasaComponent } from './nasa.component';


@NgModule({
  declarations: [
    NasaComponent,
  ],
  imports: [
    CommonModule,
    NasaRoutingModule
  ]
})
export class NasaModule { }