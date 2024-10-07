import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-login',
  standalone: true,
  imports: [],
  templateUrl: './admin-login.component.html',
  styleUrl: './admin-login.component.css'
})
export class AdminLoginComponent {
  constructor(private router: Router) { }

  // Method to navigate to the dashboard
  navigateToAdminDashboard() {
    this.router.navigate(['/admin-dashboard']);
  }
}
