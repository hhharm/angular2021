import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserInfoService {
  private isAdmin$ = new BehaviorSubject<boolean>(false);

  getIsAdmin(): Observable<boolean> {
    return this.isAdmin$.asObservable();
  }

  toggleIsAdmin(): void {
    this.isAdmin$.next(!this.isAdmin$.value);
  }
}
