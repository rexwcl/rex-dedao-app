import { Component, OnInit } from '@angular/core';
import { fromEvent } from 'rxjs';
import { map, filter, debounceTime, tap, switchAll } from 'rxjs/operators';

import { MentorService } from '@/_services';

@Component({
  selector: 'mentor-training-completed',
  templateUrl: './mentor-training-completed.component.html',
  styleUrls: []
})
export class MentorTrainingCompletedComponent implements OnInit {

  constructor() { }

  ngOnInit() {

  }

}
