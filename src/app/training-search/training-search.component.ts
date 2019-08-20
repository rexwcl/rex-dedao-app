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
    trainerName: 'Vincent',
    avgRating: 5,
    numOfTrainingsCompleted: 10,
    feeCharged: '$100',
    trainingUrl: '/mentorLogin'   
  }

  private loadTrainings() {
    this.results.push(this.result);
    this.results.push(this.result);
  }
 
}
