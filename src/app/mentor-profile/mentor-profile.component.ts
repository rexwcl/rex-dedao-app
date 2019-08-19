import { Component, OnInit } from '@angular/core';
import { fromEvent } from 'rxjs';
import { map, filter, debounceTime, tap, switchAll } from 'rxjs/operators';

import { MentorService } from '@/_services';

@Component({
  selector: 'mentor-profile',
  templateUrl: './mentor-profile.component.html',
  styleUrls: []
})
export class MentorProfileComponent implements OnInit {

  constructor() { }

  ngOnInit() {

  }

}
