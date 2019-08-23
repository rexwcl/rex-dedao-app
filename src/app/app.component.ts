import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { AuthenticationService } from './_services';
import { User, Mentor, Admin } from './_models';

import './_content/app.less';

@Component({ selector: 'app', templateUrl: 'app.component.html' })
export class AppComponent {
    currentUser: User;
    currentMentor: Mentor;
    currentAdmin: Admin;

    constructor(
        private router: Router,
        private authenticationService: AuthenticationService
    ) {
        this.authenticationService.currentUser.subscribe(x => this.currentUser = x);
        this.authenticationService.currentMentor.subscribe(x => this.currentMentor = x);
        this.authenticationService.currentAdmin.subscribe(x => this.currentAdmin = x);
    }

    logout() {
        if (this.currentUser) {
            this.authenticationService.userLogout();
            this.router.navigate(['/userLogin']);
        } else if (this.currentMentor) {
            this.authenticationService.mentorLogout();
            this.router.navigate(['/mentorLogin']);
        } else if (this.currentAdmin) {
            this.authenticationService.adminLogout();
            this.router.navigate(['/adminLogin']);
        }
       
    }
}