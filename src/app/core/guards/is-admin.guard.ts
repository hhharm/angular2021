import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { UserInfoService } from '../services/user-info.service';

@Injectable({
  providedIn: 'root',
})
export class IsAdminGuard implements CanActivate {
  constructor(private router: Router, private userService: UserInfoService) {}

  canActivate(): Observable<boolean> | boolean {
    return this.userService.getIsAdmin().pipe(
      tap((isAdmin) => {
        if (!isAdmin) {
          void this.router.navigateByUrl('/error/forbidden');
        }
      })
    );
  }
}
