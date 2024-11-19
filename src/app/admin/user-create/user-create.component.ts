import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AdminService } from '../../CORE/services/admin/admin.service';
import { FormsModule } from '@angular/forms'; // Import FormsModule for two-way data binding
import { HttpClientModule } from '@angular/common/http'; // Import HttpClientModule for HTTP requests
import { NavbarComponent } from '../../navbar/navbar.component';


interface User {
  id: number;
  name: string;
  email: string;
  role: string;
  password: string;
}

@Component({
  selector: 'app-user-create',
  standalone: true,
  imports: [FormsModule, HttpClientModule,NavbarComponent], // Include FormsModule and HttpClientModule
  templateUrl: './user-create.component.html',
  styleUrls: ['./user-create.component.css'],
  providers: [AdminService],
})
export class UserCreateComponent {
  name: string = '';
  email: string = '';
  role: string = ''; // Example roles could be 'user' or 'admin'
  password: string = '';

  constructor(private router: Router, private adminService: AdminService) {}

  // Method to create a new user
  submitUser(): void {
    if (this.name.trim() && this.email.trim() && this.role.trim() && this.password.trim()) {
      const newUser: User = {
        id: 0, // ID will be assigned by the backend, not needed here
        name: this.name,
        email: this.email,
        role: this.role,
        password: this.password,
      };

      // Call the AdminService to create the new user
      this.adminService.createUser(newUser).subscribe({
        next: (response) => {
          if (response) { // Adjust based on actual response structure
            this.name = '';
            this.email = '';
            this.role = '';
            this.password = '';
            alert('User created successfully!');
            this.router.navigate(['/user-management']); // Navigate to user management page
          }
        },
        error: (error) => {
          console.error('Error creating user:', error);
          alert('There was an error creating the user. Please try again.');
        }
      });
    } else {
      alert('Please fill all fields before submitting.');
    }
  }
}


