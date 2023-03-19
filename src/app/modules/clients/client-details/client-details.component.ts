import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { UtilitiesService } from 'src/app/core/services/utilities.service';
import { ClientsService } from '../clients.service';

@Component({
  selector: 'app-client-details',
  templateUrl: './client-details.component.html',
  styleUrls: ['./client-details.component.scss']
})
export class ClientDetailsComponent {
  image!: string;
  fullName!: string;
  mobileNumber!: string;
  address!: string;
  subscriptionType!: string;

  dataLoading!: Observable<boolean>;

  clientID!: string;

  constructor(private route: ActivatedRoute, private utilitiesService: UtilitiesService, private clientsService: ClientsService) {
    this.route.params.subscribe(params => {
      const id = params['id'];
      this.clientID = id;
    });
  }


  ngOnInit() {
    this.dataLoading = this.utilitiesService.getLoading();

    this.clientsService.getClientDetails(this.clientID).subscribe(details => {
      this.image = details.avatar;
      this.fullName = details.full_name;
      this.mobileNumber = details.mobile_number;
      this.address = details.address;
      this.subscriptionType = details.subscription_plan;

    })
  }
}
