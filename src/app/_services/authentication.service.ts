import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { User, Mentor } from '@/_models';

@Injectable({ providedIn: 'root' })
export class AuthenticationService {
    private currentUserSubject: BehaviorSubject<User>;
    public currentUser: Observable<User>;

    private currentMentorSubject: BehaviorSubject<Mentor>;
    public currentMentor: Observable<Mentor>;

    constructor(private http: HttpClient) {
        this.currentUserSubject = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('currentUser')));
        this.currentUser = this.currentUserSubject.asObservable();

        this.currentMentorSubject = new BehaviorSubject<Mentor>(JSON.parse(localStorage.getItem('currentMentor')));
        this.currentMentor = this.currentMentorSubject.asObservable();
    }

    public get currentUserValue(): User {
        return this.currentUserSubject.value;
    }

    public get currentMentorValue(): Mentor {
        return this.currentMentorSubject.value;
    }

    userLogin(username, password) {
        return this.http.post<any>(`${config.apiUrl}/users/authenticate`, { username, password })
            .pipe(map(user => {
                // store user details and jwt token in local storage to keep user logged in between page refreshes
                localStorage.setItem('currentUser', JSON.stringify(user));
                this.currentUserSubject.next(user);
                return user;
            }));
    }

    mentorLogin(username, password) {
        return this.http.post<any>(`${config.apiUrl}/mentors/authenticate`, { username, password })
            .pipe(map(mentor => {
                // store user details and jwt token in local storage to keep user logged in between page refreshes
                localStorage.setItem('currentMentor', JSON.stringify(mentor));
                this.currentMentorSubject.next(mentor);
                return mentor;
            }));
    }

    userLogout() {
        // remove user from local storage and set current user to null
        localStorage.removeItem('currentUser');
        this.currentUserSubject.next(null);
    }

    mentorLogout() {
        // remove user from local storage and set current user to null
        localStorage.removeItem('currentMentor');
        this.currentMentorSubject.next(null);
    }
}