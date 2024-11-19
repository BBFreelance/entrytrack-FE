import { Component, HostListener } from '@angular/core';
import { QRCodeModule } from 'angularx-qrcode'; // Import the QRCodeModule here if you're using it inside this component
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'; // For using [(ngModel)]
import { interval, Subscription } from 'rxjs';
import { NavbarComponent } from '../../navbar/navbar.component';

import {
  HttpClient,
  HttpClientModule,
  HttpHandler,
} from '@angular/common/http';

@Component({
  selector: 'app-sec-qr-code-generator',
  standalone: true,
  templateUrl: './sec-qr-code-generator.component.html',
  styleUrl: './sec-qr-code-generator.component.css',
  imports: [QRCodeModule, CommonModule, FormsModule, HttpClientModule, NavbarComponent], // Import modules needed for this component
})
export class SecQrCodeGeneratorComponent {
  qrData: string = ''; // Holds the dynamic QR code data
  qrImage: string = ''; // Holds the QR code image URL
  qrActive: boolean = false; // Indicates if QR generation is active
  qrInterval: Subscription | null = null; // Subscription to manage the interval
  baseUrl: string = 'https://entry-api-c3851cedfc0d.herokuapp.com/api'; // Replace with your API base URL
  is_loading: boolean = false;
  isExitConfirmed: boolean = false; // To track user confirmation
  constructor(private http: HttpClient) {}

  // Start generating the QR code
  startGeneratingQR(): void {
    this.qrActive = true;
    const code = this.generateRandomString(5);
    this.is_loading = true;
    this.generateQRData(code); // Generate the first QR code immediately

    // Set up an interval to regenerate the QR code every 10 minutes (600000 ms)
    // this.qrInterval = interval(600000).subscribe(() => {
    //   this.generateQRData(code);
    // });
  }

  // Stop generating the QR code
  stopGeneratingQR(): void {
    this.qrActive = false;

    // Stop the interval when QR generation ends
    if (this.qrInterval) {
      this.qrInterval.unsubscribe();
      this.qrInterval = null;
    }

    // Reset QR code data and image
    this.qrData = '';
    this.qrImage = '';
  }

  // Generate new QR code data and fetch the QR code image
  generateQRData(code: string): void {
    const expirationDate = this.getEndOfDay();
  
    const payload = {
      user_id: 35, // Replace with the actual user ID
      code: code,
      expiration_date: expirationDate,
    };
  
    this.http.post(`${this.baseUrl}/qr-codes`, payload).subscribe({
      next: () => {
        // Fetch the updated QR code image
        this.fetchQRCodeImage();
      },
      error: (err: any) => {
        console.error('Error creating/updating QR code:', err);
      },
    });
  }

  // Fetch the QR code image from API 2
  fetchQRCodeImage(): void {
    this.http
      .get<any>(`${this.baseUrl}/qr-codes/get/qr-image`) // Default `responseType` is 'json'
      .subscribe({
        next: (res) => {
          console.log('API Response:', res);
          if (res.status === '0000') {
            this.qrImage = res.data; // Update the QR code image URL
            this.qrActive = true; // Ensure the QR Code div is visible
            this.is_loading = false;
            console.log('Updated QR Image:', this.qrImage);
          } else {
            console.warn('Unexpected status code:', res.status);
          }
        },
        error: (err) => {
          console.error('Error fetching QR code image:', err);
        },
      });
  }

  // Generate a random 5-character alphanumeric string
  generateRandomString(length: number): string {
    const characters =
      '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
    let result = '';
    for (let i = 0; i < length; i++) {
      result += characters.charAt(
        Math.floor(Math.random() * characters.length)
      );
    }
    return result;
  }

  // Get 11:59 PM of the current date as a string
  getEndOfDay(): string {
    const now = new Date();
    const endOfDay = new Date(
      now.getFullYear(),
      now.getMonth(),
      now.getDate(),
      23,
      59,
      59
    );
    return endOfDay.toISOString().slice(0, 19).replace('T', ' '); // Format to 'YYYY-MM-DD HH:mm:ss'
  }

  // Listen to the browser/tab close or refresh event
  @HostListener('window:beforeunload', ['$event'])
  onBeforeUnload(event: BeforeUnloadEvent): void {
    if (this.qrActive && !this.isExitConfirmed) {
      event.preventDefault();
      event.returnValue = ''; // This triggers the browser's confirmation dialog
    }
  }

  // Confirm before navigating away from the component
  canDeactivate(): boolean {
    if (this.qrActive && !this.isExitConfirmed) {
      return confirm('Are you sure you want to exit? This will generate a new QR code.');
    }
    return true;
  }

  // Clean up the interval on component destruction
  ngOnDestroy(): void {
    this.stopGeneratingQR();
  }
}
