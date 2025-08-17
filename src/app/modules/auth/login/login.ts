import { Component, inject, signal } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthService } from '../../../common/services/auth-service';
import { Router } from '@angular/router';
import { advancedEmailValidator } from '../../../common/utils/validators';

@Component({
  selector: 'app-login',
  imports: [ReactiveFormsModule],
  templateUrl: './login.html',
  styleUrl: './login.scss'
})
export class Login {
  router = inject(Router);
  fb = inject(FormBuilder);
  authService = inject(AuthService);

  isLoginFlow = signal<boolean>(true);
  isLoading = signal<boolean>(false);
  errorMessage = signal<string | null>(null);

  loginForm = this.fb.nonNullable.group({
    email: ['', [Validators.required, advancedEmailValidator]],
    password: ['', [Validators.required, Validators.minLength(6)]],
  })

  registerForm = this.fb.nonNullable.group({
    username: ['', [Validators.required, Validators.minLength(3)]],
    email: ['', [Validators.required, advancedEmailValidator]],
    password: ['', [Validators.required, Validators.minLength(6)]],
  });

  getErrorMessage(controlName: string): string | null {
    const control = this.isLoginFlow() ? this.loginForm.get(controlName) : this.registerForm.get(controlName);
    if (!control || !control.dirty || control.valid) return null;

    if (control.errors?.['required']) return 'This field is required.';
    if (control.errors?.['advancedEmail']) return 'Please enter a valid email address.';
    if (control.errors?.['minlength']) {
      const requiredLength = control.errors['minlength'].requiredLength;
      return `Minimum length is ${requiredLength} characters.`;
    }
    // Add more error checks as needed
    return 'Invalid value.';
  }

  onRegister() {
    console.log(this.registerForm);
    if (this.registerForm.invalid) {
      this.registerForm.markAllAsDirty();
      return
    }
    this.isLoading.set(true);
    const formValues = this.registerForm.value;
    this.authService.register(
      formValues.email!, formValues.username!, formValues.password!
    ).subscribe({
      next: () => {
        this.isLoading.set(false);
        this.router.navigate(['/']);
      },
      error: (err) => {
        this.errorMessage.set(err.code);
        this.isLoading.set(false);
      }
    });
  }

  onLogin() {
    console.log(this.loginForm);
    if (this.loginForm.invalid) {
      this.loginForm.markAllAsDirty();
      return
    }
    this.isLoading.set(true);
    const formValues = this.loginForm.value;
    this.authService.login(
      formValues.email!, formValues.password!
    ).subscribe({
      next: () => {
        this.isLoading.set(false);
        this.router.navigate(['/']);
      },
      error: (err) => {
        this.errorMessage.set(err.code);
        this.isLoading.set(false);
      }
    });
  }

  toHome() {
    this.router.navigate([''])
  }
}
