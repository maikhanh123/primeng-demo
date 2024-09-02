import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor() {}

  getUsers() : Observable<User[]> {
    return of([{ name: 'John Doe' }, { name: 'Jane Doe' }]);
  }
}
