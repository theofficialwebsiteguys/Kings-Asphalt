import { CommonModule } from '@angular/common';
import { Component, ElementRef, ViewChild } from '@angular/core';
import { HeroComponent } from '../hero/hero.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, HeroComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  @ViewChild('videoPlayer') videoPlayer!: ElementRef<HTMLVideoElement>;

  isOpen: boolean = false;
  isClosingSoon: boolean = false;
  openingTime: string = '';

  reviews = [
    {
      name: 'Beverly K',
      date: '3/9/2024',
      comment: 'Professional experts. New surface had held up well. Decorative blocks at berm are attractive',
      stars: 5
    },
    {
      name: 'K A',
      date: '3/6/2024',
      comment: 'Very friendly salesman and work was performed on time.',
      stars: 4
    }
  ];

  constructor() { }

  setupInitialFrame(): void {
    const video = this.videoPlayer.nativeElement;
    if (video.duration > 1) { // Check if the video is longer than 5 seconds
      video.currentTime = 1; // Seek to 5 seconds
    }
  }

  ngOnInit() {
    this.updateStatus();
    setInterval(() => {
      this.updateStatus();
    }, 60000); // Update every minute
  }

  updateStatus() {
    const currentHour = new Date().getHours();
    const openingHour = 7; // 7:00 AM
    const closingHour = 22; // 10:00 PM

    if (currentHour >= openingHour && currentHour < closingHour && currentHour <= closingHour - 2) {
      this.isOpen = true;
      this.isClosingSoon = false;
      this.openingTime = ` • Closes ${closingHour - 12}:00 PM`;
    } else if (currentHour >= openingHour && currentHour < closingHour) {
      this.isClosingSoon = true;
      this.isOpen = false;
      this.openingTime = ` • Closing Soon ${closingHour - 12}:00 PM`;
    }
    else {
      this.isOpen = false;
      this.isClosingSoon = false;
      this.openingTime = ` • Opens at ${openingHour}:00 AM`;
    }
  }
}
