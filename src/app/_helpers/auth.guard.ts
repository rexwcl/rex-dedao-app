import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

import { AuthenticationService } from '@/_services';

@Injectable({ providedIn: 'root' })
export class AuthGuard implements CanActivate {
    constructor(
        private router: Router,
        private authenticationService: AuthenticationService
    ) {}

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        const currentUser = this.authenticationService.currentUserValue;
        const currentMentor = this.authenticationService.currentMentorValue;
        const currentAdmin = this.authenticationService.currentAdminValue;
        
        if (currentUser || currentMentor || currentAdmin) {
            // authorised so return true
            return true;
        } 
        
        if (!currentUser) {
             // not logged in so redirect to login page with the return url
            this.router.navigate(['/userLogin'], { queryParams: { returnUrl: state.url }});
            return false;
        }
       
        if (!currentMentor) {
            // not logged in so redirect to login page with the return url
           this.router.navigate(['/mentorLogin'], { queryParams: { returnUrl: state.url }});
           return false;
       }

       if (!currentAdmin) {
        // not logged in so redirect to login page with the return url
           this.router.navigate(['/adminLogin'], { queryParams: { returnUrl: state.url }});
           return false;
       }
        
    }
}