// Place in your main footer component TS or global script
import { Component, AfterViewInit, HostListener } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.html',
  styleUrls: ['./footer.css']
})
export class FooterComponent implements AfterViewInit {

  ngAfterViewInit() {
    this.checkReveal();
  }

  @HostListener('window:scroll', [])
  onScroll() {
    this.checkReveal();
  }

  private checkReveal() {
    const footer = document.querySelector('.footer-wrapper');
    if (!footer) return;
    const trigger = window.innerHeight * 0.85;
    if (footer.getBoundingClientRect().top < trigger) {
      footer.classList.add('visible');
    }
  }
}
