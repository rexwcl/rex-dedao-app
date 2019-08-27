import { Component, OnInit } from '@angular/core';

import { Mentor } from '@/_models';
import { AuthenticationService } from '@/_services';

@Component({ templateUrl: 'mentor-home.component.html' })
export class MentorHomeComponent implements OnInit {
    currentMentor: Mentor;

    constructor(
        private authenticationService: AuthenticationService,
    ) {
        this.currentMentor = this.authenticationService.currentMentorValue;
    }

    ngOnInit() {
    }

   
}