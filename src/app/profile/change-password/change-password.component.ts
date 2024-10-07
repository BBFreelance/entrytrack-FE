import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms'; // Import FormsModule
import { Router } from '@angular/router'; 


@Component({
  selector: 'app-change-password',
  standalone: true,
  imports: [FormsModule], // Add FormsModule here
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.css']
})
export class ChangePasswordComponent {
  passwords = {
    currentPassword: '',
    newPassword: '',
    confirmPassword: ''
  };

  constructor(private router: Router) {}

  ngOnInit(): void {
    // Any initialization if needed
  }

  cancel() {
    this.router.navigate(['/profile']); // Adjust the route as needed for your application
  }

  onChangePassword(): void {
    if (this.passwords.newPassword !== this.passwords.confirmPassword) {
      console.error('New password and confirmation do not match');
      return;
    }
    // Handle password change logic (e.g., send password data to the server)
    console.log('Password changed successfully');
  }
}
