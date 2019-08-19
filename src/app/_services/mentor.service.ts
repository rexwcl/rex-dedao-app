import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Mentor } from '@/_models';

@Injectable({ providedIn: 'root' })
export class MentorService {
    constructor(private http: HttpClient) { }

    getAll() {
        return this.http.get<Mentor[]>(`${config.apiUrl}/mentors`);
    }

    register(mentor: Mentor) {
        return this.http.post(`${config.apiUrl}/mentors/register`, mentor);
    }

    delete(id: number) {
        return this.http.delete(`${config.apiUrl}/mentors/${id}`);
    }

}