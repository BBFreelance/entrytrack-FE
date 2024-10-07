import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})
export class ProfileComponent {
  user = {
    name: 'John Doe',
    role: 'Software Engineer',
    achievements: 3,
    profilePicture: 'https://i.pravatar.cc/150?img=32'
  };

  constructor(private router: Router) {}

  ngOnInit(): void {
    // Fetch user data if needed
  }

  onEditProfile() {
    // Handle profile edit
    console.log("Edit Profile Clicked");
  }

  onChangePassword() {
    // Handle password change
    console.log("Change Password Clicked");
  }


  // Method to navigate to the edit profile page
  editProfile() {
    this.router.navigate(['/edit-profile']); // Change this to your edit profile route
  }

  // Method to navigate to the change password page
  changePassword() {
    this.router.navigate(['/change-password']); // Change this to your change password route
  }
}
