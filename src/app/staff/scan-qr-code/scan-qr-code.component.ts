import { Component } from '@angular/core';
import { QRCodeModule } from 'angularx-qrcode';  // Import the QRCodeModule here if you're using it inside this component
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';  // For using [(ngModel)]

@Component({
  selector: 'app-scan-qr-code',
  standalone: true,
  imports: [QRCodeModule, CommonModule, FormsModule],
  templateUrl: './scan-qr-code.component.html',
  styleUrl: './scan-qr-code.component.css'
})
export class ScanQrCodeComponent {
  public qrData: string = '';
  public generated: boolean = false;

  generateQrCode(data: string) {
    if (data) {
      this.qrData = data;
      this.generated = true;
    } else {
      this.generated = false;
    }
  }
}
