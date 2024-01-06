import { inject } from '@angular/core';
import { CanActivateFn } from '@angular/router';
import { AuthService } from '../services/auth.service';

export const isLoginGuard: CanActivateFn = (route, state) => {
  // use inject to inject some service
  const authService: AuthService = inject(AuthService);
  return authService.isLogin;
};
