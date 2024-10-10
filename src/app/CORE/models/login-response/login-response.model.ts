import { Users } from "../users/users.model";

export interface LoginResponse {
  status: string;
  message: string;
  data?: Users; // Adjust the type of data based on what the API returns
}
