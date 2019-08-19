import { Component, OnInit } from '@angular/core';
import { fromEvent } from 'rxjs';
import { map, filter, debounceTime, tap, switchAll } from 'rxjs/operators';

import { MentorService } from '@/_services';

@Component({
  selector: 'training-search',
  templateUrl: './training-search.component.html',
  styleUrls: []
})
export class TrainingSearchComponent implements OnInit {

  constructor() { }

  ngOnInit() {

  }

}
