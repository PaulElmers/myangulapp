// unsaved-changes.guard.ts
import { Injectable } from '@angular/core';
import { CanDeactivate } from '@angular/router';
import { RegisterComponent } from './register.component';

@Injectable({
  providedIn: 'root'
})
export class UnsavedChangesGuard implements CanDeactivate<RegisterComponent> {

  canDeactivate(component: RegisterComponent): boolean {
    if (component.registerForm.dirty && !component.registerForm.submitted) {
      return confirm('У вас є незбережені дані. Ви дійсно хочете залишити сторінку?');
    }
    return true;
  }
}
