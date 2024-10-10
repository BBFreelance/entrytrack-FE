import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminLoginComponent } from './admin/admin-login/admin-login.component';
import { UserManagementComponent } from './admin/user-management/user-management.component';
import { UserCreateComponent } from './admin/user-create/user-create.component';
import { ProfileComponent } from './profile/profile/profile.component';
import { EditProfileComponent } from './profile/edit-profile/edit-profile.component';
import { ChangePasswordComponent } from './profile/change-password/change-password.component';
import { AdminTrackEntryLogComponent } from './admin/admin-track-entry-log/admin-track-entry-log.component';
import { SystemSettingsComponent } from './admin/system-settings/system-settings.component';
import { FeedbackListComponent } from './admin/feedback-list/feedback-list.component';
import { QrCodeGeneratorComponent } from './admin/qr-code-generator/qr-code-generator.component';
import { AdminAccessControlListComponent } from './admin/admin-access-control-list/admin-access-control-list.component';
import { AdminDashboardComponent } from './admin/admin-dashboard/admin-dashboard.component';
import { HrSyncComponent } from './admin/hr-sync/hr-sync.component';

import { StaffLoginComponent } from './staff/staff-login/staff-login.component';
import { StaffDashboardComponent } from './staff/staff-dashboard/staff-dashboard.component';
import { StaffEntryLogComponent } from './staff/staff-entry-log/staff-entry-log.component';
import { FeedbackFormComponent } from './staff/feedback-form/feedback-form.component';
import { ScanQrCodeComponent } from './staff/scan-qr-code/scan-qr-code.component';
import { StaffFeedbackListComponent } from './staff/staff-feedback-list/staff-feedback-list.component';

import { SecurityLoginComponent } from './security/security-login/security-login.component';
import { SecurityDashboardComponent } from './security/security-dashboard/security-dashboard.component';
import { SecurityTrackEntryLogComponent } from './security/security-track-entry-log/security-track-entry-log.component';
import { SecurityAccessControlListComponent } from './security/security-access-control-list/security-access-control-list.component';
import { IndexComponent } from './index/index.component';

export const routes: Routes = [
  { path: '', component: IndexComponent },

  //admin

  { path: 'admin-login', component: AdminLoginComponent },
  { path: '', redirectTo: 'admin-login', pathMatch: 'full' },

  { path: 'admin-dashboard', component: AdminDashboardComponent },
  { path: '', redirectTo: '/admin-dashboard', pathMatch: 'full' },

  { path: 'user-management', component: UserManagementComponent },
  { path: '', redirectTo: '/user-management', pathMatch: 'full' },

  { path: 'user-create', component: UserCreateComponent },
  { path: '', redirectTo: '/user-create', pathMatch: 'full' },

  { path: 'profile', component: ProfileComponent },
  { path: '', redirectTo: '/profile', pathMatch: 'full' },

  { path: 'edit-profile', component: EditProfileComponent },
  { path: '', redirectTo: '/edit-profile', pathMatch: 'full' },

  { path: 'change-password', component: ChangePasswordComponent },
  { path: '', redirectTo: '/change-password', pathMatch: 'full' },

  { path: 'admin-track-entry-log', component: AdminTrackEntryLogComponent },
  { path: '', redirectTo: '/admin-track-entry-log', pathMatch: 'full' },

  { path: 'system-settings', component: SystemSettingsComponent },
  { path: '', redirectTo: '/settings', pathMatch: 'full' },

  { path: 'feedback-list', component: FeedbackListComponent },
  { path: '', redirectTo: 'feedback-list', pathMatch: 'full' },

  { path: 'qr-code-generator', component: QrCodeGeneratorComponent },
  { path: '', redirectTo: 'qr-code-generator', pathMatch: 'full' },

  {
    path: 'admin-access-control-list',
    component: AdminAccessControlListComponent,
  },
  { path: '', redirectTo: 'admin-access-control-list', pathMatch: 'full' },

  { path: 'hr-sync', component: HrSyncComponent },
  { path: '', redirectTo: 'hr-sync', pathMatch: 'full' },

  //staff

  { path: 'staff-login', component: StaffLoginComponent },
  { path: '', redirectTo: 'staff-login', pathMatch: 'full' },

  { path: 'staff-dashboard', component: StaffDashboardComponent },
  { path: '', redirectTo: '/staff-dashboard', pathMatch: 'full' },

  { path: 'staff-entry-log', component: StaffEntryLogComponent },
  { path: '', redirectTo: '/staff-entry-log', pathMatch: 'full' },

  { path: 'feedback-form', component: FeedbackFormComponent },
  { path: '', redirectTo: 'feedback-form', pathMatch: 'full' },

  { path: 'scan-qr-code', component: ScanQrCodeComponent },
  { path: '', redirectTo: 'scan-qr-code', pathMatch: 'full' },

  { path: 'staff-feedback-list', component: StaffFeedbackListComponent },
  { path: '', redirectTo: 'staff-feedback-list', pathMatch: 'full' },

  //security
  { path: 'security-login', component: SecurityLoginComponent },
  { path: '', redirectTo: 'security-login', pathMatch: 'full' },

  { path: 'security-dashboard', component: SecurityDashboardComponent },
  { path: '', redirectTo: '/security-dashboard', pathMatch: 'full' },

  {
    path: 'security-track-entry-log',
    component: SecurityTrackEntryLogComponent,
  },
  { path: '', redirectTo: '/security-track-entry-log', pathMatch: 'full' },

  {
    path: 'security-access-control-list',
    component: SecurityAccessControlListComponent,
  },
  { path: '', redirectTo: 'security-access-control-list', pathMatch: 'full' },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)], // Use RouterModule.forRoot for root module
  exports: [RouterModule], // Export RouterModule so it can be used in other modules
})
export class AppRoutingModule {}
