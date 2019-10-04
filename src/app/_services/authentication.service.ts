import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject, Observable, throwError } from 'rxjs';
import { map } from 'rxjs/operators';

import { User, Mentor, Admin } from '@/_models';

const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({ providedIn: 'root' })
export class AuthenticationService {
    private currentUserSubject: BehaviorSubject<User>;
    public currentUser: Observable<User>;

    private currentMentorSubject: BehaviorSubject<Mentor>;
    public currentMentor: Observable<Mentor>;
	
	private currentAdminSubject: BehaviorSubject<Admin>;
    public currentAdmin: Observable<Admin>;

    constructor(private http: HttpClient) {
        this.currentUserSubject = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('currentUser')));
        this.currentUser = this.currentUserSubject.asObservable();

        this.currentMentorSubject = new BehaviorSubject<Mentor>(JSON.parse(localStorage.getItem('currentMentor')));
        this.currentMentor = this.currentMentorSubject.asObservable();
		
		this.currentAdminSubject = new BehaviorSubject<Admin>(JSON.parse(localStorage.getItem('currentAdmin')));
        this.currentAdmin = this.currentAdminSubject.asObservable();
    }

    private userUrl = 'http://localhost:8081/user-portal/users';
    private mentorUrl = 'http://localhost:8082/mentor-portal/mentors';
    private adminUrl = 'http://localhost:8084/admin-portal/admin/';

    public get currentUserValue(): User {
        return this.currentUserSubject.value;
    }

    public get currentMentorValue(): Mentor {
        return this.currentMentorSubject.value;
    }
	
	public get currentAdminValue(): Admin {
        return this.currentAdminSubject.value;
    }

    userLogin(username, password) {
        return this.http.post<any>(`${this.userUrl}/authenticate`, { username, password })
            .pipe(map(user => {
                if (user == null) {
                    return throwError({ error: { message: 'Username or password is incorrect' } });
                } else {
                     // store user details and jwt token in local storage to keep user logged in between page 
                    localStorage.setItem('currentUser', JSON.stringify(user));
                    this.currentUserSubject.next(user);
                    return user;
                }
            }));
    }

    mentorLogin(username, password) {
        // return this.http.post<any>(`${config.apiUrl}/mentors/authenticate`, { username, password })
        //     .pipe(map(mentor => {
        //         // store user details and jwt token in local storage to keep user logged in between page refreshes
        //         localStorage.setItem('currentMentor', JSON.stringify(mentor));
        //         this.currentMentorSubject.next(mentor);
        //         return mentor;
        //     }));
        return this.http.post<any>(`${this.mentorUrl}/authenticate`, { username, password })
            .pipe(map(mentor => {
                if (mentor == null) {
                    return throwError({ error: { message: 'Username or password is incorrect' } });
                } else {
                     // store user details and jwt token in local storage to keep user logged in between page 
                    localStorage.setItem('currentMentor', JSON.stringify(mentor));
                    this.currentMentorSubject.next(mentor);
                    return mentor;
                }
            }));
    }
	
	adminLogin(username, password) {
        // return this.http.post<any>(`${config.apiUrl}/admin/authenticate`, { username, password })
        //     .pipe(map(admin => {
        //         // store user details and jwt token in local storage to keep user logged in between page refreshes
        //         localStorage.setItem('currentAdmin', JSON.stringify(admin));
        //         this.currentAdminSubject.next(admin);
        //         return admin;
        //     }));
        return this.http.post<any>(`${this.adminUrl}/authenticate`, { username, password })
        .pipe(map(admin => {
            if (admin == null) {
                return throwError({ error: { message: 'Username or password is incorrect' } });
            } else {
                // store user details and jwt token in local storage to keep user logged in between page refreshes
                localStorage.setItem('currentAdmin', JSON.stringify(admin));
                this.currentAdminSubject.next(admin);
                return admin;
            }
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
	
	adminLogout() {
        // remove user from local storage and set current user to null
        localStorage.removeItem('currentAdmin');
        this.currentAdminSubject.next(null);
    }
}