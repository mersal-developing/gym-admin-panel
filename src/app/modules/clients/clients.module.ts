import { NgModule } from '@angular/core';
import { ClientsRoutingModule } from './classes-routing.module';
import { ClientDetailsComponent } from './client-details/client-details.component';
import { ClientsListComponent } from './clients-list/clients-list.component';
import { SharedModule , MaterialModule} from 'src/app/shared';



@NgModule({
  declarations: [ClientDetailsComponent, ClientsListComponent],
  imports: [
    ClientsRoutingModule,
    SharedModule,
    MaterialModule
  ]
})
export class ClientsModule { }
