import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Mentor } from '@/_models';

@Injectable({ providedIn: 'root' })
export class MentorService {
    constructor(private http: HttpClient) { }

    private mentorUrl = 'http://172.16.69.196:8082/mentor-portal/mentors';

    getAll() {
        //return this.http.get<Mentor[]>(`${config.apiUrl}/mentors`);
        return this.http.get<Mentor[]>(this.mentorUrl);

    }

    register(mentor: Mentor) {
        //return this.http.post(`${config.apiUrl}/mentors/register`, mentor);
        return this.http.post<Mentor>(this.mentorUrl, mentor);
    }

    delete(id: number) {
        //return this.http.delete(`${config.apiUrl}/mentors/${id}`);
        return this.http.delete(`${this.mentorUrl}/${id}`);
    }
}