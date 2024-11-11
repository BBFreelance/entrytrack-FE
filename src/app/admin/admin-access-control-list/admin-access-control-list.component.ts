import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms'; // Import FormsModule
import { CommonModule } from '@angular/common';
import { AdminService } from '../../CORE/services/admin/admin.service';
import { HttpClientModule } from '@angular/common/http';
import { AccessControlEntry } from '../../CORE/models/access-control/access-control';

// interface AccessControlEntry {
//   acl_id: number;
//   user_id: number;
//   resource: string;
//   permission: string;
// }

@Component({
  selector: 'app-admin-access-control-list',
  standalone: true,
  imports: [FormsModule, CommonModule, HttpClientModule],
  templateUrl: './admin-access-control-list.component.html',
  styleUrls: ['./admin-access-control-list.component.css'],
  providers: [AdminService],
})
export class AdminAccessControlListComponent implements OnInit  {
  aclEntries: AccessControlEntry[] = [];
  currentPage: number = 1;
  itemsPerPage: number = 5;
  showForm: boolean = false; // Track form visibility
  loading: boolean = false; // Loading state

  constructor(private adminService: AdminService) {}

  ngOnInit(): void {
    this.fetchAclEntries();
  }

  fetchAclEntries(): void {
    this.loading = true;
    this.adminService.getAccessControlList().subscribe(
      (data) => {
        this.aclEntries = data;
        this.loading = false;
      },
      (error) => {
        console.error('Error fetching ACL entries:', error);
        this.loading = false;
      }
    );
  }

  newEntry: AccessControlEntry = {
    acl_id: 0,
    user_id: 0,
    resource: '',
    permission: '',
  };

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
