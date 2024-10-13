import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms'; // Import FormsModule for two-way data binding
import { Router } from '@angular/router';
import { StaffService } from '../../CORE/services/staff/staff.service';
import { HttpClientModule } from '@angular/common/http';
import { FeedbackData } from '../../CORE/models/feedback/feedback';

export interface Feedback {
  feedback_id: number; // Primary key
  user_id: number; // Foreign key referencing User entity
  staff_id: number; // Foreign key referencing StaffRecord entity
  feedback_text: string; // Text of the feedback
  date_submitted: Date; // Date when the feedback was submitted
}

@Component({
  selector: 'app-feedback-form',
  standalone: true,
  imports: [FormsModule, HttpClientModule], // Include FormsModule here
  templateUrl: './feedback-form.component.html',
  styleUrls: ['./feedback-form.component.css'], // Fixed to styleUrls
  providers: [StaffService],
})
export class FeedbackFormComponent {
  feedbackText: string = ''; // Text input for feedback
  userId: number = 34; // Example user_id (replace with actual logged-in user id)
  staffId: number = 1; // Example staff_id (replace with actual staff id)

  constructor(private staffService: StaffService, private router: Router) {}

  // Method to submit feedback
  submitFeedback() {
    if (this.feedbackText.trim()) {
      // Construct feedback data
      const feedbackData: FeedbackData = {
        feedback_id: 0,
        user_id: this.userId, // User ID (replace with actual logged-in user ID)
        staff_id: this.staffId, // Staff ID
        feedback_text: this.feedbackText, // Feedback text entered by the user
        date_submitted: new Date().toISOString(), // Current date and time in ISO format
      };

      // Call the feedback service to submit the feedback
      this.staffService.createFeedback(feedbackData).subscribe(
        (feedback: any) => {
          if (feedback.status === '0000') {
            this.feedbackText = ''; // Reset the input field
            alert('Feedback submitted successfully!');
            this.router.navigate(['/staff-feedback-list']); // Navigate to feedback list page
          }
        },
        (error) => {
          console.error('Error submitting feedback:', error);
        }
      );
    } else {
      alert('Please enter feedback before submitting.');
    }
  }
}
