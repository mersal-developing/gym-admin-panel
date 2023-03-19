import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Observable } from 'rxjs';
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

  constructor(
    private classService: ClassesService,
    private dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.classesList$ = this.classService.getClassesList$();
  }

  addClass() {}

  onTableAction(event: TableButtonAction) {
    switch (event.name) {
      case TableConsts.actionButton.delete: {
        this.classService.deleteClass(event.value?.id);
        break;
      }
      case TableConsts.actionButton.edit: {
        break;
      }
      case TableConsts.actionButton.view: {
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
            formElements: [
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
            ],
          },
        });

        dialogRef
          .afterClosed()
          .subscribe((res: any) =>
            this.classService
              .addNewClass(res)
              .subscribe(() => this.classService.updateClassLists())
          );

        break;
      }
    }
  }
}
