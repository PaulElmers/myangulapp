// register.component.ts
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  registerForm: FormGroup;

  constructor(private fb: FormBuilder, private router: Router) {
    this.registerForm = this.fb.group({
      username: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', Validators.required],
      role: ['user', Validators.required]
    }, { validators: this.passwordsMatchValidator });
  }

  passwordsMatchValidator(form: FormGroup) {
    return form.get('password').value === form.get('confirmPassword').value ? null : { passwordMismatch: true };
  }

  onSubmit() {
    if (this.registerForm.valid) {
      // Відправка даних на сервер
      const formData = this.registerForm.value;
      // Умова для фейкового API
      console.log('Відправлено на сервер:', formData);
      // Перенаправлення на сторінку профілю
      this.router.navigate(['/profile'], { state: { user: formData } });
    }
  }
}
