export interface StaffRecordData {
  log_id: number;
  user_id: number;
  staff_id: number;
  entry_time: string;
  exit_time?: string;
  created_at?: string;
  updated_at?: string;
  code?: string;
}

export interface StaffRecord {
  status: string;
  message: string;
  data: StaffRecordData; // This should be an array of EntryLogData
}
