import { Route } from '@angular/router';
import { HomeComponent } from './home.component';
import {AuthGuard} from '../helpers/auth-guard.service';
export const HomeRoutes: Route[] = [
    {
        path: '',
        component: HomeComponent,
        canActivate: [ AuthGuard ],
        children: [
            {
                path: '',
                loadChildren:() => import('../home/dashboard/dashboard.module').then(m => m.DashboardModule)
            },
            {
                path: 'client',
                loadChildren:() => import('../home/client/client.module').then(m => m.ClientModule)
            }
        ],
        
    }
]