import { Component } from '@angular/core';
import { QRCodeModule } from 'angularx-qrcode';  // Import the QRCodeModule here if you're using it inside this component
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';  // For using [(ngModel)]
import { interval, Subscription } from 'rxjs';

@Component({
  selector: 'app-qr-code-generator',
  standalone: true,  // Mark the component as standalone
  templateUrl: './qr-code-generator.component.html',
  styleUrls: ['./qr-code-generator.component.css'],
  imports: [QRCodeModule, CommonModule, FormsModule]  // Import modules needed for this component
})
export class QrCodeGeneratorComponent {
  qrData: string = ''; // The dynamic data for the QR code
  qrActive: boolean = false; // Whether the QR generation is active or not
  qrInterval: Subscription | null = null; // Subscription to handle the interval

  // Start generating the QR code
  startGeneratingQR(): void {
    this.qrActive = true;
    this.generateQRData(); // Generate the first QR code

    // Set up an interval to regenerate the QR code every 10 minutes (600000 ms)
    this.qrInterval = interval(600000).subscribe(() => {
      this.generateQRData();
    });
  }

  // Stop generating the QR code
  stopGeneratingQR(): void {
    this.qrActive = false;

    // Stop the interval when the admin ends the QR code generation
    if (this.qrInterval) {
      this.qrInterval.unsubscribe();
      this.qrInterval = null;
    }
  }

  // Method to generate new QR code data (this can be a session token, timestamp, or any other dynamic value)
  generateQRData(): void {
    const currentTime = new Date().toISOString(); // Using the current timestamp for the QR data
    this.qrData = `kehadiran-${currentTime}`;
  }
}
