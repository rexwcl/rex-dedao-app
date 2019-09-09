import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { SearchTrainings, User } from '@/_models';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class TrainingService {
    constructor(private http: HttpClient) { }

    search(searchTrainings: SearchTrainings) {
        return this.http.post(`${config.apiUrl}/trainings/search`, searchTrainings);
    }

    propose() {

    }

    getTrainingsInProgressOfUser(id: number) {
        return this.http.get<[]>(`${config.apiUrl}/users/progress/${id}`);
    }

    getCompletedTrainingsOfUser(id: number) {
        return this.http.get<[]>(`${config.apiUrl}/users/completed/${id}`);
    }

    getTrainingsInProgressOfMentor(id: number) {
        return this.http.get<[]>(`${config.apiUrl}/mentors/progress/${id}`);
    }

    getCompletedTrainingsOfMentor(id: number) {
        return this.http.get<[]>(`${config.apiUrl}/mentors/completed/${id}`);
    }
}