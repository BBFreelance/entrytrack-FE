import { StaffRecordData } from "../staff-record/staff-record";

export interface EntryLogData {
  log_id: number;
  user_id: number;
  staff_id: number;
  entry_time: string;
  exit_time?: string;
  created_at?: string;
  updated_at?: string;
  code?: string;
  staff_record?: StaffRecordData;
}

export interface EntryLog {
  status: string;
  message: string;
  data: EntryLogData; // This should be an array of EntryLogData
}
