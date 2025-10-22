import { Component, HostListener, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Router } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './header.html',
  styleUrls: ['./header.css']
})
export class HeaderComponent implements OnInit {
  isScrolled = false;
  scrollProgress = 0;

  // Updated nav links to match feature-based MindBridge structure
  navLinks = [
    { path: '/', label: 'Home', icon: 'bi bi-house-door' },
    { path: '/student', label: 'Student', icon: 'bi bi-person' },
    { path: '/parent', label: 'Parent', icon: 'bi bi-people' },
    { path: '/psychiatrist', label: 'Professional', icon: 'bi bi-heart-pulse' },
    { path: '/login', label: 'Login', icon: 'bi bi-box-arrow-in-right' },
    { path: '/register', label: 'Register', icon: 'bi bi-person-plus' }
  ];

  constructor(private router: Router) {}

  ngOnInit(): void {}

  @HostListener('window:scroll', [])
  onWindowScroll(): void {
    const scrollTop = window.scrollY || document.documentElement.scrollTop;
    const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;

    this.scrollProgress = (scrollTop / scrollHeight) * 100;
    this.isScrolled = scrollTop > 50;
  }

  navigateTo(path: string): void {
    this.router.navigate([path]);
  }

  // Optional: method to check active route for styling active link
  isActive(path: string): boolean {
    return this.router.url.startsWith(path);
  }
}
