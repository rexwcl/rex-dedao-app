import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup} from '@angular/forms';
import { first } from 'rxjs/operators';

import { User, SearchTrainings } from '@/_models';
import { AuthenticationService, TrainingService } from '@/_services';

@Component({ templateUrl: 'user-home.component.html' })
export class UserHomeComponent implements OnInit {
    currentUser: User;
    searchForm: FormGroup;
    submitted = false;
    loading = false;
    trainings = [];
    training: SearchTrainings;

    constructor(
        private authenticationService: AuthenticationService,
        private trainingService: TrainingService,
        private formBuilder: FormBuilder
    ) {
        this.currentUser = this.authenticationService.currentUserValue;
    }

    ngOnInit() {
        this.searchForm = this.formBuilder.group({
            trainerAvailablePeriod: [''],
            searchText: ['']
        });
    }

    // convenience getter for easy access to form fields
    get f() { return this.searchForm.controls; }

    onSubmit() {
        this.submitted = true;
        this.training = new SearchTrainings();
        this.training.trainerAvailablePeriod = this.f.trainerAvailablePeriod.value;
        this.training.searchText = this.f.searchText.value;

        this.trainingService.search(this.training)
                .subscribe(
                  trainings => {
                        console.log(trainings);
                      }
                );
          
    }

}