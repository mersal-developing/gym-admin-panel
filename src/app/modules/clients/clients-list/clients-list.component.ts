import { Component } from '@angular/core';
import { Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AppRoutes } from 'src/app/core';
import { UtilitiesService } from 'src/app/core/services/utilities.service';
import { TableButtonAction, TableConsts } from 'src/app/shared';
import { AddEditComponent } from 'src/app/shared/components/add-edit/add-edit.component';
import { Client } from '../client.interface';
import { ClientsService } from '../clients.service';

@Component({
  selector: 'app-clients-list',
  templateUrl: './clients-list.component.html',
  styleUrls: ['./clients-list.component.scss'],
})
export class ClientsListComponent {
  initColumns = [
    {
      name: 'name',
      value: 'full_name',
    },
    {
      name: 'Mobile No',
      value: 'mobile_number',
    },
    {
      name: 'address',
      value: 'address',
    },
    {
      name: 'suscription type',
      value: 'subscription_plan',
    },
    {
      name: 'action',
      value: '',
    },
  ];
  displayedColumns: any[] = this.initColumns.map((col) => col.name);

  clientsList$!: Observable<Client[]>;

  formElements = [
    {
      name: 'createdAt',
      placeHolder: 'created at',
    },
    {
      name: 'full_name',
      placeHolder: 'full name',
    },
    {
      name: 'address',
      placeHolder: 'address',
    },
    {
      name: 'avatar',
      placeHolder: 'image',
    },
    {
      name: 'subscription_plan',
      placeHolder: 'subscription plan',
    },
    {
      name: 'mobile_number',
      placeHolder: 'mobile number',
    },
    {
      name: 'id',
      placeHolder: 'id',
    },
  ];

  constructor(
    private clientsService: ClientsService,
    private dialog: MatDialog,
    private router: Router,
    private utilitiesService: UtilitiesService
  ) {}

  ngOnInit() {
    this.clientsList$ = this.clientsService.getClientsList$();
  }onTableAction(event: TableButtonAction) {
    switch (event.name) {
      case TableConsts.actionButton.delete: {
        this.clientsService.deleteClient(event.value?.id).subscribe(() => {
          this.clientsService.updateClientsLists();
          this.utilitiesService.openSnackBar('client deleted succeffully', 'close', 'error-alert')

        })
        break;
      }
      case TableConsts.actionButton.edit: {
        const dialogRef = this.dialog.open(AddEditComponent, {
          width: '300px',
          data: {
            title: 'Edit client',
            form: {
              full_name: [event.value.full_name, Validators.required],
              address: [event.value.address, Validators.required],
              avatar: [event.value.avatar],
              createdAt: [event.value.createdAt, Validators.required],
              subscription_plan: [event.value.subscription_plan, Validators.required],
              mobile_number: [event.value.mobile_number],
              id: [event.value.id, Validators.required],
            },
            formElements: [...this.formElements],
          },
        });

        dialogRef.afterClosed().subscribe((res) => {
          res &&
            this.clientsService
              .updateClient(res)
              .subscribe(() => {
                this.clientsService.updateClientsLists()
                this.utilitiesService.openSnackBar('client info edited succefully','close', 'success-snackbar')

              });
        });

        break;
      }
      case TableConsts.actionButton.view: {
        this.router.navigate([`${AppRoutes.ClientsPage}/${event.value.id}`]);
        break;
      }
      case TableConsts.actionButton.add: {
        const dialogRef = this.dialog.open(AddEditComponent, {
          width: '300px',
          data: {
            title: 'add new client',
            form: {
              full_name: ['', Validators.required],
              address: ['', Validators.required],
              avatar: [''],
              createdAt: ['', Validators.required],
              subscription_plan: ['', Validators.required],
              mobile_number: [''],
              id: ['', Validators.required],
            },
            formElements: [...this.formElements],
          },
        });

        dialogRef.afterClosed().subscribe((res: any) => {
          res &&
            this.clientsService
              .addNewClient(res)
              .subscribe(() => {
                this.clientsService.updateClientsLists()
                this.utilitiesService.openSnackBar('new user added succefully','close', 'success-snackbar')

              });
        });

        break;
      }
    }
  }


}
