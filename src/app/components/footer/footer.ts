import { Component, OnInit, HostListener } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.html',
  styleUrls: ['./footer.css']
})
export class FooterComponent implements OnInit {

  ngOnInit(): void {
    this.animateOnScroll();
  }

  @HostListener('window:scroll', [])
  onScroll() {
    this.animateOnScroll();
  }

  private animateOnScroll() {
    const footer = document.querySelector('.footer-wrapper');
    if (!footer) return;

    const rect = footer.getBoundingClientRect();
    if (rect.top < window.innerHeight - 100) {
      footer.classList.add('visible');
    }
  }
}
