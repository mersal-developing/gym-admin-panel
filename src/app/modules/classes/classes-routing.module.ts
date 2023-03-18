import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ClassListComponent } from './class-list/class-list.component';
import { ClassDetailsComponent } from './class-details/class-details.component';


const routes: Routes = [
  {
    path: '',
    component: ClassListComponent
  },
  {
    path: ':id',
    component: ClassDetailsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClassesRoutingModule { }
