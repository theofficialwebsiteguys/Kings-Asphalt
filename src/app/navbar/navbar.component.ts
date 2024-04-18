import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

interface IsActiveMap {
  [key: number]: boolean;
}

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {

  constructor(private router: Router) { }


  route(page: string) {
    this.router.navigate(['/' + page]);
  }

  isActive: IsActiveMap = {
    1: false,
    2: false,
    3: false,
    4: false
  };

  toggleActive(divNumber: number) {
    switch (divNumber) {
      case 1:
        // Redirect to the URL for reading reviews
        window.location.href = 'https://example.com/reviews';
        break;
      case 2:
        // Redirect to the URL for messaging
        window.open('https://www.messenger.com/login.php?next=https%3A%2F%2Fwww.messenger.com%2Ft%2F104991507892332%2F%3Fmessaging_source%3Dsource%253Apages%253Amessage_shortlink%26source_id%3D1441792%26recurring_notification%3D0', '_blank');
        break;
      case 3:
        // Redirect to the URL for emailing
        window.open('mailto:julio@kingshighwayasphalt.net?subject=Questions About Your Business&body=');
        break;
      case 4:
        // Redirect to the URL for sharing
        window.open('https://www.addtoany.com/share', '_blank');
        break;
      default:
        break;
    }
  }
}
