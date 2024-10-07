import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms'; // Import FormsModule for two-way data binding
import { Router } from '@angular/router';

export interface Feedback {
  feedback_id: number; // Primary key
  user_id: number;     // Foreign key referencing User entity
  staff_id: number;    // Foreign key referencing StaffRecord entity
  feedback_text: string; // Text of the feedback
  date_submitted: Date;  // Date when the feedback was submitted
}

@Component({
  selector: 'app-feedback-form',
  standalone: true,
  imports: [FormsModule], // Include FormsModule here
  templateUrl: './feedback-form.component.html',
  styleUrls: ['./feedback-form.component.css'] // Fixed to styleUrls
})

export class FeedbackFormComponent {

  constructor(private router: Router) {}

  feedbackText: string = ''; // Text input for feedback
  userId: number = 1;        // Example user_id (replace with actual logged-in user id)
  staffId: number = 1;       // Example staff_id (replace with actual staff id)

  // Method to submit feedback
  submitFeedback() {
    if (this.feedbackText.trim()) {
      alert(`Feedback submitted: ${this.feedbackText}`);
      this.feedbackText = ''; // Reset the input field

      this.router.navigate(['/staff-feedback-list']);

    } else {
      alert('Please enter feedback before submitting.');

      this.router.navigate(['/staff-feedback-list']);
    }
  }
}
