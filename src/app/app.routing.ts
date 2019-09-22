import { Routes } from '@angular/router';
import { HomeRoutes } from './home/home.routes';
import { LoginRoutes } from './login/login.routes';

export const routes: Routes = [...HomeRoutes, ...LoginRoutes]