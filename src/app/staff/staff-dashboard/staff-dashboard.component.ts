import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-staff-dashboard',
  standalone: true,
  imports: [],
  templateUrl: './staff-dashboard.component.html',
  styleUrl: './staff-dashboard.component.css'
})
export class StaffDashboardComponent {

  constructor(private router: Router) {}

 

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
