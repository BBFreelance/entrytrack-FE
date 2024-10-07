import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

// src/app/models/feedback.model.ts
export interface Feedback {
  feedback_id: number; // Primary key
  user_id: number;     // Foreign key referencing User entity
  staff_id: number;    // Foreign key referencing StaffRecord entity
  feedback_text: string; // Text of the feedback
  date_submitted: Date;  // Date when the feedback was submitted
}

@Component({
  selector: 'app-feedback-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './staff-feedback-list.component.html',
  styleUrls: ['./staff-feedback-list.component.css'],
})
export class StaffFeedbackListComponent  {
  constructor(private router: Router) {}
  feedbackList: Feedback[] = [
    {
      feedback_id: 1,
      user_id: 1,
      staff_id: 1,
      feedback_text: 'Great app! Very user-friendly.',
      date_submitted: new Date('2024-09-30'),
    },
    {
      feedback_id: 2,
      user_id: 2,
      staff_id: 1,
      feedback_text: 'Needs some improvements on the loading speed.',
      date_submitted: new Date('2024-09-29'),
    },
    {
      feedback_id: 3,
      user_id: 3,
      staff_id: 2,
      feedback_text: 'I love the new features added in the last update.',
      date_submitted: new Date('2024-09-28'),
    },
    {
      feedback_id: 4,
      user_id: 1,
      staff_id: 2,
      feedback_text: 'Very helpful customer support!',
      date_submitted: new Date('2024-09-27'),
    },
    {
      feedback_id: 5,
      user_id: 4,
      staff_id: 3,
      feedback_text: 'The interface could be more intuitive.',
      date_submitted: new Date('2024-09-26'),
    },
    {
      feedback_id: 6,
      user_id: 2,
      staff_id: 3,
      feedback_text: 'Had a great experience using this feature!',
      date_submitted: new Date('2024-09-25'),
    },
    {
      feedback_id: 7,
      user_id: 5,
      staff_id: 1,
      feedback_text: 'The app crashes occasionally, please fix it.',
      date_submitted: new Date('2024-09-24'),
    },
    {
      feedback_id: 8,
      user_id: 6,
      staff_id: 2,
      feedback_text: 'Excellent service, keep up the good work!',
      date_submitted: new Date('2024-09-23'),
    },
    {
      feedback_id: 9,
      user_id: 4,
      staff_id: 3,
      feedback_text: 'Could use more tutorials for beginners.',
      date_submitted: new Date('2024-09-22'),
    },
    {
      feedback_id: 10,
      user_id: 7,
      staff_id: 2,
      feedback_text: 'Love the new dark mode feature!',
      date_submitted: new Date('2024-09-21'),
    },
    {
      feedback_id: 11,
      user_id: 8,
      staff_id: 3,
      feedback_text: 'Sometimes the notifications are delayed.',
      date_submitted: new Date('2024-09-20'),
    },
    {
      feedback_id: 12,
      user_id: 5,
      staff_id: 1,
      feedback_text: 'Overall, I am very satisfied with this app.',
      date_submitted: new Date('2024-09-19'),
    },
    {
      feedback_id: 13,
      user_id: 3,
      staff_id: 2,
      feedback_text: 'The help section is very informative.',
      date_submitted: new Date('2024-09-18'),
    },
    {
      feedback_id: 14,
      user_id: 6,
      staff_id: 1,
      feedback_text: 'Please add more customization options.',
      date_submitted: new Date('2024-09-17'),
    },
    {
      feedback_id: 15,
      user_id: 7,
      staff_id: 2,
      feedback_text: 'I experienced a bug during my last session.',
      date_submitted: new Date('2024-09-16'),
    },
    // More dummy data added here
  ];

  currentPage = 1;
  itemsPerPage = 4; // Number of feedback items per page
  searchText = '';

  // Method to delete feedback
  deleteFeedback(feedback_id: number) {
    this.feedbackList = this.feedbackList.filter(feedback => feedback.feedback_id !== feedback_id);
  }

  // Get the total number of pages based on feedback length
  get totalPages() {
    return Math.ceil(this.filteredFeedbackList.length / this.itemsPerPage);
  }

  // Get the filtered feedback list based on search text
  get filteredFeedbackList() {
    return this.feedbackList.filter(feedback => feedback.feedback_text.toLowerCase().includes(this.searchText.toLowerCase()));
  }

  // Get the feedback for the current page
  get paginatedFeedbackList() {
    const startIndex = (this.currentPage - 1) * this.itemsPerPage;
    return this.filteredFeedbackList.slice(startIndex, startIndex + this.itemsPerPage);
  }

   // Method to create a new user (this could also open a modal)
   createFeedback(): void {
    this.router.navigate(['/feedback-form']);
    // Implement your logic for creating a new user here, e.g., opening a modal
  }

}
