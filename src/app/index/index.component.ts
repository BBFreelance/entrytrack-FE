import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DefaultNavbarComponent } from "../components/default-navbar/default-navbar.component";


@Component({
  selector: 'app-index',
  standalone: true,
  imports: [DefaultNavbarComponent],
  templateUrl: './index.component.html',
  styleUrl: './index.component.css'
})
export class IndexComponent {
  constructor(private router: Router) {}

  // Function to navigate to different pages based on user role
  navigateTo(path: string): void {
    this.router.navigate([path]);
  }
}
