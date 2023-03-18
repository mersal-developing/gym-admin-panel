import { Component } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { navigation } from 'src/app/core';
import { SpinnerService } from 'src/app/core/services/spinner.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent {
  public navLinks = navigation;
  showSpinner$!: Observable<boolean>;

  constructor(private spinnerService: SpinnerService) {}

  ngOnInit() {
    this.showSpinner$ = this.spinnerService.getLoading();
  }
}
