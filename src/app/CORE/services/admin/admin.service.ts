import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { config } from '../../../config';
import { Users } from '../../models/users/users.model';
import { jsonHeaders } from '../../http-headers';
import { AccessControlEntry } from '../../models/access-control/access-control';


// Define a User data type for TypeScript to understand the expected structure of the user data.
export interface UserData {
  name: string;
  email: string;
  role: string;
  password: string;
}

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(private httpClient: HttpClient) {}

  createUser(userData: UserData): Observable<Users[]> {
    return this.httpClient.post<Users[]>(`${config.SERVER_API_ENDPOINT}/users`, userData, jsonHeaders);
  }

  getAllUsers(): Observable<Users[]> {
    return this.httpClient.get<Users[]>(`${config.SERVER_API_ENDPOINT}/users`);
  }

  deleteUserById(id: number): Observable<any> {
  return this.httpClient.delete(`${config.SERVER_API_ENDPOINT}/users/${id}`);
  }

  updateUser(userData: Users): Observable<Users> {
    return this.httpClient.put<Users>(`${config.SERVER_API_ENDPOINT}/users/${userData.id}`, userData);
  }

  getUserById(id: number): Observable<Users> {
    return this.httpClient.get<Users>(`${config.SERVER_API_ENDPOINT}/user/${id}`);
  }

  getAccessControlList(): Observable<AccessControlEntry[]> {
    return this.httpClient.get<AccessControlEntry[]>(`${config.SERVER_API_ENDPOINT}/access-control-lists`);
  }

  /**
   * Fetch the system setting by ID
   * @param id - The ID of the system setting
   * @returns An Observable with the dark_mode value
   */
  getSystemSettingById(id: number): Observable<{ dark_mode: boolean }> {
    return this.httpClient.get<{ dark_mode: boolean }>(`${config.SERVER_API_ENDPOINT}/system-settings/${id}`);
  }

  // Update a system setting by ID
  updateSystemSetting(id: number, data: { dark_mode: boolean }): Observable<void> {
    return this.httpClient.put<void>(`${config.SERVER_API_ENDPOINT}/system-settings/${id}`, data);
  }

}
