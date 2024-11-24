import { Component, Inject, OnInit, PLATFORM_ID } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Router } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { AdminService } from './CORE/services/admin/admin.service';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule, HttpClientModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  providers: [AdminService],
})
export class AppComponent implements OnInit {
  showNavbar = true;

  constructor(
    private adminService: AdminService,
    @Inject(PLATFORM_ID) private platformId: any
  ) {}

  ngOnInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      this.loadThemeFromLocalStorage();
      this.loadThemeFromDB();
    }
  }

  loadThemeFromLocalStorage(): void {
    // Check if theme is saved in localStorage
    // const currentTheme = document.documentElement.getAttribute('data-theme');
    // if (currentTheme === 'light') {
     
    const savedTheme = localStorage.getItem('dark_mode');
    if (savedTheme === 'true') {
      document.documentElement.setAttribute('data-theme', 'dark');
    } else if (savedTheme === 'false') {
      document.documentElement.setAttribute('data-theme', 'light');
    }
  }

  loadThemeFromDB(): void {
    this.adminService.getSystemSettingById(1).subscribe({
      next: (response: any) => {
        if (response?.dark_mode !== undefined) {
          console.log('Database theme: ', response?.dark_mode);

          // If dark mode setting in DB is true and not in localStorage, update the localStorage
          if (response?.dark_mode) {
            document.documentElement.setAttribute('data-theme', 'dark');
            // document.documentElement.classList.add('dark');
            localStorage.setItem('dark_mode', 'true');
            this.loadThemeFromLocalStorage();
          } else {
            document.documentElement.setAttribute('data-theme', 'light');
            // document.documentElement.classList.remove('dark');
            localStorage.setItem('dark_mode', 'false');
            this.loadThemeFromLocalStorage();
          }
        }
      },
      error: (err) => {
        console.error('Error fetching system setting', err);
        // You can choose to fall back to the default theme if there's an error
      },
    });
  }
}
