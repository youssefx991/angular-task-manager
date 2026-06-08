import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const myAuthGuardGuard: CanActivateFn = (route, state) => {
  let router = inject(Router);
  let authorized =localStorage.getItem('isLoggedIn') === 'true';
  if (!authorized) {
    router.navigate(['/notfound']);}

  return true;
};
