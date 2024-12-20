import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NavbarComponent } from '../../navbar/navbar.component';



@Component({
  selector: 'app-security-dashboard',
  standalone: true,
  imports: [NavbarComponent],
  templateUrl: './security-dashboard.component.html',
  styleUrl: './security-dashboard.component.css'
})
export class SecurityDashboardComponent {
   constructor(private router: Router) {}


  //  navigateToACL() {
  //   this.router.navigate(['/security-access-control-list']);
  // }

  navigateToEntryLog() {
    this.router.navigate(['/staff-entry-log']);
  }

  // Method to navigate to the dashboard
  navigateToSecurityDashboard() {
    this.router.navigate(['/security-dashboard']);
  }

  navigateToFeedbackForm() {
    this.router.navigate(['/security-feedback-list']);
  }

  navigateToScanQRCode() {
    this.router.navigate(['/security/qr-code-generator']);
  }

}
