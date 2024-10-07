import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Router } from '@angular/router';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'EntryTrackAngular';

  constructor(private router: Router ) { }
  // Navigate to Dashboard
  navigateToAdminDashboard() {
    this.router.navigate(['/admin-dashboard']);
  }
   // Navigate to Access Control List
   navigateToACL() {
    this.router.navigate(['/admin-access-control-list']);
  }

  // Navigate to QR Code Generator
  navigateToQRCode() {
    this.router.navigate(['/qr-code-generator']);
  }

  // Navigate to User Management
  navigateToUserManagement() {
    this.router.navigate(['/user-management']);
  }

  // Navigate to Feedback List
  navigateToFeedback() {
    this.router.navigate(['/feedback-list']);
  }

  // Navigate to the user's profile
  navigateToProfile() {
    this.router.navigate(['/profile']);
  }

  // Navigate to the settings page
  navigateToSettings() {
    this.router.navigate(['/system-settings']);
  }

  // Handle logout logic
  logout() {
    // Perform logout logic here (e.g., clear user data, call an API to log out, etc.)
    // Example: this.authService.logout();

    // Navigate back to the login page or any other page
    this.router.navigate(['/login']);
  }
}
