import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup } from '@angular/forms';

import { AlertService, AuthenticationService } from '@/_services';

@Component({ templateUrl: 'search.component.html' })
export class SearchComponent implements OnInit {
    searchForm: FormGroup;
    loading = false;
    submitted = false;

    constructor(
        private router: Router,
        private authenticationService: AuthenticationService,
        private alertService: AlertService
    ) {
        // redirect to home if already logged in
        // if (this.authenticationService.currentUserValue) {
        //     this.router.navigate(['/']);
        // }
    }

    ngOnInit() {

    }


    onSubmit() {
        this.submitted = true;

        // reset alerts on submit
        this.alertService.clear();

        // stop here if form is invalid
        if (this.searchForm.invalid) {
            return;
        }

    }
}
