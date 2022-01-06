import { Injectable } from '@angular/core';
import { delay, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  role = "ANONYMUS";

  isLoggedIn() {
    if (this.role = "ADMIN") {
      return of(true).pipe(delay(1000));
    } else {
      return of(false).pipe(delay(1000));
    }
  }

  isConnected() {
    if (this.role = "ADMIN" || "USER") {
      return of(true).pipe(delay(1000));
    } else {
      return of(false).pipe(delay(1000));
    }
  }
}
