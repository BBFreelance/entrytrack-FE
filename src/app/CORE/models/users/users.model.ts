export interface Users {
  id: number;
  staff_id?: number;
  name: string;
  email: string;
  email_verified_at: string | null;
  role: string;
  created_at: string;
  updated_at: string;
}

export interface UsersResponse {
  status: string;
  message : string;
  data: Users;
}