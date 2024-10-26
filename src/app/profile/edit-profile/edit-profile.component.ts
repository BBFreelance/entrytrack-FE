import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { UsersService } from '../../CORE/services/users/users.service';
import { UsersResponse } from '../../CORE/models/users/users.model';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-edit-profile',
  standalone: true,
  imports: [FormsModule, CommonModule, HttpClientModule],
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.css'],
  providers: [UsersService],
})
export class EditProfileComponent implements OnInit {
  user: any = {
    name: '',
    email: '',
    profilePicture: 'https://i.pravatar.cc/150?img=32',
  };

  errorMessage: string = '';
  is_loading: boolean = false;

  constructor(private router: Router, private usersService: UsersService) {}

  ngOnInit(): void {
    // Retrieve user data from local storage
    if (typeof window !== 'undefined' && window.localStorage) {
      const storedUserData = localStorage.getItem('userData');
      if (storedUserData) {
        this.user = JSON.parse(storedUserData);
      }
    }
  }

  onUpdateProfile() {
    // Logic to handle profile update, e.g., save changes to the server or local storage
    console.log('Profile updated:', this.user);
    this.is_loading = true;
    
    this.usersService.updateProfile(this.user).subscribe({
      next: (response: UsersResponse) => {
        //
        if (response.status === '0000') {
          this.router.navigate(['/profile']);
          alert('Success update profile');
          this.is_loading = false;
        }
      },
      error: (error) => {
        if (error.status === 401) {
          alert('Invalid email or password');
        } else {
          this.errorMessage = 'update profile failed. Please try again later.';
        }
      },
    });

    // Save updated user data to local storage
    localStorage.setItem('userData', JSON.stringify(this.user));
  }

  onFileSelected(event: Event) {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files[0]) {
      const file = input.files[0];
      const reader = new FileReader();

      reader.onload = () => {
        this.user.profilePicture = reader.result as string; // Update the profile picture preview
      };

      reader.readAsDataURL(file); // Convert the file to base64 URL
    }
  }

  cancel() {
    this.router.navigate(['/profile']);
  }

  submit() {
    this.onUpdateProfile(); // Save changes
  }
}
