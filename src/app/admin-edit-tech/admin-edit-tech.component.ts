import { Component, OnInit } from '@angular/core';
import { fromEvent } from 'rxjs';
import { map, filter, debounceTime, tap, switchAll } from 'rxjs/operators';

import { MentorService } from '@/_services';

@Component({
  selector: 'admin-edit-tech',
  templateUrl: './admin-edit-tech.component.html',
  styleUrls: []
})
export class AdminEditTechComponent implements OnInit {

  constructor() { }

  ngOnInit() {

  }

}
