import { Route } from '@angular/router';
import { LoginComponent } from './login.component';
import { AuthGuard } from '../helpers/auth-guard.service';
export const LoginRoutes: Route[] = [
  {
    path: 'login',
    component: LoginComponent,
    //canActivate: [AuthGuard]
  }
];