import { Routes, RouterModule } from '@angular/router';

import { UserHomeComponent } from './user/user-home';
import { UserLoginComponent } from './user/user-login';
import { UserRegisterComponent } from './user/user-register';
import { UserTrainingProgressComponent } from './user/user-training-progress';
import { UserTrainingCompletedComponent } from './user/user-training-completed';
import { UserNotificationComponent } from './user/user-notification';

import { MentorHomeComponent } from './mentor/mentor-home';
import { MentorLoginComponent } from './mentor/mentor-login';
import { MentorRegisterComponent } from './mentor/mentor-register';
import { MentorHistoryComponent } from './mentor/mentor-history';
import { MentorPaymentsComponent } from './mentor/mentor-payments';
import { MentorTrainingCompletedComponent } from './mentor/mentor-training-completed';
import { MentorTrainingProgressComponent } from './mentor/mentor-training-progress';
import { MentorEditSkillsComponent } from './mentor/mentor-edit-skills';
import { MentorNotificationComponent } from './mentor/mentor-notification';

import { AdminBlockComponent } from './admin/admin-block';
import { AdminEditTechComponent } from './admin/admin-edit-tech';
import { AdminLoginComponent } from './admin/admin-login';
import { AdminHomeComponent } from './admin/admin-home';

import { TrainingSearchComponent } from './user/training-search';
import { AuthGuard } from './_helpers';

const routes: Routes = [
    { path: 'userHome', component: UserHomeComponent, canActivate: [AuthGuard] },
    { path: 'userLogin', component: UserLoginComponent },
    { path: 'userRegister', component: UserRegisterComponent },
	{ path: 'userTrainingComp', component: UserTrainingCompletedComponent },
	{ path: 'userTrainingInProgress', component: UserTrainingProgressComponent },
	{ path: 'userNotification', component: UserNotificationComponent },
	{ path: 'mentorHome', component: MentorHomeComponent, canActivate: [AuthGuard] },
    { path: 'mentorLogin', component: MentorLoginComponent },
    { path: 'mentorRegister', component: MentorRegisterComponent },
	{ path: 'mentorHistory', component: MentorHistoryComponent },
	{ path: 'mentorPayments', component: MentorPaymentsComponent },
	{ path: 'mentorEditSkills', component: MentorEditSkillsComponent },
	{ path: 'mentorTrainingComp', component: MentorTrainingCompletedComponent },
	{ path: 'mentorTrainingInProgress', component: MentorTrainingProgressComponent },
	{ path: 'mentorNotification', component: MentorNotificationComponent },
	{ path: 'adminHome', component: AdminHomeComponent, canActivate: [AuthGuard] },
	{ path: 'adminLogin', component: AdminLoginComponent },
	{ path: 'adminBlock', component: AdminBlockComponent },
	{ path: 'adminEditTech', component: AdminEditTechComponent },
	{ path: 'trainingSearch', component: TrainingSearchComponent },
	
    // otherwise redirect to home
    { path: '**', redirectTo: '' }
];

export const appRoutingModule = RouterModule.forRoot(routes);