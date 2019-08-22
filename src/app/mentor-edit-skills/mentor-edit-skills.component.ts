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
  isActive: boolean = false;

  constructor() { }

  ngOnInit() {
    this.loadSkills();
  }

  skill:object = {
    name: 'Spring Boot',
    description: 'Spring Boot technique training',
    feeCharged: '$100'
  }

  private loadSkills() {
    this.skills.push(this.skill);
    this.skills.push(this.skill);
  }

  private edit() {
    this.isActive = true;
  }

  private submitEditInfo() {
    this.isActive = false;
  }

}
