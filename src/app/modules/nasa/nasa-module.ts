import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NasaRoutingModule } from './nasa-routing-module';
import { Nasas } from './nasas';


@NgModule({
  declarations: [
    Nasas
  ],
  imports: [
    CommonModule,
    NasaRoutingModule
  ]
})
export class NasaModule { }
