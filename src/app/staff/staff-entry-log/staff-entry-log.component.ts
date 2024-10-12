import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EntryLog, EntryLogData } from '../../CORE/models/entry-log/entry-log.model';
import { StaffService } from '../../CORE/services/staff/staff.service';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-staff-entry-log',
  standalone: true,
  imports: [CommonModule, HttpClientModule],
  templateUrl: './staff-entry-log.component.html',
  styleUrls: ['./staff-entry-log.component.css'],
  providers: [StaffService],
})
export class StaffEntryLogComponent {
  entryLogs: EntryLogData[] = []; 

  currentPage: number = 1;
  itemsPerPage: number = 7; // Number of logs per page
  totalPages: number = Math.ceil(this.entryLogs.length / this.itemsPerPage); // Calculate total pages
  paginatedEntryLogs: EntryLogData[] = [];

  constructor(private staffService: StaffService) {}

  ngOnInit(): void {
    this.loadEntryLogs(); // Load logs when the component is initialized
  }

  loadEntryLogs(): void {
    const userId = '34'; // Replace this with the actual user ID
    this.staffService.getEntryLogList(userId).subscribe(
      (logs: any) => {
        // Expecting logs to be of type EntryLog
        this.entryLogs = logs.data; // Now logs.data should be correctly recognized as EntryLogData[]
        this.paginatedEntryLogs = logs.data;
        this.totalPages = Math.ceil(this.entryLogs.length / this.itemsPerPage); // Calculate total pages
        // this.updatePaginatedLogs(); // Load logs for the current page
        console.log('logs', logs);
        console.log('this.entryLogs', this.entryLogs);
      },
      (error) => {
        console.error('Error fetching entry logs:', error);
      }
    );
  }

  // updatePaginatedLogs(): void {
  //   const startIndex = (this.currentPage - 1) * this.itemsPerPage;
  //   const endIndex = startIndex + this.itemsPerPage;
  //   this.paginatedEntryLogs = this.entryLogs.slice(startIndex, endIndex); // Slice logs for the current page
  // }

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
      this.loadEntryLogs(); // Load logs for the new page
    }
  }

  nextPage(): void {
    if (this.currentPage < this.totalPages) {
      this.currentPage++;
      this.loadEntryLogs(); // Load logs for the new page
    }
  }
}
