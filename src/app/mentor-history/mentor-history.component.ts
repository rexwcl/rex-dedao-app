import { Component, OnInit } from '@angular/core';
import { fromEvent } from 'rxjs';
import { map, filter, debounceTime, tap, switchAll } from 'rxjs/operators';

import { MentorService } from '@/_services';

@Component({
  selector: 'mentor-profile',
  templateUrl: './mentor-profile.component.html',
  styleUrls: []
})

export class MentorHistoryComponent implements OnInit {
  items = []; 
  constructor() { }

  ngOnInit() {
    this.loadTrainings();
  }

  item:object = {
    trainingsDelivered: 50,
    rating: 5
  }

  private loadTrainings() {
    this.items.push(this.item);
    this.items.push(this.item);
  }

}
