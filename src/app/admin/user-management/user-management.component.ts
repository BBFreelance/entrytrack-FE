import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';


interface User {
  id: number;
  name: string;
  email: string;
  role: string;
}

@Component({
  selector: 'app-user-management',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './user-management.component.html',
  styleUrls: ['./user-management.component.css']
})
export class UserManagementComponent {
  users: User[] = [
    { id: 1, name: 'John Doe', email: 'john@example.com', role: 'Admin' },
    { id: 2, name: 'Jane Smith', email: 'jane@example.com', role: 'User' },
    { id: 3, name: 'Alice Johnson', email: 'alice@example.com', role: 'User' },
    // Add more users here for demonstration
    { id: 4, name: 'Bob Brown', email: 'bob@example.com', role: 'User' },
    { id: 5, name: 'Charlie Davis', email: 'charlie@example.com', role: 'Admin' },
    { id: 6, name: 'Diana Green', email: 'diana@example.com', role: 'User' },
    { id: 7, name: 'Evan White', email: 'evan@example.com', role: 'User' },
    { id: 8, name: 'Fiona Black', email: 'fiona@example.com', role: 'User' },
    { id: 9, name: 'George Blue', email: 'george@example.com', role: 'Admin' },
    { id: 10, name: 'Hannah Yellow', email: 'hannah@example.com', role: 'User' },
  ];

  currentPage: number = 1;
  itemsPerPage: number = 5; // Number of users per page
  totalPages: number = Math.ceil(this.users.length / this.itemsPerPage); // Calculate total pages
  paginatedUsers: User[] = [];
  pageNumbers: number[] = []; // Array to hold page numbers

  constructor(private router: Router) {
    this.loadUsers();
    // Load users for the current page
  }

  loadUsers(): void {
    const startIndex = (this.currentPage - 1) * this.itemsPerPage;
    const endIndex = startIndex + this.itemsPerPage;
    this.paginatedUsers = this.users.slice(startIndex, endIndex); // Slice users for the current page
    this.pageNumbers = Array.from({ length: this.totalPages }, (_, i) => i + 1); // Generate page numbers
  }

  // Method to create a new user (this could also open a modal)
  createUser(): void {
    console.log('Create new user logic goes here');
    this.router.navigate(['/user-create']);
    // Implement your logic for creating a new user here, e.g., opening a modal
  }

  editUser(id: number): void {
    console.log('Edit user with ID:', id);
    // Implement logic to edit the user
  }

  deleteUser(id: number): void {
    this.users = this.users.filter(user => user.id !== id);
    this.totalPages = Math.ceil(this.users.length / this.itemsPerPage); // Recalculate total pages
    this.loadUsers(); // Reload users for the current page
  }

  previousPage(): void {
    if (this.currentPage > 1) {
      this.currentPage--;
      this.loadUsers(); // Load users for the new page
    }
  }

  nextPage(): void {
    if (this.currentPage < this.totalPages) {
      this.currentPage++;
      this.loadUsers(); // Load users for the new page
    }
  }

  goToPage(page: number): void {
    if (page > 0 && page <= this.totalPages) {
      this.currentPage = page;
      this.loadUsers(); // Load users for the selected page
    }
  }
}
