import { Routes } from '@angular/router';
import { authGuard } from './Core/guards/auth.guard';

export const routes: Routes = [
  {
    path: '',
    redirectTo: '/auth/login',
    pathMatch: 'full'
  },
  {
    path: 'auth/login',
    loadComponent: () => import('./features/auth/login/login.component').then(m => m.LoginComponent)
  },
  {
    path: 'employee/dashboard',
    canActivate: [authGuard],
    data: { roles: ['Employee', 'Manager', 'HR', 'Admin'] },
    loadComponent: () => import('./features/employee/dashboard/dashboard.component').then(m => m.DashboardComponent)
  },
  {
    path: 'manager/dashboard',
    canActivate: [authGuard],
    data: { roles: ['Manager', 'HR', 'Admin'] },
    loadComponent: () => import('./features/manager/dashboard/dashboard.component').then(m => m.DashboardComponent)
  },
  {
    path: 'admin/dashboard',
    canActivate: [authGuard],
    data: { roles: ['Admin'] },
    loadComponent: () => import('./features/admin/dashboard/dashboard.component').then(m => m.DashboardComponent)
  }
];
