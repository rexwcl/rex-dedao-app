import { Component, OnInit } from '@angular/core';
import { fromEvent } from 'rxjs';
import { map, filter, debounceTime, tap, switchAll } from 'rxjs/operators';

import { MentorService } from '@/_services';

@Component({
  selector: 'mentor-payments',
  templateUrl: './mentor-payments.component.html',
  styleUrls: []
})
export class MentorPaymentsComponent implements OnInit {

  constructor() { }

  ngOnInit() {

  }

}
