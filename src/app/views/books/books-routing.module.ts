import {NgModule} from "@angular/core";
import {Routes, RouterModule} from "@angular/router";
import {BooksComponent} from "./books.component";

const routes: Routes = [
  {
    path: '',
    component: BooksComponent,
    data: {
      title: 'Books'
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BooksRoutingModule {
}
