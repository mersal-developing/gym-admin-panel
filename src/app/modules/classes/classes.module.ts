import { NgModule } from '@angular/core';

import { ClassListComponent } from './class-list/class-list.component';
import { ClassDetailsComponent } from './class-details/class-details.component';
import { ClassesRoutingModule } from './classes-routing.module';
import { MaterialModule, SharedModule } from 'src/app/shared';



@NgModule({
  declarations: [ClassListComponent,ClassDetailsComponent],
  imports: [
    SharedModule,
    ClassesRoutingModule,
    MaterialModule
  ],
  exports: [ClassListComponent,ClassDetailsComponent]
})
export class ClassesModule { }
