import { Component, OnInit } from '@angular/core';
import { first } from 'rxjs/operators';

import { Mentor } from '@/_models';
import { MentorService, AuthenticationService } from '@/_services';

@Component({ templateUrl: 'mentor-home.component.html' })
export class MentorHomeComponent implements OnInit {
    currentMentor: Mentor;
    mentors = [];

    constructor(
        private authenticationService: AuthenticationService,
        private mentorService: MentorService
    ) {
        this.currentMentor = this.authenticationService.currentMentorValue;
    }

    ngOnInit() {
        this.loadAllMentors();
    }

    deleteMentor(id: number) {
        this.mentorService.delete(id)
            .pipe(first())
            .subscribe(() => this.loadAllMentors());
    }

    private loadAllMentors() {
        this.mentorService.getAll()
            .pipe(first())
            .subscribe(mentors => this.mentors = mentors);
    }
}