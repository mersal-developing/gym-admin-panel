import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Observable } from 'rxjs';
import { TableButtonAction, TableConsts } from 'src/app/shared';
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
      value: ''
    }
  ];
  displayedColumns: any[] = this.initColumns.map(col => col.name);

  classesList$!: Observable<Class[]>;


  constructor(private classService: ClassesService) {}

  ngOnInit(): void {
    this.classesList$ = this.classService.getClassesList$();
  }

  addClass() {

  }

  onTableAction(event: TableButtonAction) {
    switch(event.name) {
      case TableConsts.actionButton.delete :{
            this.classService.deleteClass(event.value?.id);
        break;

      }
      case TableConsts.actionButton.edit :{

        break;

      }
      case TableConsts.actionButton.view :{

        break;

      }
      case TableConsts.actionButton.add :{
        console.log('add')
        break;

      }
    }
  }
}
