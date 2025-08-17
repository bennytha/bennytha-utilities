import { Routes } from '@angular/router';
import { Pagelayout } from './pagelayout/pagelayout';
export const routes: Routes = [
  {
    path: '',
    component: Pagelayout,
    children: [
      {
        path: 'home',
        loadComponent: () => import('../home/home').then(m => m.Home),
      },
      {
        path: 'apps',
        loadComponent: () => import('../application/application-home/application-home').then(m => m.ApplicationHome),
      },
      {
        path: 'blogs',
        loadComponent: () => import('../blog/blog-home/blog-home').then(m => m.BlogHome),
      },
      {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
      },
    ]
  },
];
