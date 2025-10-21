import { Routes } from '@angular/router';

export const routes: Routes = [
  { 
    path: '', 
    loadComponent: () => import('./components/home/home').then(c => c.HomeComponent) 
  },
  { 
    path: 'student', 
    loadComponent: () => import('./components/student-portal/student-portal').then(c => c.StudentPortal) 
  },
  { 
    path: 'parent', 
    loadComponent: () => import('./components/parent-portal/parent-portal').then(c => c.ParentPortal) 
  },
  { 
    path: 'psychiatrist', 
    loadComponent: () => import('./components/psychiatrist-portal/psychiatrist-portal').then(c => c.PsychiatristPortal) 
  },
  { 
    path: 'login', 
    loadComponent: () => import('./components/login/login').then(c => c.Login) 
  },
  { 
    path: 'register', 
    loadComponent: () => import('./components/register/register').then(c => c.Register) 
  },
  { path: '**', redirectTo: '' }
];