import { Component, OnInit, Input } from '@angular/core';
import { fromEvent } from 'rxjs';
import { map, filter, debounceTime, tap, switchAll } from 'rxjs/operators';

import { MentorService } from '@/_services';


@Component({
  selector: 'mentor-notification',
  templateUrl: './mentor-notification.component.html',
  styleUrls: []
})

export class MentorNotificationComponent implements OnInit {

  notifications = []; 

  constructor(
  ) {}

  ngOnInit() {
    this.loadNotifications();
  }

  notification:object = {
    trainerName: 'Vincent',
    avgRating: 5,
    numOfTrainingsCompleted: 10,
    feeCharged: '$100' 
  }

  private loadNotifications() {
    this.notifications.push(this.notification);
    this.notifications.push(this.notification);
  }
 
}
