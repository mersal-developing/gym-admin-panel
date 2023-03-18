import { Component } from '@angular/core';
import { navigation } from 'src/app/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent {
  public navLinks = navigation;

  constructor() {}
}
