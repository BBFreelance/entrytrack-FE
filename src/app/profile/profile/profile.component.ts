import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavbarComponent } from '../../navbar/navbar.component';


@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [NavbarComponent],
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  user: any = {
    name: '',
    role: '',
    achievements: 3,
    profilePicture: 'https://i.pravatar.cc/150?img=32'
  };

  constructor(private router: Router) {}

  ngOnInit(): void {
    // Check if localStorage is available
    if (typeof window !== 'undefined' && window.localStorage) {
      const storedUserData = localStorage.getItem('userData');
      if (storedUserData) {
        this.user = JSON.parse(storedUserData);
      }
    }
  }

  onEditProfile() {
    console.log("Edit Profile Clicked");
  }

  onChangePassword() {
    console.log("Change Password Clicked");
  }

  // Method to navigate to the edit profile page
  editProfile() {
    this.router.navigate(['/edit-profile']);
  }

  // Method to navigate to the change password page
  changePassword() {
    this.router.navigate(['/change-password']);
  }
}
