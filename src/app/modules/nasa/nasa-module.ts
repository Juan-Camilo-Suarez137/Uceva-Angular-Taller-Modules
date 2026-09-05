import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NasaRoutingModule } from './nasa-routing-module';
import { NasaComponent } from './nasa.component';
import { TableNasaComponent } from './components/table-nasa/table-nasa.component';
import { ListNasaComponent } from './pages/list-nasa/list-nasa.component';
import { SharedModule } from '../shared/shared-module';


@NgModule({
  declarations: [
    NasaComponent,
    ListNasaComponent,
    TableNasaComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    NasaRoutingModule
  ]
})
export class NasaModule { }