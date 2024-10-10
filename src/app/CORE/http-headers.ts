import { HttpHeaders } from '@angular/common/http';

export const jsonHeaders = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  }),
};
