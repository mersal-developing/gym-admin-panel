import { ChangeDetectionStrategy, Component } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Class } from '../classes.model';
import { ClassesService } from '../classes.service';

@Component({
  selector: 'app-class-list',
  templateUrl: './class-list.component.html',
  styleUrls: ['./class-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ClassListComponent {

}
