export interface EntryLog {
  log_id: number; // Corresponds to the bigserial primary key
  user_id: number; // Corresponds to the user_id in the table
  staff_id: number; // Corresponds to the staff_id in the table
  entry_time: string; // Corresponds to the entry_time (use string to represent timestamps)
  exit_time?: string; // Corresponds to the exit_time (optional)
  created_at?: string; // Corresponds to the created_at (optional)
  updated_at?: string; // Corresponds to the updated_at (optional)
  code?: string; // Corresponds to the code (optional)
}