import { Component, OnInit, AfterViewInit, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule, FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { faChild, faChartLine, faShieldAlt, faBell } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-parent-landing',
  standalone: true,
  imports: [CommonModule, FontAwesomeModule],
  templateUrl: './parent-landing.html',
  styleUrls: ['./parent-landing.css']
})
export class ParentLandingComponent implements OnInit, AfterViewInit {
  private videoElement!: HTMLVideoElement;

  parentFeatures = [
    { title: 'Monitor Progress', desc: 'Track your child’s learning milestones in real time.', icon: faChartLine, colorClass: 'bg-cyan' },
    { title: 'Secure Data', desc: 'All information is safely stored and encrypted.', icon: faShieldAlt, colorClass: 'bg-purple' },
    { title: 'Child Profiles', desc: 'Manage multiple children accounts effortlessly.', icon: faChild, colorClass: 'bg-blue' },
    { title: 'Notifications', desc: 'Receive alerts for completed lessons or milestones.', icon: faBell, colorClass: 'bg-pink' }
  ];

  constructor(private faLibrary: FaIconLibrary) {
    this.faLibrary.addIcons(faChild, faChartLine, faShieldAlt, faBell);
  }

  ngOnInit() {}

  ngAfterViewInit() {
    this.initializeVideo();
  }

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
    window.location.href = '/parent-register';
  }

  goToRegisterChild() {
    window.location.href = '/child-register';
  }
}
