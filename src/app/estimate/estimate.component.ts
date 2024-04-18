import { Component } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'; // Import HttpClientModule
import { FirebaseService } from '../firebase.service';

@Component({
  selector: 'app-estimate',
  standalone: true,
  imports: [
    HttpClientModule // Add HttpClientModule here
  ],
  templateUrl: './estimate.component.html',
  styleUrls: ['./estimate.component.scss']
})
export class EstimateComponent {

  constructor(private emailService: FirebaseService) {}

  sendEmail() {
    const formData = {
      name: 'Jane Doe',
      email: 'janedoe@example.com',
      message: 'Hello, this is a test message!'
    };

    this.emailService.sendEmail().subscribe({
      next: (response) => console.log('Email sent successfully', response),
      error: (error) => console.error('Error sending email', error)
    });
  }
}
