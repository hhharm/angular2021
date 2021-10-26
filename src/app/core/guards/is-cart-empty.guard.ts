import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { CartService } from 'src/app/cart/services/cart.service';

@Injectable({
  providedIn: 'root',
})
export class IsCartEmptyGuard implements CanActivate {
  constructor(private cart: CartService) {}

  canActivate(): Observable<boolean> {
    return this.cart.isEmptyCart().pipe(map((empty) => !empty));
  }
}
