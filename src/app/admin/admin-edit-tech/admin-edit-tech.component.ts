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
  techs = [];
  isActive: boolean = false;

  constructor() { }

  ngOnInit() {
    this.loadTechs();
  }

  tech:object = {
    name: 'Spring Boot',
    description: 'Spring Boot technique training',
    feeCharged: '$100'
  }

  private loadTechs() {
    this.techs.push(this.tech);
    this.techs.push(this.tech);
  }

  private edit() {
    this.isActive = true;
  }

  private submitEditInfo() {
    this.isActive = false;
  }

}
