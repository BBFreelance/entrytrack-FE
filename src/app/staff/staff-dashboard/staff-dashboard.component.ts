import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NavbarComponent } from '../../navbar/navbar.component';


@Component({
  selector: 'app-staff-dashboard',
  standalone: true,
  imports: [NavbarComponent],
  templateUrl: './staff-dashboard.component.html',
  styleUrl: './staff-dashboard.component.css',
})
export class StaffDashboardComponent {
  constructor(private router: Router) {}

  navigateToProfile() {
    this.router.navigate(['/profile']);
  }

  navigateToScanQRCode() {
    this.router.navigate(['/scan-qr-code']);
  }

  navigateToFeedbackForm() {
    this.router.navigate(['/staff-feedback-list']);
  }

  navigateToEntryLog() {
    this.router.navigate(['/staff-entry-log']);
  }
}
