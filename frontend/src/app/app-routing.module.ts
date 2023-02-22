import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ListComponent} from './pages/list/list.component';
import { NewEditComponent } from './pages/new-edit/new-edit.component';

const routes: Routes = [
  {path:"", component: ListComponent},
  {path:"new", component: NewEditComponent},
  {path:"edit/:id", component: NewEditComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
