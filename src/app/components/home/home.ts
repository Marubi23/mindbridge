import { Component, OnInit, AfterViewInit, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { FontAwesomeModule, FaIconLibrary } from '@fortawesome/angular-fontawesome';
import {
  faBrain,
  faChartLine,
  faUserDoctor,
  faPeopleGroup,
  faVrCardboard
} from '@fortawesome/free-solid-svg-icons';

// 👇 Import the Accessibility Component
import { AccessibilityComponent } from '../accessibility/accessibility';

@Component({
  selector: 'app-home',
  standalone: true,
  // 👇 Add AccessibilityComponent to imports
  imports: [CommonModule, FontAwesomeModule, AccessibilityComponent],
  templateUrl: './home.html',
  styleUrls: ['./home.css']
})
export class HomeComponent implements OnInit, AfterViewInit {
  private videoElement!: HTMLVideoElement;

  features = [
    { title: 'Adaptive Learning', text: 'AI-driven personalization molds lessons around each learner’s rhythm.', icon: 'brain', color: '#00d4ff' },
    { title: 'Parental Insights', text: 'Smart dashboards turn progress data into visuals parents can instantly understand.', icon: 'chart-line', color: '#a259ff' },
    { title: 'Professional Guidance', text: 'Behavioral analytics help psychiatrists identify trends and refine learning paths.', icon: 'user-doctor', color: '#0077ff' },
    { title: 'Community Impact', text: 'Connecting families, educators, and professionals to create collective progress.', icon: 'people-group', color: '#ff5abf' },
    { title: 'Immersive Experience', text: 'Smooth transitions, subtle motions, and futuristic visuals enhance engagement.', icon: 'vr-cardboard', color: '#3cff9f' }
  ];

  stats = [
    { value: '100+', label: 'Psychiatrists' },
    { value: '50+', label: 'Schools Engaged' }
  ];

  constructor(private faLibrary: FaIconLibrary, private router: Router) {
    this.faLibrary.addIcons(
      faBrain,
      faChartLine,
      faUserDoctor,
      faPeopleGroup,
      faVrCardboard
    );
  }

  ngOnInit(): void {
    this.revealOnScroll();
  }

  ngAfterViewInit(): void {
    this.initializeVideo();
  }

  /* ============ VIDEO LOGIC ============ */
  private initializeVideo(): void {
    this.videoElement = document.querySelector('.hero-video') as HTMLVideoElement;
    if (this.videoElement) {
      this.videoElement.muted = true;
      this.videoElement.loop = true;
      this.videoElement.playsInline = true;
      this.videoElement.autoplay = true;

      const playPromise = this.videoElement.play();
      if (playPromise !== undefined) {
        playPromise.catch(() => setTimeout(() => this.videoElement.play(), 800));
      }
    }
  }

  /* ============ SCROLL ANIMATIONS ============ */
  @HostListener('window:scroll', [])
  onScroll(): void {
    this.revealOnScroll();
    this.applyParallax();
  }

  private revealOnScroll(): void {
    const reveals = document.querySelectorAll('.reveal');
    const windowHeight = window.innerHeight;

    reveals.forEach((el) => {
      const elementTop = (el as HTMLElement).getBoundingClientRect().top;
      if (elementTop < windowHeight - 100) {
        el.classList.add('active');
      } else {
        el.classList.remove('active');
      }
    });
  }

  private applyParallax(): void {
    if (!this.videoElement) return;
    const scrollTop = window.scrollY || document.documentElement.scrollTop;
    const offset = Math.min(scrollTop * 0.25, 150);
    this.videoElement.style.transform = `translateY(${offset}px) scale(1.05)`;
  }

  /* ============ ROUTE NAVIGATION ============ */
  goToRegister(): void {
    this.router.navigate(['/register']);
  }
}
