import { Component, OnInit } from '@angular/core';
import { fromEvent } from 'rxjs';
import { map, filter, debounceTime, tap, switchAll } from 'rxjs/operators';

import { MentorService } from '@/_services';

@Component({
  selector: 'admin-block',
  templateUrl: './admin-block.component.html',
  styleUrls: []
})
export class AdminBlockComponent implements OnInit {

  constructor() { }

  ngOnInit() {

  }

}
