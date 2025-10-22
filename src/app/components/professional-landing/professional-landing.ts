import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { FontAwesomeModule, FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { faBrain, faUserDoctor, faCalendarCheck, faComments } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-professional-landing',
  standalone: true,
  imports: [CommonModule, FontAwesomeModule],
  templateUrl: './professional-landing.html',
  styleUrls: ['./professional-landing.css']
})
export class ProfessionalLandingComponent {
  constructor(private router: Router, private faLibrary: FaIconLibrary) {
    this.faLibrary.addIcons(faBrain, faUserDoctor, faCalendarCheck, faComments);
  }

  professionalFeatures = [
    {
      title: 'Qualified Experts',
      desc: 'Certified psychiatrists ready to guide and support every student.',
      icon: faUserDoctor,
      colorClass: 'bg-cyan'
    },
    {
      title: 'Track Progress',
      desc: 'Monitor student progress and provide timely interventions.',
      icon: faBrain,
      colorClass: 'bg-purple'
    },
    {
      title: 'Schedule Sessions',
      desc: 'Organize and manage appointments efficiently.',
      icon: faCalendarCheck,
      colorClass: 'bg-blue'
    },
    {
      title: 'Secure Communication',
      desc: 'Confidential chats with parents and students within the platform.',
      icon: faComments,
      colorClass: 'bg-pink'
    }
  ];

  goToRegister() {
    this.router.navigate(['/professional-register']);
  }

  goToDashboard() {
    this.router.navigate(['/professional-dashboard']);
  }
}
