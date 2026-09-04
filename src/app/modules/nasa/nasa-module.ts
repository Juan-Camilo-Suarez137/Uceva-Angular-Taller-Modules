import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NasaRoutingModule } from './nasa-routing-module';
import { Nasas } from './nasas';
import { NasaComponent } from './nasa.component';


@NgModule({
  declarations: [
    Nasas,
    NasaComponent
  ],
  imports: [
    CommonModule,
    NasaRoutingModule
  ]
})
export class NasaModule { }
