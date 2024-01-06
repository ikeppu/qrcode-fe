import { Routes } from '@angular/router';
import { SignUpComponent } from './sign-up/sign-up.component';
import { AdminComponent } from './admin/admin.component';
import { ConsumerDetailsComponent } from './consumer-details/consumer-details.component';
import { isLoginGuard } from './core/guards/is-login.guard';

export const routes: Routes = [
  { path: '', component: SignUpComponent },
  { path: 'admin', component: AdminComponent, canActivate: [isLoginGuard] },
  { path: 'details/:id', component: ConsumerDetailsComponent },
  // TODO: Implement Not-Found page
];
