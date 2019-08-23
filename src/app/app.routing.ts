import { Routes, RouterModule } from '@angular/router';

import { UserHomeComponent } from './user-home';
import { UserLoginComponent } from './user-login';
import { UserRegisterComponent } from './user-register';
import { UserTrainingProgressComponent } from './user-training-progress';
import { UserTrainingCompletedComponent } from './user-training-completed';

import { MentorHomeComponent } from './mentor-home';
import { MentorLoginComponent } from './mentor-login';
import { MentorRegisterComponent } from './mentor-register';
import { MentorHistoryComponent } from './mentor-history';
import { MentorPaymentsComponent } from './mentor-payments';
import { MentorTrainingCompletedComponent } from './mentor-training-completed';
import { MentorTrainingProgressComponent } from './mentor-training-progress';
import { MentorEditSkillsComponent } from './mentor-edit-skills';

import { AdminBlockComponent } from './admin-block';
import { AdminEditTechComponent } from './admin-edit-tech';
import { AdminLoginComponent } from './admin-login';
import { AdminHomeComponent } from './admin-home';

import { TrainingSearchComponent } from './training-search';
import { AuthGuard } from './_helpers';

const routes: Routes = [
	{ path: 'adminHome', component: AdminHomeComponent, canActivate: [AuthGuard] },
	{ path: 'adminLogin', component: AdminLoginComponent },
    { path: 'userHome', component: UserHomeComponent, canActivate: [AuthGuard] },
    { path: 'userLogin', component: UserLoginComponent },
    { path: 'userRegister', component: UserRegisterComponent },
	{ path: 'userTrainingComp', component: UserTrainingCompletedComponent },
	{ path: 'userTrainingInProgress', component: UserTrainingProgressComponent },
	{ path: 'mentorHome', component: MentorHomeComponent, canActivate: [AuthGuard] },
    { path: 'mentorLogin', component: MentorLoginComponent },
    { path: 'mentorRegister', component: MentorRegisterComponent },
	{ path: 'mentorHistory', component: MentorHistoryComponent },
	{ path: 'mentorPayments', component: MentorPaymentsComponent },
	{ path: 'mentorEditSkills', component: MentorEditSkillsComponent },
	{ path: 'mentorTrainingComp', component: MentorTrainingCompletedComponent },
	{ path: 'mentorTrainingInProgress', component: MentorTrainingProgressComponent },
	{ path: 'adminBlock', component: AdminBlockComponent },
	{ path: 'adminEditTech', component: AdminEditTechComponent },
	{ path: 'trainingSearch', component: TrainingSearchComponent },
	
    // otherwise redirect to home
    // { path: '**', redirectTo: '' }
];

export const appRoutingModule = RouterModule.forRoot(routes);