import { CommonModule } from '@angular/common';
import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  @ViewChild('videoPlayer') videoPlayer!: ElementRef<HTMLVideoElement>;

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

}