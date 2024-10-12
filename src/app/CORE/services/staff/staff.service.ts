import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { LoginResponse } from '../../models/login-response/login-response.model';
import { config } from '../../../config';
import { LoginRequest } from '../../models/login-response/login-request.model';
import { Users } from '../../models/users/users.model';
import { jsonHeaders } from '../../http-headers';
import { EntryLog } from '../../models/entry-log/entry-log.model';

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
}
