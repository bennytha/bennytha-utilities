import { Routes } from '@angular/router';
import { unauthGuard } from './common/interceptors/unauth-guard';

export const routes: Routes = [
    {
        path: 'dashboard',
        loadChildren: () => import('./modules/dashboard/routes').then(m => m.routes),
    },
    {
        path: 'auth',
        loadComponent: () => import('./modules/auth/login/login').then(m => m.Login),
        canActivate: [unauthGuard]
    },
    {
        path: '',
        redirectTo: 'dashboard',
        pathMatch: 'full'
    },
];
