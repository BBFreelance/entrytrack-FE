import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms'; // Import FormsModule
import { Router } from '@angular/router'; 

@Component({
  selector: 'app-edit-profile',
  standalone: true,
  imports: [FormsModule], // Add FormsModule here
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.css']
})
export class EditProfileComponent {
  user = {
    name: 'John Doe', // Example data
    email: 'johndoe@example.com', // Example data
    profilePicture: 'https://i.pravatar.cc/150?img=32' // Example profile picture
  };


  constructor(private router: Router) {}

  ngOnInit(): void {
    // Fetch user data from the server if needed
  }

  onUpdateProfile() {
    // Logic to handle profile update, e.g., save changes to the server
    console.log('Profile updated:', this.user);
    // Add your update logic here
  }

  // Method to handle file selection for the profile picture
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
    this.router.navigate(['/profile']); // Adjust the route as needed for your application
  }

  submit() {
    this.router.navigate(['/profile']); // Adjust the route as needed for your application
  }
}
