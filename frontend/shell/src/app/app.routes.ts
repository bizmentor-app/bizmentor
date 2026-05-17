import { Routes } from '@angular/router';

export const routes: Routes = [
    {path: '', redirectTo: '/dashboard', pathMatch: 'full'},
    {path: '/dashboard', loadComponent: () => import('./pages/dashboard/dashboard').then(m => m.Dashboard) },
    {path: '/mentors', loadComponent: () => import('./pages/mentor/mentor').then(m => m.Mentor) },
    {path: '/learning', loadComponent: () => import('./pages/learning/learning').then(m => m.Learning) },
    {path: '/documents', loadComponent: () => import('./pages/documents/documents').then(m => m.Documents) },
    {path: '**', redirectTo: '/dashboard' }
];
