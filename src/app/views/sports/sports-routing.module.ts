import {NgModule} from "@angular/core";
import {Routes, RouterModule} from "@angular/router";
import {LeaguesComponent} from "./leagues/leagues.component";

const routes: Routes = [
  {
    path: '',
    data: {
      title: 'Sports'
    },
    children: [
      {
        path: 'soccer',
        component: LeaguesComponent,
        data: {
          title: 'Soccer'
        }
      },
      {
        path: 'motorsport',
        component: LeaguesComponent,
        data: {
          title: 'Motorsport'
        }
      },
      {
        path: 'iceHockey',
        component: LeaguesComponent,
        data: {
          title: 'Ice Hockey'
        }
      },
      {
        path: 'basketball',
        component: LeaguesComponent,
        data: {
          title: 'Basketball'
        }
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SportsRoutingModule {
}
