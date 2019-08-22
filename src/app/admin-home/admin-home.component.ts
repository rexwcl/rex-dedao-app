import { Component, OnInit } from '@angular/core';

import { Admin } from '@/_models';
import { AuthenticationService } from '@/_services';

@Component({ templateUrl: 'admin-home.component.html' })
export class AdminHomeComponent implements OnInit {
    currentAdmin: Admin;

    constructor(
        private authenticationService: AuthenticationService,
    ) {
        this.currentAdmin = this.authenticationService.currentAdminValue;
    }

    ngOnInit() {
    }

   
}