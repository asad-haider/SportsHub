import {NgModule} from "@angular/core";
import {Routes, RouterModule} from "@angular/router";
// Import Containers
import {FullLayoutComponent} from "./containers";
import {BooksComponent} from "./views/books/books.component";

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full',
  },
  {
    path: '',
    component: FullLayoutComponent,
    data: {
      title: 'Home'
    },
    children: [
      {
        path: 'dashboard',
        loadChildren: './views/dashboard/dashboard.module#DashboardModule'
      },
      {
        path: 'books',
        component: BooksComponent,
        data: {
          title: 'Books'
        }
      },
      {
        path: 'sports',
        loadChildren: './views/sports/sports.module#SportsModule'
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
