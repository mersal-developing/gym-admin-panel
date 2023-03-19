import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { navigation } from 'src/app/core';
import { UtilitiesService } from 'src/app/core/services/utilities.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent {
  public navLinks = navigation;
  showSpinner$!: Observable<boolean>;

  constructor(private UtilitiesService: UtilitiesService) {}

  ngOnInit() {
    this.showSpinner$ = this.UtilitiesService.getLoading();
  }
}
