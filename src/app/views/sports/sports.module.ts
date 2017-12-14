import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {SportsRoutingModule} from "./sports-routing.module";
import {LeaguesComponent} from "./leagues/leagues.component";

@NgModule({
  imports: [
    SportsRoutingModule,
    CommonModule
  ],
  declarations: [
    LeaguesComponent
  ]
})
export class SportsModule { }
