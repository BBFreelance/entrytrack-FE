import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { LoginResponse } from '../../models/login-response/login-response.model';
import { config } from '../../../config';
import { LoginRequest } from '../../models/login-response/login-request.model';
import { Users } from '../../models/users/users.model';
import { jsonHeaders } from '../../http-headers';
import { EntryLog } from '../../models/entry-log/entry-log.model';
import { Feedback, FeedbackData } from '../../models/feedback/feedback';

@Injectable({
  providedIn: 'root',
})
export class StaffService {
  constructor(private httpClient: HttpClient) {}

  login(email: string, password: string): Observable<LoginResponse> {
    const body = { email, password };
    return this.httpClient.get<LoginResponse>(
      `${config.SERVER_API_ENDPOINT}/login`
    );
  }

  getEntryLogList(user_id:string): Observable<EntryLog[]> {
    return this.httpClient.get<EntryLog[]>(`${config.SERVER_API_ENDPOINT}/entry-logs/my/${user_id}`, {
    });
  }

  getFeedbackByUserid(user_id:string): Observable<Feedback[]> {
    return this.httpClient.get<Feedback[]>(`${config.SERVER_API_ENDPOINT}/feedback/user/${user_id}`, {
    });
  }

  deleteFeedbackById(feedback_id:string): Observable<Feedback[]> {
    return this.httpClient.delete<Feedback[]>(`${config.SERVER_API_ENDPOINT}/feedback/${feedback_id}`, {
    });
  }
  
  createFeedback(feedbackData:FeedbackData): Observable<Feedback[]> {
    return this.httpClient.post<Feedback[]>(`${config.SERVER_API_ENDPOINT}/feedback`, feedbackData, jsonHeaders );
  }
}
