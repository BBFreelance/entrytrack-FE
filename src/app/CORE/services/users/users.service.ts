import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { LoginResponse } from '../../models/login-response/login-response.model';
import { config } from '../../../config';
import { LoginRequest } from '../../models/login-response/login-request.model';
import { Users, UsersResponse } from '../../models/users/users.model';
import { jsonHeaders } from '../../http-headers';
import { EntryLog } from '../../models/entry-log/entry-log.model';
import { Feedback, FeedbackData } from '../../models/feedback/feedback';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  constructor(private httpClient: HttpClient) {}

  login(email: string, password: string): Observable<LoginResponse> {
    const body = { email, password };
    return this.httpClient.get<LoginResponse>(
      `${config.SERVER_API_ENDPOINT}/login`
    );
  }
  
  updateProfile(usersData:Users): Observable<UsersResponse> {
    return this.httpClient.put<UsersResponse>(`${config.SERVER_API_ENDPOINT}/users/${usersData.id}`, usersData, jsonHeaders );
  }
}
