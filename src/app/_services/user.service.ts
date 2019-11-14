import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { User } from '@/_models';

@Injectable({ providedIn: 'root' })
export class UserService {
    constructor(private http: HttpClient) { }

    private userUrl = 'http://47.98.62.220:8081/user-portal/users';

    getAll() {
        //return this.http.get<User[]>(`${config.apiUrl}/users`);
        return this.http.get<User[]>(this.userUrl);

    }

    register(user: User) {
        //return this.http.post(`${config.apiUrl}/users/register`, user);
        return this.http.post<User>(this.userUrl, user);
    }

    delete(id: number) {
        //return this.http.delete(`${config.apiUrl}/users/${id}`);
        return this.http.delete(`${this.userUrl}/${id}`);
    }
}