import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms'; // Import FormsModule
import { CommonModule } from '@angular/common'; // For common directives
import { config } from '../../config';
import { LoginResponse } from '../../CORE/models/login-response/login-response.model';
import { StaffService } from '../../CORE/services/staff/staff.service';
import { Users } from '../../CORE/models/users/users.model';
import { AuthService } from '../../CORE/services/auth/auth.service';

@Component({
  selector: 'app-staff-login',
  standalone: true,
  imports: [FormsModule, CommonModule, HttpClientModule], // Add FormsModule to the imports array
  templateUrl: './staff-login.component.html',
  styleUrls: ['./staff-login.component.css'],
  providers: [AuthService]
  
})
export class StaffLoginComponent {
  email: string = '';
  password: string = '';
  errorMessage: string = '';
  userData?: Users;
  isLoading : boolean = false;

  constructor(private router: Router, private authService: AuthService) {}

  login() {
    this.isLoading = true;
    // Call the login service
    this.authService.login(this.email, this.password).subscribe({
      next: (response: LoginResponse) => {
        console.log('Login response:', response); // Log the response

        if (response.status === '0000') {
          this.userData = response.data;

          if(this.userData?.role === "staff"){
            localStorage.setItem('userData', JSON.stringify({
              id: this.userData?.id,
              name: this.userData?.name,
              email:  this.userData?.email,
              staff_id:  this.userData?.staff_id,
              role:  this.userData?.role
            }));
            this.isLoading = false;
            this.router.navigate(['/staff-dashboard']);
          }else {
            this.isLoading = false;
            alert('You\'re not staff');
          }
         
        } else {
          this.isLoading = false;
          // Show alert for invalid email or password
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
}
