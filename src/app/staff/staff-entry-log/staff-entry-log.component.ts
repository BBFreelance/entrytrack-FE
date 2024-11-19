import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  EntryLog,
  EntryLogData,
} from '../../CORE/models/entry-log/entry-log.model';
import { StaffService } from '../../CORE/services/staff/staff.service';
import { HttpClientModule } from '@angular/common/http';
import { getUserSession } from '../../HELPER/user-service';
import { Users } from '../../CORE/models/users/users.model';
import { NavbarComponent } from '../../navbar/navbar.component';

@Component({
  selector: 'app-staff-entry-log',
  standalone: true,
  imports: [CommonModule, HttpClientModule, NavbarComponent],
  templateUrl: './staff-entry-log.component.html',
  styleUrls: ['./staff-entry-log.component.css'],
  providers: [StaffService],
})
export class StaffEntryLogComponent {
  userData?: Users;
  entryLogs: EntryLogData[] = [];
  currentPage: number = 1;
  itemsPerPage: number = 8; // Number of logs per page
  totalPages: number = 0; // Total pages will be calculated after loading logs
  paginatedEntryLogs: EntryLogData[] = [];
  isLoading: boolean = true; // Add loading state

  constructor(private staffService: StaffService) {}

  ngOnInit(): void {
    this.userData = getUserSession();
    console.log('User Data:', this.userData);
    this.loadEntryLogs(); // Load logs when the component is initialized
  }

  loadEntryLogs(): void {
    const userId: string = this.userData!.id.toString(); // Replace this with the actual user ID

    this.staffService.getEntryLogList(userId).subscribe(
      (logs: any) => {
        this.entryLogs = logs.data; // Load all logs data
        this.totalPages = Math.ceil(this.entryLogs.length / this.itemsPerPage); // Calculate total pages
        this.updatePaginatedLogs(); // Update the current page logs
        console.log('Fetched Logs:', logs);
        this.isLoading = false; // Set loading to false after data is fetched
      },
      (error) => {
        console.error('Error fetching entry logs:', error);
        this.isLoading = false; // Also stop loading on error
      }
    );
  }

  updatePaginatedLogs(): void {
    const startIndex = (this.currentPage - 1) * this.itemsPerPage;
    const endIndex = startIndex + this.itemsPerPage;
    this.paginatedEntryLogs = this.entryLogs.slice(startIndex, endIndex); // Slice logs for the current page
  }

  createEntryLog(): void {
    console.log('Create new entry log logic goes here');
    // Implement your logic for creating a new entry log here
  }

  viewLog(logId: number): void {
    console.log('View log with ID:', logId);
    // Implement logic to view the entry log
  }

  editLog(logId: number): void {
    console.log('Edit log with ID:', logId);
    // Implement logic to edit the entry log
  }

  previousPage(): void {
    if (this.currentPage > 1) {
      this.currentPage--;
      this.updatePaginatedLogs(); // Update paginated logs for the new page
    }
  }

  nextPage(): void {
    if (this.currentPage < this.totalPages) {
      this.currentPage++;
      this.updatePaginatedLogs(); // Update paginated logs for the new page
    }
  }
}
