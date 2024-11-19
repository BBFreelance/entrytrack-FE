import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { getUserSession } from '../../HELPER/user-service';
import { Users } from '../../CORE/models/users/users.model';
import { AdminService } from '../../CORE/services/admin/admin.service';
import { HttpClientModule } from '@angular/common/http';
import { ChangeDetectorRef } from '@angular/core';
import { NavbarComponent } from '../../navbar/navbar.component';



interface User {
  id: number;
  name: string;
  email: string;
  role: string;
}

@Component({
  selector: 'app-user-management',
  standalone: true,
  imports: [CommonModule, HttpClientModule, NavbarComponent],
  templateUrl: './user-management.component.html',
  styleUrls: ['./user-management.component.css'],
  providers: [AdminService],
})
export class UserManagementComponent {
userData?: Users;
users: User[] = [];
paginatedUsers: User[] = [];
isLoading: boolean = true;

currentPage: number = 1;
itemsPerPage: number = 6;
totalPages: number = 0;
pageNumbers: number[] = [];

constructor(private router: Router, private adminService: AdminService, private cd: ChangeDetectorRef) {}
ngOnInit(): void {
  this.userData = getUserSession();
  this.getAllUsers();
  console.log('User session loaded');
}

getAllUsers(): void {
  this.adminService.getAllUsers().subscribe(
    (response: Users[]) => {
      this.users = response; // Directly assign the response to `users`
      this.totalPages = Math.ceil(this.users.length / this.itemsPerPage);
      this.loadUsers();
      this.isLoading = false;
    },
    (error) => {
      console.error('Error fetching user list:', error);
      this.isLoading = false;
    }
  );
}


loadUsers(): void {
  const startIndex = (this.currentPage - 1) * this.itemsPerPage;
  const endIndex = startIndex + this.itemsPerPage;
  this.paginatedUsers = this.users.slice(startIndex, endIndex);
  console.log('Current paginated users:', this.paginatedUsers); // Log for testing
  this.pageNumbers = Array.from({ length: this.totalPages }, (_, i) => i + 1);
}


changePage(page: number): void {
  this.currentPage = page;
  this.loadUsers();
}
  // Method to create a new user (this could also open a modal)
  createUser(): void {
    console.log('Create new user logic goes here');
    this.router.navigate(['/user-create']);
    // Implement your logic for creating a new user here, e.g., opening a modal
  }

  updateUser(id: number): void {
    // Navigate to the user update page with the user's ID as a route parameter
    this.router.navigate(['/user-update', id]); // This will navigate to /user-update/123 (example)
  }
  
  deleteUser(id: number): void {
    const confirmed = confirm('Are you sure you want to delete this user?');
    if (confirmed) {
      this.adminService.deleteUserById(id).subscribe(
        () => {
          // Remove user from the local list
          this.users = this.users.filter(user => user.id !== id);
          this.totalPages = Math.ceil(this.users.length / this.itemsPerPage); // Recalculate total pages
          this.loadUsers(); // Reload users for the current page
          alert('User deleted successfully.');
        },
        (error) => {
          console.error('Error deleting user:', error);
          alert('Failed to delete user. Please try again.');
        }
      );
    }
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
