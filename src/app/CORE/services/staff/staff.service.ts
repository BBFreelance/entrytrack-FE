import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { LoginResponse } from '../../models/login-response/login-response.model';
import { config } from '../../../config';
import { LoginRequest } from '../../models/login-response/login-request.model';
import { Users } from '../../models/users/users.model';
import { jsonHeaders } from '../../http-headers';

@Injectable({
  providedIn: 'root',
})
export class StaffService {
  constructor(private httpClient: HttpClient) {}

  
}
