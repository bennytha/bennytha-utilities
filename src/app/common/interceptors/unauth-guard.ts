import { inject } from '@angular/core';
import { Auth } from '@angular/fire/auth';
import { CanActivateFn, Router } from '@angular/router';

export const unauthGuard: CanActivateFn = (route, state) => {
  const auth = inject(Auth);
  const router = inject(Router);

  return new Promise<boolean>((resolve) => {
    auth.onAuthStateChanged(user => {
      if (user) {
        console.log('is user');

        console.log(user);

        router.navigate(['']);
        resolve(false);
      } else {
        console.log('no user');
        resolve(true);
      }
    });
  });
};
