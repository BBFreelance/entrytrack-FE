import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { StaffService } from '../../CORE/services/staff/staff.service';
import { HttpClientModule } from '@angular/common/http';
import { FeedbackData } from '../../CORE/models/feedback/feedback';
import { getUserSession } from '../../HELPER/user-service';
import { Users } from '../../CORE/models/users/users.model';

// src/app/models/feedback.model.ts
export interface Feedback {
  feedback_id: number; // Primary key
  user_id: number; // Foreign key referencing User entity
  staff_id: number; // Foreign key referencing StaffRecord entity
  feedback_text: string; // Text of the feedback
  date_submitted: Date; // Date when the feedback was submitted
}

@Component({
  selector: 'app-feedback-list',
  standalone: true,
  imports: [CommonModule, HttpClientModule],
  templateUrl: './staff-feedback-list.component.html',
  styleUrls: ['./staff-feedback-list.component.css'],
  providers: [StaffService],
})
export class StaffFeedbackListComponent implements OnInit {
  userData?: Users;
  feedbackList: FeedbackData[] = [];
  isLoading: boolean = true;

  constructor(private router: Router, private staffService: StaffService) {}

  ngOnInit(): void {
    this.userData = getUserSession();
    this.loadFeedbackList();
    console.log('hello');
  }

  loadFeedbackList(): void {
    const userId: string = this.userData!.id.toString(); // Replace this with the actual user ID
    this.staffService.getFeedbackByUserid(userId).subscribe(
      (feedback: any) => {
        this.feedbackList = feedback.data;
        console.log('this.feedbackList', this.feedbackList);
        this.isLoading = false;
      },
      (error) => {
        console.error('Error fetching entry logs:', error);
        this.isLoading = false;
      }
    );
  }

  currentPage = 1;
  itemsPerPage = 4; // Number of feedback items per page
  searchText = '';

  // Method to delete feedback
  deleteFeedback(feedback_id: string) {
    this.isLoading = true;
    console.log('deleting feedback...');
    this.staffService.deleteFeedbackById(feedback_id).subscribe(
      (feedback: any) => {
        if (feedback.status === '0000') {
          alert('Successfully delete');
          this.loadFeedbackList();
        }
      },
      (error) => {
        console.error('Error fetching entry logs:', error);
        this.isLoading = false;
      }
    );
  }

  // Get the total number of pages based on feedback length
  get totalPages() {
    return Math.ceil(this.filteredFeedbackList.length / this.itemsPerPage);
  }

  // Get the filtered feedback list based on search text
  get filteredFeedbackList() {
    return this.feedbackList.filter((feedback) =>
      feedback.feedback_text
        .toLowerCase()
        .includes(this.searchText.toLowerCase())
    );
  }

  // Get the feedback for the current page
  // get paginatedFeedbackList() {
  //   const startIndex = (this.currentPage - 1) * this.itemsPerPage;
  //   return this.filteredFeedbackList.slice(
  //     startIndex,
  //     startIndex + this.itemsPerPage
  //   );
  // }

  // Method to create a new user (this could also open a modal)
  createFeedback(): void {
    this.router.navigate(['/feedback-form']);
    // Implement your logic for creating a new user here, e.g., opening a modal
  }
}
