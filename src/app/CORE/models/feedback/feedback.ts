export interface Feedback {
  status: string; // API response status (e.g., "0000" for success)
  message: string; // API response message
  data?: FeedbackData[]; // An array of feedback entries, each following the `Feedback` structure
}

export interface FeedbackData {
  feedback_id: number; // Corresponds to the feedback primary key in the database
  user_id: number; // ID of the user who submitted the feedback
  feedback_text: string; // The feedback text content
  date_submitted: string; // The date when the feedback was submitted (as a string to handle timestamps)
  created_at?: string; // When the feedback was created (optional)
  updated_at?: string; // When the feedback was last updated (optional)
}
