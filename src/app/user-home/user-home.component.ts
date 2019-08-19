import { Component, OnInit } from '@angular/core';
import { first } from 'rxjs/operators';

import { User, Mentor } from '@/_models';
import { UserService, AuthenticationService, MentorService } from '@/_services';

@Component({ templateUrl: 'user-home.component.html' })
export class UserHomeComponent implements OnInit {
    currentUser: User;
    users = [];

    constructor(
        private authenticationService: AuthenticationService,
        private userService: UserService
    ) {
        this.currentUser = this.authenticationService.currentUserValue;
    }

    ngOnInit() {
        this.loadAllUsers();
    }

    deleteUser(id: number) {
        this.userService.delete(id)
            .pipe(first())
            .subscribe(() => this.loadAllUsers());
    }

    private loadAllUsers() {
        this.userService.getAll()
            .pipe(first())
            .subscribe(users => this.users = users);
    }
}