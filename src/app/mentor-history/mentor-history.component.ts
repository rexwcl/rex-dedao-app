import { Component, OnInit } from '@angular/core';
import { fromEvent } from 'rxjs';
import { map, filter, debounceTime, tap, switchAll } from 'rxjs/operators';

import { MentorService } from '@/_services';

@Component({
  selector: 'mentor-history',
  templateUrl: './mentor-history.component.html',
  styleUrls: []
})

export class MentorHistoryComponent implements OnInit {
  items = []; 
  constructor() { }

  ngOnInit() {
    this.loadTrainings();
  }

  item:object = {
    trainingDelivered: "Spring Basic Training",
    rating: 5
  }

  private loadTrainings() {
    this.items.push(this.item);
    this.items.push(this.item);
  }

}
