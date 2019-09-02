import { Injectable } from '@angular/core';
import { HttpRequest, HttpResponse, HttpHandler, HttpEvent, HttpInterceptor, HTTP_INTERCEPTORS } from '@angular/common/http';
import { Observable, of, throwError } from 'rxjs';
import { delay, mergeMap, materialize, dematerialize } from 'rxjs/operators';
import { Admin } from '@/_models';


// array in local storage for registered users
let users = JSON.parse(localStorage.getItem('users')) || [];
let mentors = JSON.parse(localStorage.getItem('mentors')) || [];


@Injectable()
export class FakeBackendInterceptor implements HttpInterceptor {
    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        const { url, method, headers, body } = request;

        // wrap in delayed observable to simulate server api call
        return of(null)
            .pipe(mergeMap(handleRoute))
            .pipe(materialize()) // call materialize and dematerialize to ensure delay even if an error is thrown (https://github.com/Reactive-Extensions/RxJS/issues/648)
            .pipe(delay(500))
            .pipe(dematerialize());

        function handleRoute() {
            switch (true) {
                case url.endsWith('/users/authenticate') && method === 'POST':
                    return authenticateUser();
                case url.endsWith('/users/register') && method === 'POST':
                    return registerUser();
                case url.endsWith('/users') && method === 'GET':
                    return getUsers();
                case url.match(/\/users\/\d+$/) && method === 'DELETE':
                    return deleteUser();
                case url.endsWith('/mentors/authenticate') && method === 'POST':
                    return authenticateMentor();
                case url.endsWith('/mentors/register') && method === 'POST':
                        return registerMentor();
                case url.endsWith('/mentors') && method === 'GET':
                        return getMentors();
                case url.match(/\/mentors\/\d+$/) && method === 'DELETE':
                        return deleteMentor();   
                case url.endsWith('/admin/authenticate') && method === 'POST':
                        return authenticateAdmin(); 
                default:
                    // pass through any requests not handled above
                    return next.handle(request);
            }    
        }

        // route functions

        function authenticateUser() {
            const { username, password } = body;
            const user = users.find(x => x.username === username && x.password === password);
            if (!user) return error('Username or password is incorrect');
            return ok({
                id: user.id,
                username: user.username,
                firstName: user.firstName,
                lastName: user.lastName,
                token: 'fake-jwt-token'
            })
        }

        function authenticateMentor() {
            const { username, password } = body;
            const mentor = mentors.find(x => x.username === username && x.password === password);
            if (!mentor) return error('Username or password is incorrect');
            return ok({
                id: mentor.id,
                username: mentor.username,
                firstName: mentor.firstName,
                lastName: mentor.lastName,
                token: 'fake-jwt-token'
            })
        }

        function authenticateAdmin() {
            const { username, password } = body;
            if (!('admin' === username && 'admin' === password))
               return error('Username or password is incorrect');
            
            return ok({
                username: 'admin',
                token: 'fake-jwt-token'
            });
        }

        function registerUser() {
            const user = body

            if (users.find(x => x.username === user.username)) {
                return error('Username "' + user.username + '" is already taken')
            }

            user.id = users.length ? Math.max(...users.map(x => x.id)) + 1 : 1;
            users.push(user);
            localStorage.setItem('users', JSON.stringify(users));

            return ok();
        }

        function registerMentor() {
            const mentor = body

            if (mentors.find(x => x.username === mentor.username)) {
                return error('Username "' + mentor.username + '" is already taken')
            }

            mentor.id = mentors.length ? Math.max(...mentors.map(x => x.id)) + 1 : 1;
            mentors.push(mentor);
            localStorage.setItem('mentors', JSON.stringify(mentors));

            return ok();
        }

        function getUsers() {
            if (!isLoggedIn()) {
                console.log('getUsers');
            }
            return ok(users);
        }

        function getMentors() {
            if (!isLoggedIn()){
                // return unauthorized();
                console.log("getMentors");
            }
            return ok(mentors);
        }

        function deleteUser() {
            if (!isLoggedIn())  {
                console.log('deleteUser');
            }

            users = users.filter(x => x.id !== idFromUrl());
            localStorage.setItem('users', JSON.stringify(users));
            return ok();
        }

        function deleteMentor() {
            if (!isLoggedIn()) {
                console.log('deleteMentor');
            }

            mentors = mentors.filter(x => x.id !== idFromUrl());
            localStorage.setItem('mentors', JSON.stringify(mentors));
            return ok();
        }

        // helper functions

        function ok(body?) {
            return of(new HttpResponse({ status: 200, body }))
        }

        function error(message) {
            return throwError({ error: { message } });
        }

        function unauthorized() {
            return throwError({ status: 401, error: { message: 'Unauthorised' } });
        }

        function isLoggedIn() {
            return headers.get('Authorization') === 'Bearer fake-jwt-token';
        }

        function idFromUrl() {
            const urlParts = url.split('/');
            return parseInt(urlParts[urlParts.length - 1]);
        }
    }
}

export const fakeBackendProvider = {
    // use fake backend in place of Http service for backend-less development
    provide: HTTP_INTERCEPTORS,
    useClass: FakeBackendInterceptor,
    multi: true
};