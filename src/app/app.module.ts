import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

// used to create fake backend
import { fakeBackendProvider } from './_helpers';

import { appRoutingModule } from './app.routing';
import { JwtInterceptor, ErrorInterceptor } from './_helpers';
import { AppComponent } from './app.component';
import { UserHomeComponent } from './user-home';
import { UserLoginComponent } from './user-login';
import { UserRegisterComponent } from './user-register';
import { UserTrainingCompletedComponent } from './user-training-completed';
import { UserTrainingProgressComponent } from './user-training-progress';

import { MentorHomeComponent } from './mentor-home';
import { MentorLoginComponent } from './mentor-login';
import { MentorRegisterComponent } from './mentor-register';
import { MentorHistoryComponent } from './mentor-history';
import { MentorPaymentsComponent } from './mentor-payments';
import { MentorEditSkillsComponent } from './mentor-edit-skills';
import { MentorTrainingProgressComponent } from './mentor-training-progress';
import { MentorTrainingCompletedComponent } from './mentor-training-completed';

import { AdminBlockComponent } from './admin-block';
import { AdminEditTechComponent } from './admin-edit-tech';

import { AlertComponent } from './_components';
import { TrainingSearchComponent } from './training-search';



@NgModule({
    imports: [
        BrowserModule,
        ReactiveFormsModule,
        HttpClientModule,
        appRoutingModule,
        NgbModule
    ],
    declarations: [
        AppComponent,
        UserHomeComponent,
        UserLoginComponent,
        UserRegisterComponent,
		UserTrainingCompletedComponent,
		UserTrainingProgressComponent,
		MentorHomeComponent,
        MentorLoginComponent,
        MentorRegisterComponent,
		MentorHistoryComponent,
		MentorPaymentsComponent,
		MentorTrainingCompletedComponent,
		MentorTrainingProgressComponent,
		MentorEditSkillsComponent,
		AdminBlockComponent,
		AdminEditTechComponent,
        AlertComponent,
        TrainingSearchComponent,
    ],
    providers: [
        { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
        { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },

        // provider used to create fake backend
        fakeBackendProvider
    ],
    bootstrap: [AppComponent]
})
export class AppModule { };