import { Route } from '@angular/router';
import { LoginComponent } from './login.component';
import { AuthGuard } from '../helpers/auth.guard.ts.service';
export const LoginRoutes: Route[] = [
  {
    path: 'login',
    component: LoginComponent,
    //canActivate: [AuthGuard]
  }
];