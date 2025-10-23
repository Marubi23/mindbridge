import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, RouterOutlet, Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';
import { HeaderComponent } from './components/header/header';
import { FooterComponent } from './components/footer/footer';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule, 
    RouterOutlet, 
    RouterModule,
    HeaderComponent,     
    FooterComponent
  ],
  template: `
    <app-header></app-header>
    <main>
      <router-outlet></router-outlet>
    </main>
    <app-footer *ngIf="!hideFooter"></app-footer>
  `,
  styleUrls: ['./app.css']
})
export class AppComponent {
  title = 'mindbridge-company';
  hideFooter = false;

  constructor(private router: Router) {
    this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe((event: any) => {
        const noFooterRoutes = ['/login', '/register'];
        this.hideFooter = noFooterRoutes.includes(event.urlAfterRedirects);
      });
  }
}
