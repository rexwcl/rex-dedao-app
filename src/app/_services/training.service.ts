import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { SearchTrainings, User } from '@/_models';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class TrainingService {
    constructor(private http: HttpClient) { }

    private trainingUrl = 'http://localhost:8083/training-portal/trainings';    
    search(searchTrainings: SearchTrainings) {
        // return this.http.post(`${config.apiUrl}/trainings/search`, searchTrainings);
        return this.http.post(`${this.trainingUrl}/search`, searchTrainings)
    }

    propose() {

    }

    getTrainingsInProgressOfUser(id: number) {
        // return this.http.get<[]>(`${config.apiUrl}/users/progress/${id}`);
        return this.http.get<[]>(`${this.trainingUrl}/users/progress/${id}`);
    }

    getCompletedTrainingsOfUser(id: number) {
        // return this.http.get<[]>(`${config.apiUrl}/users/completed/${id}`);
        return this.http.get<[]>(`${this.trainingUrl}/users/completed/${id}`);
    }

    getTrainingsInProgressOfMentor(id: number) {
        // return this.http.get<[]>(`${config.apiUrl}/mentors/progress/${id}`);
        return this.http.get<[]>(`${this.trainingUrl}/mentors/progress/${id}`);
    }

    getCompletedTrainingsOfMentor(id: number) {
        // return this.http.get<[]>(`${config.apiUrl}/mentors/completed/${id}`);
        return this.http.get<[]>(`${this.trainingUrl}/mentors/completed/${id}`);
    }
}