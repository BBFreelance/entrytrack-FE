import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AdminService } from '../../CORE/services/admin/admin.service';
import { FormsModule } from '@angular/forms'; // Import FormsModule for two-way data binding
import { Users } from '../../CORE/models/users/users.model';
import { HttpClientModule } from '@angular/common/http'; // Import HttpClientModule for HTTP requests


@Component({
  selector: 'app-user-update',
  standalone: true,
  imports: [FormsModule, HttpClientModule], // Include FormsModule and HttpClientModule
  templateUrl: './user-update.component.html',
  styleUrls: ['./user-update.component.css'],
  providers: [AdminService],
})
export class UserUpdateComponent implements OnInit {
  name: string = '';
  email: string = '';
  userId: number | undefined;

  constructor(private router: Router, private activatedRoute: ActivatedRoute, private adminService: AdminService) {}

  ngOnInit(): void {
    // Extract the 'id' parameter from the URL
    this.activatedRoute.params.subscribe((params) => {
      this.userId = +params['id']; // Convert to number
      if (this.userId) {
        this.getUserDetails(this.userId);
      }
    });
  }

getUserDetails(id: number): void {
  this.adminService.getUserById(id).subscribe({
    next: (user) => {
      console.log('Fetched user details:', user); // Log to see the response
      this.name = user.name;
      this.email = user.email;
    },
    error: (error) => {
      console.error('Error fetching user details:', error);
      alert('There was an error fetching the user details.');
    },
  });
}

  // Method to update the user
  updateUser(): void {
    if (this.userId && this.name.trim() && this.email.trim()) {
      const updatedUser: Users = {
        id: this.userId, // Guaranteed to be a number
        name: this.name,
        email: this.email,
        email_verified_at: null, // Or leave it as needed
        role: '', // Set role as required, or fetch it from the user data
        created_at: '', // Or leave empty if not required
        updated_at: '', // Same as above
      };
  
      // Log the data being sent
      console.log('Updating user with data:', updatedUser);
  
      // Call the AdminService to update the user
      this.adminService.updateUser(updatedUser).subscribe({
        next: (response) => {
          if (response) {
            alert('User updated successfully!');
            this.router.navigate(['/user-management']);
          }
        },
        error: (error) => {
          console.error('Error updating user:', error);
          alert('There was an error updating the user. Please try again.');
        }
      });
      
    } else {
      alert('Please fill all fields and ensure the user ID is valid.');
    }
  }
  
  
}
