import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface EntryLog {
  log_id: number;
  user_id: number;
  staff_id: number;
  entry_time: string;
  exit_time: string;
}

@Component({
  selector: 'app-security-track-entry-log',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './security-track-entry-log.component.html',
  styleUrls: ['./security-track-entry-log.component.css']
})
export class SecurityTrackEntryLogComponent {
  entryLogs: EntryLog[] = [
    { log_id: 1, user_id: 101, staff_id: 1001, entry_time: '2024-10-01 08:00:00', exit_time: '2024-10-01 17:00:00' },
    { log_id: 2, user_id: 102, staff_id: 1002, entry_time: '2024-10-01 09:00:00', exit_time: '2024-10-01 18:00:00' },
    { log_id: 3, user_id: 103, staff_id: 1003, entry_time: '2024-10-01 07:30:00', exit_time: '2024-10-01 16:30:00' },
    { log_id: 4, user_id: 104, staff_id: 1004, entry_time: '2024-10-01 08:15:00', exit_time: '2024-10-01 17:15:00' },
    { log_id: 5, user_id: 105, staff_id: 1005, entry_time: '2024-10-02 08:45:00', exit_time: '2024-10-02 17:45:00' },
    { log_id: 6, user_id: 106, staff_id: 1006, entry_time: '2024-10-02 09:15:00', exit_time: '2024-10-02 18:15:00' },
    { log_id: 7, user_id: 107, staff_id: 1007, entry_time: '2024-10-02 07:50:00', exit_time: '2024-10-02 16:50:00' },
    { log_id: 8, user_id: 108, staff_id: 1008, entry_time: '2024-10-02 08:05:00', exit_time: '2024-10-02 17:05:00' },
    { log_id: 9, user_id: 109, staff_id: 1009, entry_time: '2024-10-03 09:00:00', exit_time: '2024-10-03 18:00:00' },
    { log_id: 10, user_id: 110, staff_id: 1010, entry_time: '2024-10-03 08:30:00', exit_time: '2024-10-03 17:30:00' },
    { log_id: 11, user_id: 111, staff_id: 1011, entry_time: '2024-10-03 07:45:00', exit_time: '2024-10-03 16:45:00' },
    { log_id: 12, user_id: 112, staff_id: 1012, entry_time: '2024-10-03 08:20:00', exit_time: '2024-10-03 17:20:00' },
    { log_id: 13, user_id: 113, staff_id: 1013, entry_time: '2024-10-04 09:05:00', exit_time: '2024-10-04 18:05:00' },
    { log_id: 14, user_id: 114, staff_id: 1014, entry_time: '2024-10-04 08:10:00', exit_time: '2024-10-04 17:10:00' },
];


  currentPage: number = 1;
  itemsPerPage: number = 7; // Number of logs per page
  totalPages: number = Math.ceil(this.entryLogs.length / this.itemsPerPage); // Calculate total pages
  paginatedEntryLogs: EntryLog[] = [];

  constructor() {
    this.loadEntryLogs(); // Load logs for the current page
  }

  loadEntryLogs(): void {
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
