import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { UtilitiesService } from 'src/app/core/services/utilities.service';
import { ClassesService } from '../classes.service';

@Component({
  selector: 'app-class-details',
  templateUrl: './class-details.component.html',
  styleUrls: ['./class-details.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,

})
export class ClassDetailsComponent {
  title!: string;
  price!: number;
  classDescription!: string;
  coachName!: string;
  coachBrief!: string;
  time!: string;

  classID!: string;
  dataLoading!: Observable<boolean>;

  constructor(private route: ActivatedRoute, private classesService: ClassesService, private utilitiesService: UtilitiesService){
    this.route.params.subscribe(params => {
      const id = params['id'];
      this.classID = id;
    });
  }


  ngOnInit() {
    this.dataLoading = this.utilitiesService.getLoading();

    this.classesService.getClassDetails(this.classID).subscribe(details => {
      this.title = details.title;
      this.price = details.price;
      this.classDescription = details.description;
      this.coachName = details.coach_name;
      this.coachBrief = details.coach_brief;
      this.time = details.timing;

    })
  }
}
