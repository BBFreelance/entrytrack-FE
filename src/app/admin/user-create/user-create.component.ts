import { Component } from '@angular/core';
import { Router } from '@angular/router';

interface User {
  id: number;
  name: string;
  email: string;
  role: string;
}

@Component({
  selector: 'app-user-create',
  standalone: true,
  imports: [],
  templateUrl: './user-create.component.html',
  styleUrl: './user-create.component.css'
})
export class UserCreateComponent {
  constructor(private router: Router) {}

  // Method to create a new user (this could also open a modal)
  createUser(): void {
    console.log('Create new user logic goes here');
    this.router.navigate(['/user-management']);
    // Implement your logic for creating a new user here, e.g., opening a modal
  }
}
