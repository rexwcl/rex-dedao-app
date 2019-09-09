import { Component, OnInit } from '@angular/core';
import { fromEvent } from 'rxjs';
import { map, filter, debounceTime, tap, switchAll } from 'rxjs/operators';

import { TrainingService } from '@/_services';

@Component({
  selector: 'user-training-progress',
  templateUrl: './user-training-progress.component.html',
  styleUrls: []
})
export class UserTrainingProgressComponent implements OnInit {
  results= [];
  constructor(private trainingService: TrainingService) { }

  ngOnInit() {
    this.loadTrainingsInProgress();
  }

  private loadTrainingsInProgress() {
    let user = JSON.parse(localStorage.getItem('currentUser'));
    console.log(user.id);
    this.trainingService.getTrainingsInProgressOfUser(user.id)
    .subscribe(
      data => {
        console.log(data);
      }
    );
  }

}
