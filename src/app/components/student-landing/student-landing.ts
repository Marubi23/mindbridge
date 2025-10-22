import { Component, OnInit, AfterViewInit, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule, FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { faBrain, faChartLine, faUserDoctor, faPeopleGroup, faVrCardboard } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-student-landing',
  standalone: true,
  imports: [CommonModule, FontAwesomeModule],
  templateUrl: './student-landing.html',
  styleUrls: ['./student-landing.css']
})
export class StudentLandingComponent implements OnInit, AfterViewInit {
  private videoElement!: HTMLVideoElement;

  features = [
    { title: 'Mood Tracker', desc: 'Monitor your daily mood and learn about yourself.', icon: 'brain', color: '#00d4ff' },
    { title: 'Progress Journal', desc: 'Record your activities and track achievements.', icon: 'chart-line', color: '#a259ff' },
    { title: 'Guided Learning', desc: 'Interactive lessons to help you stay focused.', icon: 'user-doctor', color: '#0077ff' },
    { title: 'Live Sessions', desc: 'Join real-time sessions with your teachers.', icon: 'people-group', color: '#ff5abf' },
    { title: 'Immersive Tools', desc: 'Engaging experiences to make learning fun.', icon: 'vr-cardboard', color: '#3cff9f' }
  ];

  constructor(private faLibrary: FaIconLibrary) {
    this.faLibrary.addIcons(faBrain, faChartLine, faUserDoctor, faPeopleGroup, faVrCardboard);
  }

  ngOnInit() {}

  ngAfterViewInit() {
    this.initializeVideo();
  }

  /* ============ VIDEO LOGIC ============ */
  private initializeVideo() {
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
  onScroll() {
    this.applyParallax();
  }

  private applyParallax() {
    if (!this.videoElement) return;
    const scrollTop = window.scrollY || document.documentElement.scrollTop;
    const offset = Math.min(scrollTop * 0.25, 150);
    this.videoElement.style.transform = `translateY(${offset}px) scale(1.05)`;
  }

  goToRegister() {
    // Navigate to register page
    window.location.href = '/register';
  }
}
