import { Component, OnInit } from '@angular/core';
import { fromEvent } from 'rxjs';
import { map, filter, debounceTime, tap, switchAll } from 'rxjs/operators';
import { Mentor, User } from '@/_models';
import { MentorService, UserService, AlertService } from '@/_services';
import { first } from 'rxjs/operators';

@Component({
  selector: 'admin-block',
  templateUrl: './admin-block.component.html',
  styleUrls: []
})

export class AdminBlockComponent implements OnInit {
  mentors = [];
  users = [];
  constructor( 
    private mentorService: MentorService, 
    private userService: UserService,
    private alertService: AlertService 
    ) {}

  ngOnInit() {
    this.loadAllMentors();
    this.loadAllUsers();
  }

  blockMentor(id: number) {
    this.mentorService.delete(id)
        .pipe(first())
        .subscribe(() => this.loadAllMentors());
  }

  private loadAllMentors() {
    this.mentorService.getAll()
        .subscribe(
          mentors => {
                this.mentors = mentors;
              }
        );
  }

  blockUser(id: number) {
    this.userService.delete(id)
        .pipe(first())
        .subscribe(() => this.loadAllUsers());
  }

  private loadAllUsers() {
    this.userService.getAll()
    .subscribe(
      users => {
          this.users = users;
        }
    );
  }

}
