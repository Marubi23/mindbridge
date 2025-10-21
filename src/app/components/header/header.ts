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

  navLinks = [
    { path: '/', label: 'Home', icon: 'bi bi-house-door' },
    { path: '/student/dashboard', label: 'Students', icon: 'bi bi-person' },
    { path: '/parent/dashboard', label: 'Parents', icon: 'bi bi-people' },
    { path: '/psychiatrist/dashboard', label: 'Professionals', icon: 'bi bi-heart-pulse' },
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
}
