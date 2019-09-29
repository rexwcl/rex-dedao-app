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
import { UserHomeComponent } from './user/user-home';
import { UserLoginComponent } from './user/user-login';
import { UserRegisterComponent } from './user/user-register';
import { UserTrainingCompletedComponent } from './user/user-training-completed';
import { UserTrainingProgressComponent } from './user/user-training-progress';
import { UserNotificationComponent } from './user/user-notification';

import { MentorHomeComponent } from './mentor/mentor-home';
import { MentorLoginComponent } from './mentor/mentor-login';
import { MentorRegisterComponent } from './mentor/mentor-register';
import { MentorHistoryComponent } from './mentor/mentor-history';
import { MentorPaymentsComponent } from './mentor/mentor-payments';
import { MentorEditSkillsComponent } from './mentor/mentor-edit-skills';
import { MentorTrainingProgressComponent } from './mentor/mentor-training-progress';
import { MentorTrainingCompletedComponent } from './mentor/mentor-training-completed';
import { MentorNotificationComponent } from './mentor/mentor-notification';

import { AdminBlockComponent } from './admin/admin-block';
import { AdminEditTechComponent } from './admin/admin-edit-tech';
import { AdminHomeComponent } from './admin/admin-home';
import { AdminLoginComponent } from './admin/admin-login';

import { AlertComponent } from './_components';
import { TrainingSearchComponent } from './user/training-search';



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
        UserNotificationComponent,
		MentorHomeComponent,
        MentorLoginComponent,
        MentorRegisterComponent,
		MentorHistoryComponent,
		MentorPaymentsComponent,
		MentorTrainingCompletedComponent,
		MentorTrainingProgressComponent,
        MentorEditSkillsComponent,
        MentorNotificationComponent,
		AdminBlockComponent,
        AdminEditTechComponent,
        AdminHomeComponent,
        AdminLoginComponent,
        AlertComponent,
        TrainingSearchComponent,
    ],
    providers: [
        { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
        { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },

        // provider used to create fake backend
        //fakeBackendProvider
    ],
    bootstrap: [AppComponent]
})
export class AppModule { };