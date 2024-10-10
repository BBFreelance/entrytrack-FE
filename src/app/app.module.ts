import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QRCodeModule } from 'angularx-qrcode';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { StaffService } from './CORE/services/staff/staff.service';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    QRCodeModule ,
    FormsModule,
    HttpClientModule,
  ],
  providers: [StaffService],
})
export class AppModule { }
