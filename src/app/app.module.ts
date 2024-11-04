import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QRCodeModule } from 'angularx-qrcode';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { StaffService } from './CORE/services/staff/staff.service';
import { provideHttpClient, withFetch } from '@angular/common/http';
import {
  BrowserModule,
  provideClientHydration,
} from '@angular/platform-browser';

@NgModule({
  declarations: [],
  imports: [CommonModule, QRCodeModule, FormsModule, HttpClientModule],
  providers: [
    StaffService,
    provideClientHydration(),
    provideHttpClient(withFetch()),
  ],
})
export class AppModule {}
