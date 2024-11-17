import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../CORE/services/auth/auth.service';
import { Users } from '../../CORE/models/users/users.model';
import { LoginResponse } from '../../CORE/models/login-response/login-response.model';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-admin-login',
  standalone: true,
  imports: [FormsModule, CommonModule, HttpClientModule],
  templateUrl: './admin-login.component.html',
  styleUrl: './admin-login.component.css',
  providers: [AuthService]
})
export class AdminLoginComponent {

  email: string = '';
  password: string = '';
  errorMessage: string = '';
  userData?: Users;
  isLoading: boolean = false;

  constructor(private router: Router, private authService: AuthService) {}

  login() {
    this.isLoading = true;
    // Call the login service
    this.authService.login(this.email, this.password).subscribe({
      next: (response: LoginResponse) => {
        console.log('Login response:', response); // Log the response

        if (response.status === '0000') {
          this.userData = response.data;

          if(this.userData?.role === "admin"){
            localStorage.setItem('userData', JSON.stringify({
              id: this.userData?.id,
              name: this.userData?.name,
              email:  this.userData?.email,
              staff_id:  this.userData?.staff_id,
              role:  this.userData?.role
            }));
            this.isLoading = false;
            this.router.navigate(['/admin-dashboard']);
          }else {
            this.isLoading = false;
            alert('You\'re not admin');
          }
         
        } else {
          // Show alert for invalid email or password
          this.isLoading = false;
          alert(response.message || 'Invalid email or password');
        }
      },
      error: (error) => {
        console.error('Login error:', error); // Log the error
        if (error.status === 401) {
          this.isLoading = false;
          alert('Invalid email or password');
        } else {
          this.isLoading = false;
          this.errorMessage = 'Login failed. Please try again later.';
        }
      },
    });
  }
  // // Method to navigate to the dashboard
  // navigateToAdminDashboard() {
  //   this.router.navigate(['/admin-dashboard']);
  // }
}
