import { Component, OnInit, Input } from '@angular/core';
import { fromEvent } from 'rxjs';
import { map, filter, debounceTime, tap, switchAll } from 'rxjs/operators';

import { MentorService } from '@/_services';
import { SearchResult } from '@/_models';

@Component({
  selector: 'training-search',
  templateUrl: './training-search.component.html',
  styleUrls: []
})

export class TrainingSearchComponent implements OnInit {
  @Input() searchResult: SearchResult;

  results = []; 

  constructor(
  ) {}

  ngOnInit() {
    this.loadTrainings();
  }

  result:object = {
    id: 1,
    trainingDescription: 'niu',
    trainerName: 'Daniel', 
    avgRating: 5,
    feeCharged: 100,
    numOfTrainingsCompleted: 100,
    trainingUrl: 'http://training1'
  };

  private loadTrainings() {
    this.results.push(this.result);
    this.results.push(this.result);
  }
 
  private proposeTraining() {
     console.log('hello');
  }
}
