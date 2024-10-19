// auth.guard.ts
import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private router: Router) {}

  canActivate(): boolean {
    const userRole = localStorage.getItem('role'); // Використовуємо збережену роль
    if (userRole === 'admin') {
      return true;
    } else {
      this.router.navigate(['/']); // Якщо роль не admin
      return false;
    }
  }
}
