import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-security-login',
  standalone: true,
  imports: [],
  templateUrl: './security-login.component.html',
  styleUrl: './security-login.component.css'
})
export class SecurityLoginComponent {
  constructor(private router: Router) { }

  // Method to navigate to the dashboard
  navigateToSecurityDashboard() {
    this.router.navigate(['/security-dashboard']);
  }
}
