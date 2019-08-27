import { Component, OnInit } from '@angular/core';
import { fromEvent } from 'rxjs';
import { map, filter, debounceTime, tap, switchAll } from 'rxjs/operators';

import { MentorService } from '@/_services';

@Component({
  selector: 'mentor-training-progress',
  templateUrl: './mentor-training-progress.component.html',
  styleUrls: []
})
export class MentorTrainingProgressComponent implements OnInit {

  constructor() { }

  ngOnInit() {

  }

}
