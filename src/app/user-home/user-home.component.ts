import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup} from '@angular/forms';
import { first } from 'rxjs/operators';

import { User } from '@/_models';
import { AuthenticationService } from '@/_services';

@Component({ templateUrl: 'user-home.component.html' })
export class UserHomeComponent implements OnInit {
    currentUser: User;
    searchForm: FormGroup;
    submitted = false;
    loading = false;

    constructor(
        private authenticationService: AuthenticationService,
    ) {
        this.currentUser = this.authenticationService.currentUserValue;
    }

    ngOnInit() {
    }

    onSubmit() {
        this.submitted = true;

        this.loading = true;
        // this.authenticationService.mentorLogin(this.f.username.value, this.f.password.value)
        //     .pipe(first())
        //     .subscribe(
        //         data => {
        //             console.log("here to navigate");
        //             this.router.navigate([this.returnUrl]);
        //         },
        //         error => {
        //             this.alertService.error(error);
        //             this.loading = false;
        //         });
    }
}