import { Component, OnInit } from '@angular/core';
import { first } from 'rxjs/operators';

import { User } from '@/_models';
import { AuthenticationService } from '@/_services';

@Component({ templateUrl: 'user-home.component.html' })
export class UserHomeComponent implements OnInit {
    currentUser: User;

    constructor(
        private authenticationService: AuthenticationService,
    ) {
        this.currentUser = this.authenticationService.currentUserValue;
    }

    ngOnInit() {
    }
}