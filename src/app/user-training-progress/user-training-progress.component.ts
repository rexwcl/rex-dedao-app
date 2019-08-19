import { Component, OnInit } from '@angular/core';
import { fromEvent } from 'rxjs';
import { map, filter, debounceTime, tap, switchAll } from 'rxjs/operators';

import { MentorService } from '@/_services';

@Component({
  selector: 'user-training-progress',
  templateUrl: './user-training-progress.component.html',
  styleUrls: []
})
export class UserTrainingProgressComponent implements OnInit {

  constructor() { }

  ngOnInit() {

  }

}
