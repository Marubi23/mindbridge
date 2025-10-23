import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule, FaIconLibrary } from '@fortawesome/angular-fontawesome';
import {
  faMoon,
  faFont,
  faSun,
  faCog,
  faXmark,
  faPlus,
  faMinus
} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-accessibility',
  standalone: true,
  imports: [FormsModule, CommonModule, FontAwesomeModule],
  templateUrl: './accessibility.html',
  styleUrls: ['./accessibility.css']
})
export class AccessibilityComponent {
  panelOpen = false;
  darkMode = localStorage.getItem('darkMode') === 'true';
  fontSize = parseFloat(localStorage.getItem('fontSize') || '1');
  brightness = parseFloat(localStorage.getItem('brightness') || '1');

  constructor(private fa: FaIconLibrary) {
    // ✅ Include all required icons here
    fa.addIcons(faMoon, faFont, faSun, faCog, faXmark, faPlus, faMinus);
  }

  togglePanel() {
    this.panelOpen = !this.panelOpen;
  }

  applyDarkMode() {
    document.body.classList.toggle('dark-mode', this.darkMode);
    localStorage.setItem('darkMode', this.darkMode.toString());
  }

  adjustFont(action: 'increase' | 'decrease') {
    if (action === 'increase') this.fontSize += 0.1;
    else this.fontSize = Math.max(0.8, this.fontSize - 0.1);
    document.body.style.fontSize = `${this.fontSize}em`;
    localStorage.setItem('fontSize', this.fontSize.toString());
  }

  applyBrightness() {
    document.body.style.filter = `brightness(${this.brightness})`;
    localStorage.setItem('brightness', this.brightness.toString());
  }

  ngOnInit() {
    if (this.darkMode) document.body.classList.add('dark-mode');
    document.body.style.fontSize = `${this.fontSize}em`;
    document.body.style.filter = `brightness(${this.brightness})`;
  }
}
