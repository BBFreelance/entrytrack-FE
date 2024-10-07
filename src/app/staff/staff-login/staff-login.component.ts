import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-staff-login',
  standalone: true,
  imports: [],
  templateUrl: './staff-login.component.html',
  styleUrl: './staff-login.component.css'
})
export class StaffLoginComponent {
  constructor(private router: Router) { }

  // Method to navigate to the dashboard
  navigateToStaffDashboard() {
    this.router.navigate(['/staff-dashboard']);
  }
}
