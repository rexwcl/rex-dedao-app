import { Component, OnInit } from '@angular/core';
import { fromEvent } from 'rxjs';
import { map, filter, debounceTime, tap, switchAll } from 'rxjs/operators';

import { MentorService } from '@/_services';

@Component({
  selector: 'mentor-edit-skills',
  templateUrl: './mentor-edit-skills.component.html',
  styleUrls: []
})
export class MentorEditSkillsComponent implements OnInit {
  skills = []; 

  constructor() { }

  ngOnInit() {
    this.loadSkills();
  }

  skill:object = {
    trainerName: 'Vincent',
    avgRating: 5,
    numOfTrainingsCompleted: 10,
    feeCharged: '$100',
    trainingUrl: '/mentorLogin'   
  }

  private loadSkills() {
    this.skills.push(this.skill);
    this.skills.push(this.skill);
  }

}
