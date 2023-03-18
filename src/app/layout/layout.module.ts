import { NgModule } from '@angular/core';
import { NavbarComponent } from './navbar/navbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { SharedModule } from '../shared';
import { MaterialModule } from '../shared';
import { AppRoutingModule } from '../app-routing.module';

@NgModule({
  declarations: [NavbarComponent, SidebarComponent],
  imports: [SharedModule, MaterialModule, AppRoutingModule],
  exports: [NavbarComponent, SidebarComponent],
})
export class LayoutModule {}
