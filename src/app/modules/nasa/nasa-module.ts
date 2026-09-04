import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NasaRoutingModule } from './nasa-routing-module';
import { NasaComponent } from './nasa.component';
import { ListNasa } from './pages/list-nasa/list-nasa';
import { TableNasa } from './components/table-nasa/table-nasa';
import { ListNasaComponent } from './pages/list-nasa.component/list-nasa.component';
import { TableNasaComponent } from './components/table-nasa.component/table-nasa.component';


@NgModule({
  declarations: [
    NasaComponent,
    ListNasa,
    TableNasa,
    ListNasaComponent,
    TableNasaComponent
  ],
  imports: [
    CommonModule,
    NasaRoutingModule
  ]
})
export class NasaModule { }