import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { LoginResponse } from '../../models/login-response/login-response.model';
import { jsonHeaders } from '../../http-headers';
import { config } from '../../../config';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private httpClient: HttpClient) {}

  login(email: string, password: string): Observable<LoginResponse> {
    const body = { email, password };
    return this.httpClient.post<LoginResponse>(
      `${config.SERVER_API_ENDPOINT}/login`,
      body,
      jsonHeaders
    );
  }

}
