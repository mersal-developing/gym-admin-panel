import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AppRoutes } from 'src/app/core';
import { UtilitiesService } from 'src/app/core/services/utilities.service';
import { TableButtonAction, TableConsts } from 'src/app/shared';
import { AddEditComponent } from 'src/app/shared/components/add-edit/add-edit.component';
import { Class } from '../classes.model';
import { ClassesService } from '../classes.service';

@Component({
  selector: 'app-class-list',
  templateUrl: './class-list.component.html',
  styleUrls: ['./class-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ClassListComponent {
  initColumns = [
    {
      name: 'Class name',
      value: 'title',
    },
    {
      name: 'Coach name',
      value: 'coach_name',
    },
    {
      name: 'Timing',
      value: 'timing',
    },
    {
      name: 'Price',
      value: 'price',
    },
    {
      name: 'action',
      value: '',
    },
  ];
  displayedColumns: any[] = this.initColumns.map((col) => col.name);

  classesList$!: Observable<Class[]>;

  formElements = [
    {
      name: 'coach_name',
      placeHolder: 'coach name',
    },
    {
      name: 'title',
      placeHolder: 'title',
    },
    {
      name: 'price',
      placeHolder: 'pricing',
    },
    {
      name: 'timing',
      placeHolder: 'Time',
    },
    {
      name: 'createdAt',
      placeHolder: 'createdAt',
    },
    {
      name: 'image',
      placeHolder: 'image',
    },
    {
      name: 'description',
      placeHolder: 'description',
    },
    {
      name: 'coach_brief',
      placeHolder: 'coach_brief',
    },
    {
      name: 'id',
      placeHolder: 'id',
    },
  ];

  constructor(
    private classService: ClassesService,
    private dialog: MatDialog,
    private router: Router,
    private utilitiesService: UtilitiesService
  ) {}

  ngOnInit(): void {
    this.classesList$ = this.classService.getClassesList$();
  }

  onTableAction(event: TableButtonAction) {
    switch (event.name) {
      case TableConsts.actionButton.delete: {
        this.classService.deleteClass(event.value?.id).subscribe(() => {
          this.classService.updateClassLists()
          this.utilitiesService.openSnackBar('Class deleted succeffully', 'close', 'error-alert')
        })
        break;
      }
      case TableConsts.actionButton.edit: {
        const dialogRef = this.dialog.open(AddEditComponent, {
          width: '300px',
          data: {
            title: 'Edit class',
            form: {
              coach_name: [event.value.coach_name, Validators.required],
              title: [event.value.title, Validators.required],
              price: [event.value.price, Validators.required],
              timing: [event.value.timing, Validators.required],
              createdAt: [event.value.createdAt, Validators.required],
              image: [event.value.image],
              description: [event.value.description],
              coach_brief: [event.value.coach_brief],
              id: [event.value.id, Validators.required],
            },
            formElements: [...this.formElements],
          },
        });

        dialogRef.afterClosed().subscribe((res) => {
          res &&
            this.classService
              .updateClass(res)
              .subscribe(() => {
                this.classService.updateClassLists()
                this.utilitiesService.openSnackBar('class edited succefully','close', 'success-snackbar')

              });
        });

        break;
      }
      case TableConsts.actionButton.view: {
        this.router.navigate([`${AppRoutes.ClassesPage}/${event.value.id}`]);
        break;
      }
      case TableConsts.actionButton.add: {
        const dialogRef = this.dialog.open(AddEditComponent, {
          width: '300px',
          data: {
            title: 'add new class',
            form: {
              coach_name: ['', Validators.required],
              title: ['', Validators.required],
              price: ['', Validators.required],
              timing: ['', Validators.required],
              createdAt: ['', Validators.required],
              image: [''],
              description: [''],
              coach_brief: [''],
              id: ['', Validators.required],
            },
            formElements: [...this.formElements],
          },
        });

        dialogRef.afterClosed().subscribe((res: any) => {
          res &&
            this.classService
              .addNewClass(res)
              .subscribe(() => {
                this.classService.updateClassLists()
                this.utilitiesService.openSnackBar('new class add succefully','close', 'success-snackbar')
              });
        });

        break;
      }
    }
  }
}
