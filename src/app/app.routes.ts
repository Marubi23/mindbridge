import { Routes } from '@angular/router';

export const routes: Routes = [
  { 
    path: '', 
    loadComponent: () => import('./components/home/home').then(c => c.HomeComponent) 
  },
  { 
    path: 'student', 
    loadComponent: () => import('./components/student-landing/student-landing').then(c => c.StudentLandingComponent) 
  },
  { 
    path: 'parent', 
    loadComponent: () => import('./components/parent-landing/parent-landing').then(c => c.ParentLandingComponent) 
  },
  { 
    path: 'psychiatrist', 
    loadComponent: () => import('./components/professional-landing/professional-landing').then(c => c.ProfessionalLandingComponent) 
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