import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms'; // Import FormsModule
import { CommonModule } from '@angular/common';

interface AccessControlEntry {
  acl_id: number;
  user_id: number;
  resource: string;
  permission: string;
}

@Component({
  selector: 'app-admin-access-control-list',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './admin-access-control-list.component.html',
  styleUrls: ['./admin-access-control-list.component.css'],
})
export class AdminAccessControlListComponent  {
  aclEntries: AccessControlEntry[] = [
    { acl_id: 1, user_id: 1, resource: 'Feedback', permission: 'Read' },
    { acl_id: 2, user_id: 2, resource: 'Staff Record', permission: 'Write' },
    { acl_id: 3, user_id: 3, resource: 'Edit Profile', permission: 'Edit' },
    // Add more entries for testing pagination
    { acl_id: 4, user_id: 4, resource: 'Settings', permission: 'Write' },
    { acl_id: 5, user_id: 5, resource: 'Reports', permission: 'Read' },
    { acl_id: 6, user_id: 6, resource: 'User Management', permission: 'Edit' },
    { acl_id: 7, user_id: 7, resource: 'Admin Panel', permission: 'Write' },
    { acl_id: 8, user_id: 8, resource: 'Dashboard', permission: 'Read' },
    { acl_id: 9, user_id: 9, resource: 'Logs', permission: 'Read' },
    { acl_id: 10, user_id: 10, resource: 'Support', permission: 'Edit' },
  ];

  newEntry: AccessControlEntry = {
    acl_id: 0,
    user_id: 0,
    resource: '',
    permission: '',
  };

  showForm: boolean = false; // Track form visibility
  currentPage: number = 1; // Current page for pagination
  itemsPerPage: number = 5; // Number of items per page

  toggleForm() {
    this.showForm = !this.showForm; // Toggle form visibility
    this.resetNewEntry(); // Reset the form when toggling
  }

  addAclEntry() {
    if (this.newEntry.resource && this.newEntry.permission) {
      this.newEntry.acl_id = this.aclEntries.length + 1; // Simulate auto-increment
      this.aclEntries.push({ ...this.newEntry });
      this.resetNewEntry();
      this.showForm = false; // Hide the form after adding
    }
  }

  deleteAclEntry(acl_id: number) {
    this.aclEntries = this.aclEntries.filter(entry => entry.acl_id !== acl_id);
  }

  resetNewEntry() {
    this.newEntry = { acl_id: 0, user_id: 0, resource: '', permission: '' };
  }

  get totalPages(): number {
    return Math.ceil(this.aclEntries.length / this.itemsPerPage);
  }

  get paginatedEntries(): AccessControlEntry[] {
    const startIndex = (this.currentPage - 1) * this.itemsPerPage;
    return this.aclEntries.slice(startIndex, startIndex + this.itemsPerPage);
  }

  // Add methods to handle pagination
  showStartIndex(): number {
    return (this.currentPage - 1) * this.itemsPerPage + 1;
  }

  showEndIndex(): number {
    return Math.min(this.currentPage * this.itemsPerPage, this.aclEntries.length);
  }

  goToPage(page: number) {
    this.currentPage = page;
  }

  nextPage() {
    if (this.currentPage < this.totalPages) {
      this.currentPage++;
    }
  }

  previousPage() {
    if (this.currentPage > 1) {
      this.currentPage--;
    }
  }
}
