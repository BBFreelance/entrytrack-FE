import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NavbarComponent } from '../../navbar/navbar.component';


@Component({
  selector: 'app-admin-dashboard',
  standalone: true,
  imports: [NavbarComponent],
  templateUrl: './admin-dashboard.component.html',
  styleUrl: './admin-dashboard.component.css'
})
export class AdminDashboardComponent {

  constructor(private router: Router) {}

  navigateToACL() {
    this.router.navigate(['/admin-access-control-list']);
  }

  navigateToQRCode() {
    this.router.navigate(['/qr-code-generator']);
  }

  navigateToUserManagement() {
    this.router.navigate(['/user-management']);
  }

  navigateToFeedback() {
    this.router.navigate(['/feedback-list']);
  }

  navigateToSettings() {
    this.router.navigate(['/system-settings']);
  }


  navigateToSyncData() {
    this.router.navigate(['/hr-sync']);
  }
}
