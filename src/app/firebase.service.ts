// Import the functions you need from the SDKs you need
import { Injectable } from '@angular/core';
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {
  private app: any;
  private analytics: any;

  constructor(private http: HttpClient) {
    // Your web app's Firebase configuration
    const firebaseConfig = {
      apiKey: "AIzaSyCrwBQRsK946myNLO4CRTdpWhQOaxQHbUY",
      authDomain: "kings-asphalt.firebaseapp.com",
      projectId: "kings-asphalt",
      storageBucket: "kings-asphalt.appspot.com",
      messagingSenderId: "372230812121",
      appId: "1:372230812121:web:516331eb539d63c0e4e9c8",
      measurementId: "G-30KZB1M7RC"
    };

    // Initialize Firebase
    this.app = initializeApp(firebaseConfig);
    this.analytics = getAnalytics(this.app);
  }

  sendEmail() {
    const functionUrl = 'https://us-central1-kings-asphalt.cloudfunctions.net/sendEmail'; // Update this URL with your actual Cloud Function URL

    const body = {
      "data": {
          "aString": "some string",
          "anInt": 57,
          "aFloat": 1.23
      }
  }
    return this.http.post(functionUrl, body);
  }

  

}
